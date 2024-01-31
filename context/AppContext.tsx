import React, { createContext, useEffect, useState } from "react";

// Themes
import themes from "@/constants/themes";
import useAudio from "@/hooks/useAudio";

// Theme Types
import { Theme } from "@/types/theme";

// Import all the images from the assets/images folder
import audioSources from "@/assets/audios";
import useAsyncStorage from "@/hooks/useAsyncstorage";

// Define the initial state of your context
interface AppContextState {
  theme: string;
  language: string;
  isPlaying: boolean;
  playingName: number | string;
  setPlayingName: Function;
  toggleFavourite: Function;
  themeStyles: Theme;
  favourites: any;
}

// Create the context
export const AppContext = createContext<AppContextState>({
  theme: "dark",
  themeStyles: themes.dark,
  language: "en",
  playingName: 0,
  isPlaying: false,
  favourites: {},
  setPlayingName: () => {},
  toggleFavourite: () => {},
});

// Create the provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const [playingName, setPlayingNameState] = useState(0);

  /***********************************************
   *  HOOKS
   ***********************************************/

  // Use Audio hook
  const audio = useAudio();

  // Use Async storage hook
  const { value: favourites, saveData } = useAsyncStorage("favourites", {});

  /***********************************************
   *  FUNCTIONS
   ***********************************************/

  const setPlayingName = (id: number) => {
    setPlayingNameState(id);
    initAudio(id);
  };

  // Function for toggleing favourite names
  const toggleFavourite = (id: number) => {
    const newFavourites = { ...favourites };

    // if the name is already in the favourites, remove it
    if (favourites?.[id]) {
      newFavourites[id] = false;
    } else {
      newFavourites[id] = true;
    }

    // save the favourite names to the async storage
    saveData(newFavourites);
  };

  // Function for initializing audio
  async function initAudio(id: number) {
    if (id) {
      await audio.loadAudio(audioSources?.[id - 1]);
      audio.playAudio();
    }
  }

  // Define the theme
  const themeStyles = themes?.[theme];

  return (
    <AppContext.Provider
      value={{
        theme,
        themeStyles,
        setPlayingName,
        toggleFavourite,
        isPlaying: audio.isPlaying,
        playingName,
        language,
        favourites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
