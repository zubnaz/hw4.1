import { Link } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { EventContext } from "../contexts/eventsContext";
export default function Menu() {
    const { favoriteFilms } = useContext(EventContext);
    return (<div className="menu">
        <Link to="/">Home</Link>
        <Link to="favorite">Favorite - ({favoriteFilms.length})</Link>
    </div>);
}