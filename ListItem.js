import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => console.log("Item pressed")}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: '#ddd', 
  },
  title: {
    fontSize: 16, 
  },
});

export default ListItem;
