import type { ButtonProps } from '@/types/interfaces'
import { Link } from '@tanstack/react-router'

const Button = ({
    classes,
    onClick,
    text,
    url,
    variant,
    type = 'button',
}: ButtonProps) => {
    const individualClasses = classes ? classes : ''
    let variantOption =
        'text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'

    if (variant === 'transparent') {
        variantOption =
            'text-gray-900 border border-gray-700 hover:bg-blue-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-300 dark:hover:text-blue-900 dark:focus:ring-blue-300'
    }

    return (
        <>
            <button
                className={`inline-flex items-center justify-center px-5 py-3 mb-6 text-base font-medium text-center rounded-lg ${variantOption} ${individualClasses}`}
                onClick={onClick}
                type={type}
            >
                {url ? <Link to={url}>{text}</Link> : <>{text}</>}
            </button>
        </>
    )
}

export default Button
