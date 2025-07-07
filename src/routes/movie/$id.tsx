import { createFileRoute } from '@tanstack/react-router'
import SingleMovie from '@/pages/SingleMovie'

export const Route = createFileRoute('/movie/$id')({
    component: RouteComponent,
})

function RouteComponent() {
    const { id } = Route.useParams()
    return <SingleMovie id={id} />
}
