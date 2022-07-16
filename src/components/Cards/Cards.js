import './Cards.css';

export default function Cards(props) {
    return (
        <div className="Cards" key={props.id}>
            <h2 className="titleName">{props.name}</h2>
            <img className="Image" src={props.image} alt={`Imagen de ${props.name}`} />
        </div>

    )
}