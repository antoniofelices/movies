import { useNavigate } from '@tanstack/react-router'
import Container from '@components/base/Container'
import FormAuth from '@/components/patterns/FormAuth'
import contentForm from '@data/formAuth'
import { registerUser } from '@/services/supabaseService'
import { getUserData } from '@helpers/signUpUtils'
import { useFormErrors } from '@/hooks/useFormErrors'

const SignUp = () => {
    const navigate = useNavigate()
    const { errors, errorHandler, resetErrors } = useFormErrors()

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const client = getUserData(formData)
        await registerHandler(client)
    }

    const registerHandler = async ({
        email,
        password,
        username,
    }: {
        email: string
        password: string
        username: string
    }) => {
        resetErrors()

        if (!email || !password) {
            errorHandler({ noEmailPassword: true })
            return
        }

        const { error } = await registerUser(email, password, username)

        if (error) {
            if (error.message.includes('User already registered')) {
                errorHandler({ repeatEmail: true })
            } else {
                errorHandler({
                    isError: true,
                    message: error.message,
                })
            }
            return
        }

        navigate({ to: '/profile' })
    }

    return (
        <Container>
            <h1>Sign Up</h1>
            <FormAuth
                actionType="sign-up"
                content={contentForm}
                errors={errors}
                onSubmit={submitHandler}
            />
        </Container>
    )
}

export default SignUp
