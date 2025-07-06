import { createLazyFileRoute } from '@tanstack/react-router'
import Movies from '@pages/Movies'

export const Route = createLazyFileRoute('/_auth/movies')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Movies />
        </>
    )
}
