import type { RoutesProps } from '@/types/interfaces'

const userMenuData: RoutesProps[] = [
    {
        id: 1,
        url: 'sign-in',
        text: 'Sign In',
        isLogging: false,
        orderMenu: 1,
    },
    {
        id: 2,
        url: 'sign-up',
        text: 'Sign Up',
        isLogging: false,
        orderMenu: 2,
    },
    {
        id: 3,
        url: 'profile',
        text: 'Profile',
        isLogging: true,
        orderMenu: 3,
    },
]

export default userMenuData
