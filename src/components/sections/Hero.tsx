import Button from '@components/base/Button'
import type { HeroSectionProps } from '@/types/interfaces'

const Hero = ({
    classes,
    content,
    image,
}: {
    classes?: string
    content: HeroSectionProps
    image?: string
}) => {
    const individualClasses = classes ? classes : ''

    return (
        <section
            id="hero"
            className={`@container/header relative py-11 ${individualClasses}`}
        >
            <div className="hero-container grid lg:grid-cols-2 lg:gap-(--spacing-7) lg:text-center">
                <div className="hero-text order-2 lg:order-1">
                    <div className="flex justify-center gap-2 lg:justify-start">
                        {content.textButton && (
                            <Button
                                type="button"
                                classes={`lg:px-6`}
                                text={content.textButton}
                            />
                        )}
                    </div>
                </div>
                {image && (
                    <figure className="hero-image order-1 lg:order-2">
                        <img src={image} alt={content.altimage} />
                    </figure>
                )}
            </div>
        </section>
    )
}

export default Hero
