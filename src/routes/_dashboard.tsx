import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard')({
    component: DashboardLayout,
})

function DashboardLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}
