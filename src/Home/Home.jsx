import { useContext } from "react";
import { EventContext } from "../contexts/eventsContext";
import "./Home.css";
export default function Home() {
    const { films, doFavorite } = useContext(EventContext);
    return (<div className="home">
        {films.map((element) =>
            <div className="filmCard">
                <span># {element.id}</span>
                <span>Name : {element.name}</span>
                <span>Year: {element.year}</span>
                <button onClick={() => { doFavorite(element.id) }}>Add To Favorite</button>
            </div>
        )}
    </div>);
}