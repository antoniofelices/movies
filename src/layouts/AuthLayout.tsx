import type { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default AuthLayout
