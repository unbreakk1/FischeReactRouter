import {Character} from "../types/RickAndMortyCharacter"
import {useNavigate} from "react-router-dom"
import "./CharacterCard.css"

type CharacterCardProps =
{
    character: Character
}

export default function CharacterCard(props: Readonly<CharacterCardProps>)
{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/characters/${props.character.id}`);
    }

    return (
        <div className="character-card" onClick={handleClick}>
            <img src={props.character.image} alt={props.character.name} />
            <div className="character-card-info">
                <h3>{props.character.name}</h3>
                <p>Species: {props.character.species}</p>
                <p>Status: {props.character.status}</p>
            </div>
        </div>
    )
}
