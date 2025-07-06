import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
    component: AuthComponent,
})

function AuthComponent() {
    return (
        <>
            <Outlet />
        </>
    )
}
