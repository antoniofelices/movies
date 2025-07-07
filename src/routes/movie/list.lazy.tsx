import { createLazyFileRoute } from '@tanstack/react-router'
import Movies from '@pages/Movies'

export const Route = createLazyFileRoute('/movie/list')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Movies />
        </>
    )
}
