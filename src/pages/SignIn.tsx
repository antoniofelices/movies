import { useNavigate } from '@tanstack/react-router'
import Container from '@components/base/Container'
import FormAuth from '@/components/patterns/FormAuth'
import contentForm from '@/data/formAuth'
import { signInWithPassword } from '@/services/supabaseService'
import { getUserData } from '@/helpers/formAuthUtils'
import { useFormErrors } from '@/hooks/useFormErrors'

const SignIn = () => {
    const navigate = useNavigate()
    const { errors, errorHandler, resetErrors } = useFormErrors()

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const client = getUserData(formData)
        await loginHandler(client)
    }

    const loginHandler = async ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => {
        resetErrors()

        if (!email || !password) {
            errorHandler({ noEmailPassword: true })
            return
        }

        const { error } = await signInWithPassword(email, password)

        if (error) {
            errorHandler({
                isError: true,
                message: error.message,
            })
            return
        }

        navigate({ to: '/movie/list' })
    }

    return (
        <Container>
            <h1>Sign In</h1>
            <FormAuth
                actionType="sign-in"
                content={contentForm}
                errors={errors}
                onSubmit={submitHandler}
            />
        </Container>
    )
}

export default SignIn
