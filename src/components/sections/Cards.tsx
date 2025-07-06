import Card from '@components/patterns/Card'
import type { CardsSectionProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Cards = ({
    content,
    images,
}: {
    content: CardsSectionProps
    images?: string[]
}) => {
    const contentCards = content.cards
    const idSection = transformToId(content.title)

    return (
        <section id={idSection} className="@container/download py-11">
            <div className="container lg:max-w-2xl">
                <h1>Title</h1>
            </div>
            <div className="container-cards mx-auto my-10 grid gap-7 lg:max-w-4xl lg:grid-cols-3">
                {contentCards.map((card) => (
                    <Card key={card.id} content={card} images={images} />
                ))}
            </div>
        </section>
    )
}

export default Cards
