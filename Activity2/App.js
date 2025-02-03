import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53a1bb28ba',
    title: 'Morning: ',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53abb28ba',
    title: 'Breakfast',
  },
  {
    id: 'bd7acbea-c1b1-46c2-ae1d5-3ad53abb28ba',
    title: 'Shower',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad532abb28ba',
    title: 'Getting Dress',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a1d53abb28ba',
    title: 'Check Messenger',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb281ba',
    title: 'Read past module',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-1fbd91aa97f63',
    title: 'Eat snacks',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53abab28ba',
    title: 'AfterNoon: ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Go to class',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fb1d91aa97f63',
    title: 'Take down notes',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f613',
    title: 'Eating lunch',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f163',
    title: 'Read books',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Chats with my friends',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Play games in break',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53abb28ba',
    title: 'Evening: ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa917f63',
    title: 'Study for Major Subject',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Do some game quest',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Wash the Dishes',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Cook Rice',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a1a97f63',
    title: 'Do some homeworks',
  },{
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Review for the Test',
  },{
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Charge Phone',
  },{
    id: '3ac68afc-c605-48d3-a4f8-f1bd91aa97f63',
    title: 'Set up alarm',
  },{
    id: '3ac68afc-c605-48d3-a4f8-fb11d91aa97f63',
    title: 'Watch Anime',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Draw',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f163',
    title: 'Check Social Media',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a1a97f63',
    title: 'Prepare Midnight Snacks',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Toothbrush',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <TouchableOpacity> <Item title={item.title} /> </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});
//Act2
export default App;
