import React, { useContext } from "react";
import { View } from "react-native";

// Context
import { AppContext } from "@/context/AppContext";

// Components
import List from "@/components/List";
import ListCard from "@/components/ListCard";
import Searchbar from "@/components/Searchbar";

// Utils
import { getNames } from "@/utils/helpers";

// Hooks
import useSearch from "@/hooks/useSearch";

// Names list screen
const NamesList: React.FC = () => {
  const { text, onChangeText, filteredResults } = useSearch(getNames());
  const { favourites, toggleFavourite } = useContext(AppContext);

  return (
    <>
      <View style={{ margin: 15 }}>
        <Searchbar text={text} onChangeText={onChangeText} />
      </View>
      <List
        data={filteredResults}
        id="id"
        renderComponent={({ item }) => (
          <ListCard
            onFavPress={(key: string) => toggleFavourite(key)}
            isFav={favourites?.[item.id]}
            item={item}
          />
        )}
      />
    </>
  );
};

export default NamesList;
