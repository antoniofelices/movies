import type {
    AsideSectionProps,
    CardsSectionProps,
    HeroSectionProps,
} from '@/types/interfaces'

const asideData: AsideSectionProps = {
    text1: 'Aliquam congue eget tortor vel lobortis. Sed ultrices enim mattis sapien sagittis, in finibus mi laoreet. ',
    button: {
        text: 'Sign in!',
    },
}

const keyConceptsData: CardsSectionProps = {
    title: 'Concepts',
    textIntro:
        'In a mauris interdum, commodo erat ac, consectetur dolor. Duis tempor urna quis tellus sodales tempus. Suspendisse suscipit nisl eu justo pretium fringilla.',
    cards: [
        {
            id: 0,
            title: 'Condimentum',
            text: 'Sed bibendum sodales purus id sagittis. Sed tincidunt eros a neque volutpat, id tincidunt arcu hendrerit. Donec condimentum diam id ante placerat, a molestie ex luctus. ',
        },
        {
            id: 1,
            title: 'Malesuada',
            text: ' Nam sed risus pulvinar, gravida turpis sed, eleifend magna. Nulla eu risus vel dui volutpat malesuada. Ut vehicula velit in risus efficitur placerat.',
        },
        {
            id: 2,
            title: 'Faucibus',
            text: 'Fusce quis finibus tellus. Integer at porttitor nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam et leo interdum, finibus nisl vitae, malesuada magna.',
        },
        {
            id: 3,
            title: 'Luctus',
            text: 'Orci luctus et ultrices posuere cubilia curae; Etiam et leo interdum, finibus nisl vitae, malesuada magna.',
        },
        {
            id: 4,
            title: 'Eleifend',
            text: 'Ut vehicula velit in risus efficitur placerat.',
        },
        {
            id: 5,
            title: 'Pellentesque',
            text: ' Donec eget vehicula lacus. Cras lacinia diam felis, vel hendrerit mauris convallis quis. Morbi fermentum tellus vitae augue dictum, vel aliquam urna finibus. Vivamus libero erat, varius id feugiat laoreet, ornare sed est.',
        },
    ],
}

const heroData: HeroSectionProps = {
    title: 'Features',
    textIntro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus arcu, commodo sit amet mollis quis, euismod nec metus. Praesent sed scelerisque tellus. Integer auctor suscipit purus.',
    altimage: 'A beautiful illustration backend app',
}

const newsData = {
    title: "What's new",
    news: [
        {
            id: 0,
            summary: 'Donec condimentum diam id ante placerat',
            text: 'Sed bibendum sodales purus id sagittis. Sed tincidunt eros a neque volutpat, id tincidunt arcu hendrerit. Donec condimentum diam id ante placerat, a molestie ex luctus. ',
        },
        {
            id: 1,
            summary: 'Condimentum a neque volutpat',
            text: 'Sed bibendum sodales purus id sagittis. Sed tincidunt eros a neque volutpat, id tincidunt arcu hendrerit. Donec condimentum diam id ante placerat, a molestie ex luctus. ',
        },
    ],
}

export { asideData, heroData, keyConceptsData, newsData }
