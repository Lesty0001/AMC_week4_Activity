import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
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

const COLOR = ['red', 'yellow', 'violet']

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? 'navy' : COLOR[index % COLOR.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});
//Act3
export default App;