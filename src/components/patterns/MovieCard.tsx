import type { MovieProps } from '@/types/interfaces'
import { APIMOVIESIMAGESURL } from '@/config/config'
import { useNavigate } from '@tanstack/react-router'

const MovieCard = ({ content }: { content: MovieProps }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate({ to: `/movie/${content.id}` })
    }

    return (
        <div
            onClick={handleCardClick}
            className="flex flex-col rounded-lg cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardClick()
                }
            }}
        >
            {content.poster_path && (
                <img
                    src={`${APIMOVIESIMAGESURL}${content.poster_path}`}
                    alt={`movie poster ${content.title}`}
                />
            )}
            <div className="flex flex-col items-center justify-between gap-5 bg-white dark:bg-blue-500 p-6 lg:mx-0">
                <h2 className="items-center text-sm font-bold">
                    {content.title}
                </h2>
            </div>
        </div>
    )
}

export default MovieCard
