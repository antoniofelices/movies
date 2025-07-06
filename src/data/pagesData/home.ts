import type {
    AsideSectionProps,
    CardsSectionProps,
    DetailsSectionProps,
    TabsSectionProps,
    HeroSectionProps,
} from '@/types/interfaces'

const asideData: AsideSectionProps = {
    text1: '35.000+ Already Joined',
    text2: "Stay up-to-date with what we're doing",
    form: {
        textLabel: 'Sign to our newsletter',
        textError: "Whoops, make sure it's an email",
        textButton: 'Contact Us',
    },
}

const donwloadsData: CardsSectionProps = {
    title: 'Download the extension',
    textIntro:
        "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
    cards: [
        {
            id: 0,
            title: 'Add to Chrome',
            text: 'Minimum version 62',
            image: 'logo-chrome.svg',
            buttonText: 'Add & Install the Extension',
        },
        {
            id: 1,
            title: 'Add to Firefox',
            text: 'Minimum version 55',
            image: 'logo-firefox.svg',
            buttonText: 'Add & Install the Extension',
        },
        {
            id: 2,
            title: 'Add to Opera',
            text: 'Minimum version 46',
            image: 'logo-opera.svg',
            buttonText: 'Add & Install the Extension',
        },
    ],
}

const faqsData: DetailsSectionProps = {
    title: 'Frequently Asked Questions',
    textIntro:
        "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
    details: [
        {
            id: 0,
            summary: 'What is Bookmark?',
            text: 'Donec eget porttitor turpis, sed molestie odio. Suspendisse luctus nisl et nisl pharetra volutpat. Quisque lobortis sollicitudin mi non maximus.',
        },
        {
            id: 1,
            summary: 'How can I request a new browsers?',
            text: 'Nam luctus commodo nisi, sit amet dapibus leo iaculis non. In pretium mi at condimentum tempus. Integer auctor, diam at blandit tristique, lorem dolor lacinia lorem, eget dapibus velit lectus quis sapien.',
        },
        {
            id: 2,
            summary: 'Is there a mobile app?',
            text: 'Donec eget porttitor turpis, sed molestie odio. Suspendisse luctus nisl et nisl pharetra volutpat. Aliquam euismod neque ac posuere facilisis. Integer vehicula lacus ac lectus posuere dictum. Aliquam erat volutpat. Quisque lobortis sollicitudin mi non maximus. Proin a lacus eu urna gravida luctus. Sed ullamcorper quis tortor ac sodales.',
        },
        {
            id: 3,
            summary: 'What about other Chromium browsers?',
            text: 'Dapibus velit lectus quis sapien. Integer urna justo, finibus id fermentum vitae, convallis consequat nunc. Suspendisse luctus nisl et nisl pharetra volutpat. Quisque lobortis sollicitudin mi non maximus.',
        },
    ],
    textButton: 'More Info',
}

const featuresData: TabsSectionProps = {
    title: 'Features',
    textIntro:
        'In a mauris interdum, commodo erat ac, consectetur dolor. Duis tempor urna quis tellus sodales tempus. Suspendisse suscipit nisl eu justo pretium fringilla.',
    tabs: [
        {
            id: 0,
            tabTitle: 'Simple Bookmarking',
            title: 'Bookmarking in one Click',
            text: 'Fusce a ligula non mauris auctor ultrices. Integer semper felis a turpis dapibus porta. Integer semper hendrerit sapien.',
            buttonText: 'More info',
        },
        {
            id: 1,
            tabTitle: 'Speedy Searching',
            title: 'Intelligent Search',
            text: 'Fusce a ligula non mauris auctor ultrices. Integer semper felis a turpis dapibus porta. Integer semper hendrerit sapien.',
            buttonText: 'More info',
        },
        {
            id: 2,
            tabTitle: 'Easy Sharing',
            title: 'Share your bookmarks',
            text: 'Fusce a ligula non mauris auctor ultrices. Integer semper felis a turpis dapibus porta. Integer semper hendrerit sapien.',
            buttonText: 'More info',
        },
    ],
}

const heroData: HeroSectionProps = {
    title: ' A Simple Bookmark Manager',
    textIntro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus arcu, commodo sit amet mollis quis, euismod nec metus. Praesent sed scelerisque tellus. Integer auctor suscipit purus.',
    altimage: 'A beautiful illustration backend app',
    textButton1: 'Get It On Chrome',
    textButton2: 'Get It On Firefox',
}

export { asideData, donwloadsData, faqsData, featuresData, heroData }
