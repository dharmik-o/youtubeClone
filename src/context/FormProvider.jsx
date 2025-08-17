import { useEffect, useState } from "react";
import { FormContext } from "./FormContext";

export default function FormProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUserData = localStorage.getItem("userData");
        const parsedData = storedUserData ? JSON.parse(storedUserData) : {};
        parsedData.likedVideos = parsedData.likedVideos || [];
        parsedData.dislikedVideos = parsedData.dislikedVideos || [];
        parsedData.watchlist = parsedData.watchlist || [];
        return parsedData;
    });

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(user));
    }, [user]);

    const addToLikedVideos = (video) => {
        setUser(prevUser => {
            const isAlreadyLiked = prevUser.likedVideos.some(v => v.id === video.id);
            if (isAlreadyLiked) {
                return {
                    ...prevUser,
                    likedVideos: prevUser.likedVideos.filter(v => v.id !== video.id),
                };
            }

            return {
                ...prevUser,
                likedVideos: [...prevUser.likedVideos, video],
                dislikedVideos: prevUser.dislikedVideos.filter(v => v.id !== video.id),
            };
        });
    };

    const addToDislikedVideos = (video) => {
        setUser(prevUser => {
            const isAlreadyDisliked = prevUser.dislikedVideos.some(v => v.id === video.id);
            if (isAlreadyDisliked) {
                return {
                    ...prevUser,
                    dislikedVideos: prevUser.dislikedVideos.filter(v => v.id !== video.id),
                };
            }

            return {
                ...prevUser,
                dislikedVideos: [...prevUser.dislikedVideos, video],
                likedVideos: prevUser.likedVideos.filter(v => v.id !== video.id),
            };
        });
    };

    const addToWatchlist = (video) => {
        setUser(prevUser => {
            const isAlreadyInWatchlist = prevUser.watchlist.some(v => v.id === video.id);
            if (isAlreadyInWatchlist) {
                return {
                    ...prevUser,
                    watchlist: prevUser.watchlist.filter(v => v.id !== video.id),
                };
            }

            return {
                ...prevUser,
                watchlist: [...prevUser.watchlist, video],
            };
        });
    };

    const value = {
        user,
        setUser,
        addToLikedVideos,
        addToDislikedVideos,
        addToWatchlist,
    };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}
