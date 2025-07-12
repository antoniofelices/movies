import Logo from '@/components/base/Logo'
import MenuItems from '@/components/base/Menutems'
import mainMenuData from '@/data/routesData'
import { Link } from '@tanstack/react-router'

const Footer = () => {
    return (
        <footer id="footer" className="@container/footer bg-blue-700 py-10">
            <div className="container grid max-w-5xl items-center justify-center gap-7 lg:grid-cols-6 lg:justify-start">
                <div className="site-icon lg:col-span-1">
                    <Link to="/" arial-label="link to frontpage">
                        <Logo />
                    </Link>
                </div>
                <nav className="main-menu lg:col-start-2 lg:col-end-6">
                    <ul className="flex flex-col text-center text-sm tracking-wide uppercase lg:flex-row lg:text-left">
                        <MenuItems content={mainMenuData} variant="inverse" />
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
