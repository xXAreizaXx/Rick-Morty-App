import './Cards.css';

export default function Cards(props) {
    return (
        <div className="Cards" key={props.id}>
            <h4 className="titleName">{props.name}</h4>
            <img className="Image" src={props.image} alt={`Imagen de ${props.name}`} />
        </div>

    )
}