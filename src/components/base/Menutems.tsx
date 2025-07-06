import type { Routes } from '@/types/interfaces'
import { Link } from '@tanstack/react-router'

const MenuItems = ({
    content,
    variant,
}: {
    content: Routes[]
    variant?: string
}) => {
    const classesListElement =
        variant === 'inverse'
            ? 'px-4 py-3 lg:py-0'
            : 'border-t border-gray-500 px-4 py-6 lg:border-t-0 lg:py-0'
    const classesLinkElement =
        variant === 'inverse'
            ? 'text-gray-300 hover:text-red'
            : 'text-white hover:text-red lg:text-blue-900'

    const menuData = content
        .filter((single) => single.isInMenu === true)
        .toSorted((a, b) => (a.orderMenu ?? 0) - (b.orderMenu ?? 0))

    return (
        <>
            {menuData.map((item) => (
                <li key={item.id} className={classesListElement}>
                    <Link
                        to={`/${item.url}`}
                        className={({ isActive }) =>
                            `${classesLinkElement} ${
                                isActive ? 'border-b border-current pb-2' : ''
                            }`
                        }
                    >
                        {item.text}
                    </Link>
                </li>
            ))}
        </>
    )
}

export default MenuItems
