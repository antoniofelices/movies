import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '@layouts/Header'
import Footer from '@/layouts/Footer'
export const Route = createFileRoute('/_frontend')({
    component: FrontendLayout,
})

function FrontendLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
