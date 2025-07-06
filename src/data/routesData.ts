import type { RoutesProps } from '@/types/interfaces'

const routesData: RoutesProps[] = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        isInMenu: true,
        orderMenu: 1,
    },
    {
        id: 2,
        url: 'login',
        text: 'Login',
        isInMenu: true,
        orderMenu: 10,
    },
    {
        id: 3,
        url: 'movies',
        text: 'Movies',
        isInMenu: true,
        orderMenu: 2,
    },
    {
        id: 4,
        url: '*',
        text: 'Error',
        isInMenu: false,
    },
    {
        id: 5,
        url: 'sign-up',
        text: 'Sign Up',
        isInMenu: true,
        orderMenu: 11,
    },
]

export default routesData
