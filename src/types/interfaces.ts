import type { ButtonHTMLAttributes } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    classes?: string
    url?: string
    variant?: 'blue' | 'red' | 'transparent'
}
// export type CardProps = {
//     id: number
//     slug: string
//     text: string
//     image?: string
//     buttonText?: string
// }
export type CardsMovieProps = {
    textButton: string
}
export type HeroSectionProps = {
    title: string
    textIntro: string
    altimage?: string
    textButton?: string
}
export type MovieProps = {
    id: number
    overview?: string
    poster_path?: string
    tagline?: string
    title: string
    vote_average?: number
    vote_count?: number
}

export type CastProps = {
    id: number
    name: string
    profile_path?: string
}

export type CreditsMovieProps = {
    id: number
    cast: CastProps[]
}

export type RoutesProps = {
    id: number
    url: string
    text: string
    isInMenu: boolean
    orderMenu?: number
}
