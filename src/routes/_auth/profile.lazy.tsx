import { createLazyFileRoute } from '@tanstack/react-router'
import { supabase } from '@/services/supabaseService'
import { useNavigate } from '@tanstack/react-router'
import Container from '@components/base/Container'

export const Route = createLazyFileRoute('/_auth/profile')({
    component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            navigate({ to: '/' })
        } else {
            alert('Error al cerrar sesión')
        }
    }

    return (
        <Container>
            <h1>Hello User</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </Container>
    )
}
