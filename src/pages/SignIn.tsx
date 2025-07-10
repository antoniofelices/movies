import Container from '@components/base/Container'
import FormAuth from '@/components/patterns/FormAuth'
import content from '@/data/formAuth'
import { supabase } from '@/lib/supabaseClient'
import { useNavigate } from '@tanstack/react-router'

const SignIn = () => {
    const navigate = useNavigate()

    const getUserData = (formData: FormData) => ({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

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
        if (!email || !password) return <h1>TODO: Fill the fields bitch</h1>
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (!error) {
            navigate({ to: '/movie/list' })
        } else {
            alert('Error al iniciar sesión')
        }
    }

    return (
        <Container>
            <h1>Sign In</h1>
            <FormAuth
                content={content}
                onSubmit={submitHandler}
                actionType="sign-in"
            />
        </Container>
    )
}

export default SignIn
