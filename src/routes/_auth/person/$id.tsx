import { createFileRoute } from '@tanstack/react-router'
import SinglePerson from '@/pages/SinglePerson'

export const Route = createFileRoute('/_auth/person/$id')({
    component: RouteComponent,
    params: {
        parse: (params) => ({
            id: Number(params.id),
        }),
    },
})

function RouteComponent() {
    const { id } = Route.useParams()
    return <SinglePerson id={id} />
}
