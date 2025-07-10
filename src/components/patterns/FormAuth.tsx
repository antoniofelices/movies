import { useId } from 'react'
import Button from '@components/base/Button'
import type { Form } from '@/types/interfaces'

const FormAuth = ({
    actionType,
    content,
    onSubmit,
}: {
    actionType: string
    content: Form
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
    const confirmPasswordId = useId()
    const emailId = useId()
    const passwordId = useId()
    const userNameId = useId()

    const textButton =
        actionType === 'sign-in'
            ? content.textButtonSignIn
            : content.textButtonSignUp

    const isSignUp = actionType === 'sign-up' ? true : false

    return (
        <form className="py-6" onSubmit={onSubmit}>
            <div className="grid lg:grid-cols-12 lg:justify-items-start">
                {isSignUp && (
                    <div className="relative w-full col-span-12 my-4">
                        <label htmlFor={userNameId} className="sr-only">
                            {content.labelUserName}
                        </label>
                        <input
                            type="text"
                            name="username"
                            id={userNameId}
                            className=""
                            placeholder={content.labelUserName}
                            required
                        />
                    </div>
                )}
                <div className="relative w-full col-span-12 my-4">
                    <label htmlFor={emailId} className="sr-only">
                        {content.labelEmail}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id={emailId}
                        className=""
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
                        name="password"
                        id={passwordId}
                        className=""
                        placeholder={content.labelPassword}
                        required
                    />
                </div>
                {isSignUp && (
                    <div className="relative w-full col-span-12 my-4">
                        <label htmlFor={confirmPasswordId} className="sr-only">
                            {content.labelConfirmPassword}
                        </label>
                        <input
                            type="text"
                            name="confirmpassword"
                            id={confirmPasswordId}
                            className=""
                            placeholder={content.labelConfirmPassword}
                            required
                        />
                    </div>
                )}
                <Button
                    type="submit"
                    classes={`w-full col-span-12 my-4`}
                    text={textButton}
                    variant="red"
                />
            </div>
            <div>
                <p className="message-error absolute top-[2.5rem] left-0 hidden w-full bg-red px-2 text-left text-sm text-white">
                    {content.textError}
                </p>
            </div>
        </form>
    )
}

export default FormAuth
