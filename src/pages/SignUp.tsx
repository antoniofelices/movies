import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import Container from '@components/base/Container'
import FormAuth from '@/components/patterns/FormAuth'
import content from '@data/formAuth'
import { registerUser } from '@/services/supabaseService'
import { initialErrors, getUserData, errorHandler } from '@helpers/signUpUtils'
import type { SignUpErrors } from '@/types/interfaces'

const Errors = (errors: SignUpErrors) => {
    return (
        <>
            {errors.noEmailPassword && <p>No email or password fields.</p>}
            {errors.repeatEmail && (
                <>
                    <p>The email was registered.</p>
                    <Link to={'/sign-in'}>Sign in</Link>
                </>
            )}
            {errors.register && <p>Error: {errors.message}</p>}
        </>
    )
}

const SignUp = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState(initialErrors)

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
        setErrors(initialErrors)

        if (!email || !password) {
            errorHandler(setErrors, { noEmailPassword: true })
            return
        }

        const { error } = await registerUser(email, password, username)

        if (error) {
            if (error.message.includes('User already registered')) {
                errorHandler(setErrors, { repeatEmail: true })
            } else {
                errorHandler(setErrors, {
                    register: true,
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
                content={content}
                onSubmit={submitHandler}
                actionType="sign-up"
            />
            <Errors {...errors} />
        </Container>
    )
}

export default SignUp
