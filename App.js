import React from "react";
import { FlatList, StyleSheet, View, Text, SafeAreaView } from "react-native";
import ListItem from "./src/ListItem";
import ListHeader from "./src/ListHeader"; 
import ListFooter from "./src/ListFooter"; 

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '5',
    title: 'Second Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'First Item',
  },
  {
    id: '8',
    title: 'Second Item',
  },
  {
    id: '9',
    title: 'Third Item',
  },
  {
    id: '10',
    title: 'First Item',
  },
  {
    id: '11',
    title: 'Second Item',
  },
  {
    id: '12',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text>Header</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text>Footer</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => {}} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
