import React from "react";
import { View, FlatList, ListRenderItem, StyleSheet } from "react-native";

interface Props {
  data: any;
  id: string;
  renderComponent: ListRenderItem<any>;
}

const List: React.FC<Props> = ({ data, renderComponent, id }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderComponent}
      initialNumToRender={15}
      maxToRenderPerBatch={10}
      contentContainerStyle={styles.contentConatiner}
      keyExtractor={(item, index) => item?.[id] || index.toString()}
      ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
    />
  );
};

const styles = StyleSheet.create({
  itemSeperator: {
    marginVertical: 10,
  },
  contentConatiner: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
});

export default List;
