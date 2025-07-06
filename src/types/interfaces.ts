import type { ButtonHTMLAttributes } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    classes?: string
    url?: string
    variant?: 'blue' | 'red' | 'transparent'
}
export type CardProps = {
    id: number
    slug: string
    text: string
    image?: string
    buttonText?: string
}
export type CardsSectionProps = {
    title: string
    textIntro: string
    cards: CardProps[]
}
export type HeroSectionProps = {
    title: string
    textIntro: string
    altimage?: string
    textButton1?: string
    textButton2?: string
}
export type PostProps = {
    id: number
    date: string
    excerpt: { rendered: string }
    link: string
    title: { rendered: string }
    content: { rendered: string }
    _embedded?: {
        'wp:featuredmedia': {
            id: number
            media_details: {
                sizes: {
                    medium: {
                        source_url: string
                    }
                }
            }
        }[]
    }
}

export type RoutesProps = {
    id: number
    text: string
    url: string
    isInMenu: boolean
    orderMenu?: number
}
