import { useContext } from "react";
import { EventContext } from "../contexts/eventsContext";
import "./favorite.css";
export default function Favorite() {
    const { favoriteFilms, doNotFavorite } = useContext(EventContext);
    return (<div className="favorite">
        {favoriteFilms.map((element) =>
            <div className="filmCard">
                <span># {element.id}</span>
                <span>Name : {element.name}</span>
                <span>Year: {element.year}</span>
                <button onClick={() => { doNotFavorite(element.id) }}>Delete From Favorite</button>
            </div>
        )}
    </div>);
}