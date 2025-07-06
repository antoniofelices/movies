import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '@layouts/Header'

export const Route = createFileRoute('/_frontend')({
    component: FrontendLayout,
})

function FrontendLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
