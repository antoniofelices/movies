import type { ButtonHTMLAttributes } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | undefined
    classes?: string
    url?: string
    variant?: 'blue' | 'transparent'
}

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
    orderMenu?: number
}

export type Form = {
    labelConfirmPassword?: string
    labelEmail: string
    labelPassword: string
    labelUserName?: string
    textError: string
    textButtonSignIn?: string
    textButtonSignUp?: string
    errorNoEmailPassword?: string
    error?: string
    errorEmailRepeat?: string
    textSignIn?: string
}

export type FormErrors = {
    isError?: boolean
    noEmailPassword?: boolean
    repeatEmail?: boolean
    register?: boolean
    message?: string
}
