import Container from '@components/base/Container'
import allData from '@/data/pagesData/error'
import pictureColleDelleFinestre from '@/assets/images/error404-finestre.webp'
import { Link } from '@tanstack/react-router'

function Error404() {
    return (
        <Container>
            <img src={pictureColleDelleFinestre} alt={allData.altimage} />
            <ul>
                <li>
                    <Link to="/">Front Page</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </Container>
    )
}

export default Error404
