import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie')({
    component: DashboardLayout,
})

function DashboardLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}
