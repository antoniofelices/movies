import { useNavigate } from '@tanstack/react-router'
import { supabase } from '@/services/supabaseService'
import Container from '@components/base/Container'
import Button from '@components/base/Button'
import ErrorApi from '@components/base/ErrorApi'
import content from '@/config/data/pages/profile'

const Profile = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) return <ErrorApi message={error.message} />
        navigate({ to: '/' })
    }

    return (
        <Container>
            <h1 className="mb-8">{content.title}</h1>
            <Button onClick={handleLogout} text={content.textButtonSignOut} />
        </Container>
    )
}

export default Profile
