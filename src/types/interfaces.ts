import type { ButtonHTMLAttributes } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | undefined
    classes?: string
    url?: string
    variant?: 'blue' | 'transparent'
    icon?: boolean
    orientationIcon?: 'right' | 'left'
}

export type MovieProps = {
    id: number
    overview?: string
    poster_path?: string
    tagline?: string
    title: string
    vote_average?: number
    vote_count?: number
    release_date?: string
}

export type MovieCast = {
    id: number
    character?: string
    poster_path?: string
    release_date?: string
    title: string
}

export type PersonProps = {
    id: number
    biography?: string
    birthday?: string
    name: string
    profile_path?: string
    place_of_birth?: string
    cast?: []
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
