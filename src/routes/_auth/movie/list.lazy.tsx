import { createLazyFileRoute } from '@tanstack/react-router'
import Movies from '@pages/Movies'

export const Route = createLazyFileRoute('/_auth/movie/list')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Movies />
        </>
    )
}
