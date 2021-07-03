import './Container.css';
import { CharacterQuery } from '../../services/Query'

export default function Container() {
    return (
        <div className="containerCards">
            <div>
                <CharacterQuery />
            </div>
        </div>

    )
}