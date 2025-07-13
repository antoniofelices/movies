import { createLazyFileRoute } from '@tanstack/react-router'
import Profile from '@pages/Profile'

export const Route = createLazyFileRoute('/_auth/profile')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Profile />
}
