import Button from '@/components/base/Button'
import type { CardProps } from '@/types/interfaces'

const Card = ({
    content,
    images,
}: {
    content: CardProps
    images?: string[]
}) => {
    return (
        <div className="mx-8 flex flex-col items-center justify-between gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            {images && (
                <img
                    src={images[content.id]}
                    height="120"
                    width="120"
                    alt="Logo browser"
                />
            )}
            <h3 className="items-center text-lg font-bold text-blue-900">
                {content.title}
            </h3>
            <p className="text-sm">{content.text}</p>
            {content.buttonText && (
                <Button
                    type="button"
                    text={content.buttonText}
                    classes="text-xs"
                />
            )}
        </div>
    )
}

export default Card
