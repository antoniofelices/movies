// import { useId } from 'react'
import Container from '@components/base/Container'
// import Button from '@components/base/Button'
// import content from '@data/form'
import { useAuth } from '@hooks/useAuth'
import { useRouter } from '@tanstack/react-router'

function Login() {
    // const emailId = useId()
    // const passwordId = useId()
    const router = useRouter()

    const { signIn, signOut, isLogged } = useAuth()

    return (
        <Container>
            <h1>Login</h1>
            {isLogged() ? (
                <>
                    <p>Hello user!</p>
                    <button
                        onClick={async () => {
                            signOut()
                            router.invalidate()
                        }}
                    >
                        Sign out
                    </button>
                </>
            ) : (
                <button
                    onClick={async () => {
                        signIn()
                        router.invalidate()
                    }}
                >
                    Sign in
                </button>
            )}
            {/* <form className="py-6">
                <div className="grid lg:grid-cols-12 lg:justify-items-start">
                    <div className="relative w-full col-span-12 my-4">
                        <label htmlFor={emailId} className="sr-only">
                            {content.labelEmail}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id={emailId}
                            className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-gray-900 dark:text-white dark:bg-gray-600 dark:placeholder-white border border-gray-900 dark:border-gray-600 invalid:border-1 invalid:border-red focus:outline-none"
                            placeholder={content.labelEmail}
                            required
                        />
                    </div>
                    <div className="relative w-full col-span-12 my-4">
                        <label htmlFor={passwordId} className="sr-only">
                            {content.labelPassword}
                        </label>
                        <input
                            type="text"
                            name="clientname"
                            id={passwordId}
                            className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-gray-900 dark:text-white dark:bg-gray-600 dark:placeholder-white border border-gray-900 dark:border-gray-600 invalid:border-1 invalid:border-red focus:outline-none"
                            placeholder={content.labelPassword}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        classes={`w-full col-span-12 my-4`}
                        text={content.textButton}
                        variant="red"
                    />
                </div>
                <div>
                    <p className="message-error absolute top-[2.5rem] left-0 hidden w-full bg-red px-2 text-left text-sm text-white">
                        {content.textError}
                    </p>
                </div>
            </form> */}
        </Container>
    )
}

export default Login
