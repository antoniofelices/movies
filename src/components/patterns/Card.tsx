import { APIMOVIESIMAGESURL } from '@/config/config'
import { useNavigate } from '@tanstack/react-router'

const Card = ({
    id,
    image,
    title,
    type,
}: {
    id: number
    image?: string
    title?: string
    type: string
}) => {
    const navigate = useNavigate()

    const typeContent = type === 'movie' ? 'movie' : 'person'

    const handleCardClick = () => {
        navigate({ to: `/${typeContent}/${id}` })
    }

    return (
        <div
            onClick={handleCardClick}
            className="rounded-lg cursor-pointer bg-white dark:bg-blue-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardClick()
                }
            }}
        >
            <div className="flex flex-col">
                {image && (
                    <img
                        src={`${APIMOVIESIMAGESURL}${image}`}
                        alt={`movie poster ${title}`}
                    />
                )}
                {title && (
                    <div className="p-6 lg:mx-0">
                        <h2 className="text-sm font-bold text-center">
                            {title}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card
