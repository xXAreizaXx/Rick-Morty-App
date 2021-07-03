import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Cards />
        </div>
    )
}