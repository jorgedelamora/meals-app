import { createContext, useState} from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({children}) => {

    const [favoritesIds, setFavoritesIds] = useState([]);

    const addFavorite = (id) => {
        setFavoritesIds((prev) => [...prev, id]);
    }

    const removeFavorite = (id) => {
        setFavoritesIds((prev) => prev.filter((el) => el !== id));
    }

    const value = {
        ids: favoritesIds,
        addFavorite,
        removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;