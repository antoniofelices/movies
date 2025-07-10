import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { supabase } from '@/lib/supabaseClient'
import Header from '@layouts/Header'

export const Route = createFileRoute('/_auth')({
    beforeLoad: async () => {
        const { data } = await supabase.auth.getSession()
        if (!data.session) {
            throw redirect({ to: '/sign-in' })
        }
    },
    component: AuthLayout,
})

function AuthLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
