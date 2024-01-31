import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppContext } from "@/context/AppContext";

// Components
import List from "@/components/List";
import ListCard from "@/components/ListCard";
import Searchbar from "@/components/Searchbar";

// Utils
import { getNames } from "@/utils/helpers";

// Hooks
import useSearch from "@/hooks/useSearch";

//  Favourite Names list screen
const FavNamesList: React.FC = () => {
  const { text, onChangeText, filteredResults } = useSearch(getNames());
  const { favourites, toggleFavourite } = useContext(AppContext);

  return (
    <>
      <View style={{ margin: 15 }}>
        <Searchbar text={text} onChangeText={onChangeText} />
      </View>
      <List
        data={filteredResults.filter((item) => favourites?.[item.key])}
        id="key"
        renderComponent={({ item }) => (
          <ListCard
            onFavPress={toggleFavourite}
            isFav={favourites?.[item.key]}
            item={item}
          />
        )}
      />
    </>
  );
};

export default FavNamesList;
