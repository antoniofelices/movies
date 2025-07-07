import Button from '@/components/base/Button'
import type { CardProps } from '@/types/interfaces'
import { APIMOVIESIMAGESURL } from '@/api/moviesApiData'

const Card = ({
    content,
    // images,
}: {
    content: CardProps
    // images?: string[]
}) => {
    return (
        <div className="mx-8 my-8 flex flex-col items-center justify-between gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            {content.poster_path && (
                <img
                    src={`${APIMOVIESIMAGESURL}${content.poster_path}`}
                    height="120"
                    width="120"
                    alt="movie poster"
                />
            )}
            <h2 className="items-center text-lg font-bold text-blue-900">
                {content.title}
            </h2>
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

export default Card
