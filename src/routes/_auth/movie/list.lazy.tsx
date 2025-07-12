import { createLazyFileRoute } from '@tanstack/react-router'
import MovieList from '@/pages/MovieList'

export const Route = createLazyFileRoute('/_auth/movie/list')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <MovieList />
        </>
    )
}
