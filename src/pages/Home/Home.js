import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Container />
            <Footer />
        </div>
    )
}