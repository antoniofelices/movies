import Button from '@/components/base/Button'
import type { MovieProps } from '@/types/interfaces'
import { APIMOVIESIMAGESURL } from '@/api/moviesApiData'

const MovieCard = ({ content }: { content: MovieProps }) => {
    return (
        <div className="mx-8 my-8 flex flex-col items-center justify-between gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            {content.poster_path && (
                <img
                    src={`${APIMOVIESIMAGESURL}${content.poster_path}`}
                    alt={`movie poster ${content.title}`}
                />
            )}
            <h2 className="items-center text-lg font-bold">{content.title}</h2>
            <p className="text-sm">{content.overview}</p>
            <Button
                type="button"
                text="Ver"
                classes="text-xs"
                url={`/movie/${content.id}`}
            />
        </div>
    )
}

export default MovieCard
