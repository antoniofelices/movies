import type { RoutesProps } from '@/types/interfaces'

const main: RoutesProps[] = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        orderMenu: 1,
    },
    {
        id: 2,
        url: 'movie/list',
        text: 'Movies',
        orderMenu: 2,
    },
]

export default main
