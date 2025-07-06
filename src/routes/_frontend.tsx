import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '@layouts/Header'

export const Route = createFileRoute('/_frontend')({
    component: AuthComponent,
})

function AuthComponent() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
