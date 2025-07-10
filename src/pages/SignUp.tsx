import Container from '@components/base/Container'
import FormAuth from '@/components/patterns/FormAuth'
import content from '@data/formAuth'
import { supabase } from '@/lib/supabaseClient'
import { useNavigate } from '@tanstack/react-router'

const SignUp = () => {
    const navigate = useNavigate()

    const getUserData = (formData: FormData) => ({
        confirmpassword: formData.get('confirmpassword') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        username: formData.get('username') as string,
    })

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
        if (!email || !password) return <h1>TODO: Fill the fields bitch</h1>
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                },
            },
        })

        if (error) {
            console.error('Error al registrar:', error.message)
            return
        }

        console.log('Usuario registrado:', data)
        navigate({ to: '/profile' })
    }

    return (
        <Container>
            <h1>Sign Up</h1>
            <FormAuth
                content={content}
                onSubmit={submitHandler}
                actionType="sign-up"
            />
        </Container>
    )
}

export default SignUp
