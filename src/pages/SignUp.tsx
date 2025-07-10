import { useState } from 'react'
import Container from '@components/base/Container'
import FormAuth from '@/components/patterns/FormAuth'
import content from '@data/formAuth'
import { supabase } from '@/lib/supabaseClient'
import { useNavigate } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

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

    const [errors, setErrors] = useState({
        noEmailPassword: false,
        repeatEmail: false,
        register: false,
        message: '',
    })

    const errorHandler = (error: any) => {
        setErrors(error)
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
        if (!email || !password) {
            errorHandler({ ...errors, noEmailPassword: true })
            return
        }

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
            if (error.message.includes('User already registered')) {
                errorHandler({ ...errors, repeatEmail: true })
            } else {
                errorHandler({ ...errors, message: error.message })
            }
            return
        }

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
            {errors.noEmailPassword && <p>No email or password fields.</p>}
            {errors.repeatEmail && (
                <>
                    <p>The email was registered.</p>
                    <Link to={'/sign-in'}>Sign in</Link>
                </>
            )}
            {errors.register && <p>Error: {errors.message}</p>}
        </Container>
    )
}

export default SignUp
