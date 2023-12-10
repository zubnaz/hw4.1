import { createContext, useContext, useState } from "react";

export const EventContext = createContext({
    films: [],
    favoriteFilms: [],
    doFavorite: () => null,
    doNotFavorite: () => null
})
export const EventProvider = ({ children }) => {

    const films = [{
        id: 1,
        name: "Cyborgs: Heroes Never Die",
        year: "2017"
    }, {
        id: 2,
        name: "Saving Private Ryan",
        year: "1998"
    }, {
        id: 3,
        name: "Home Alone",
        year: "1990"
    }];
    const [favoriteFilms, setFavorite] = useState([]);
    const doFavorite = (id) => {
        let ele = favoriteFilms.find((element) => element.id == id)
        if (ele == undefined)
            setFavorite([...favoriteFilms, films.find((element) => element.id == id)]);
    }
    const doNotFavorite = (id) => {
        const newArr = [];

        favoriteFilms.forEach((element) => {
            if (element.id != id) {
                newArr.push(element)
            }
        })
        setFavorite(newArr);
    }
    const value = { films, favoriteFilms, doFavorite, doNotFavorite };
    return <EventContext.Provider value={value}>{children}</EventContext.Provider>

}