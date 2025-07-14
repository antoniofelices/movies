import type { CastProps } from '@/types/interfaces'
import { APIMOVIESIMAGESURL } from '@/config/config'
import { useNavigate } from '@tanstack/react-router'

const PersonCard = ({ content }: { content: CastProps }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate({ to: `/person/${content.id}` })
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
            {content.profile_path && (
                <img
                    src={`${APIMOVIESIMAGESURL}${content.profile_path}`}
                    alt={`movie poster ${content.name}`}
                />
            )}
            <div className="bg-white dark:bg-blue-500 p-6 lg:mx-0">
                <h2 className="text-sm font-bold">{content.name}</h2>
            </div>
        </div>
    )
}

export default PersonCard
