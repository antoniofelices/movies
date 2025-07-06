import { createLazyFileRoute } from '@tanstack/react-router'
import Movies from '@pages/Movies'

export const Route = createLazyFileRoute('/_dashboard/movies')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Movies />
        </>
    )
}
