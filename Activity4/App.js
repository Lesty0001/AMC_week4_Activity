import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';
//added done:false a condition that if the user click the to do list it will record it done
const initialData = [
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53a1bb28ba',
    title: 'Morning: ',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53abb2a8ba',
    title: 'Breakfast',done:false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-ae1d5-3ad53aabb28ba',
    title: 'Shower',done:false ,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad532abb28ba',
    title: 'Getting Dress', done: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a1d53abb28ba',
    title: 'Check Messenger',done: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb281ba',
    title: 'Read past module',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-1fbd91aa97f63',
    title: 'Eat snacks',done: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53abab28ba',
    title: 'AfterNoon: ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Go to class',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fb1d91aa97f63',
    title: 'Take down notes',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f613',
    title: 'Eating lunch',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f163',
    title: 'Read books',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa9a7f63',
    title: 'Chats with my friends',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Play games in break',done: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aaed5-3ad53abb28ba',
    title: 'Evening: ',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa917f63',
    title: 'Study for Major Subject',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd191aa97f63',
    title: 'Do some game quest',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Wash the Dishes',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbda191aa97f63',
    title: 'Cook Rice',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a1a97f63',
    title: 'Do some homeworks',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Review for the Test',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Charge Phone',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-f1bd91aa97f63',
    title: 'Set up alarm',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fb11d91aa97f63',
    title: 'Watch Anime',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbad191aa97f63',
    title: 'Draw',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f163',
    title: 'Check Social Media',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a1a97f63',
    title: 'Prepare Midnight Snacks',done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd911aa97f63',
    title: 'Toothbrush',done: false,
  },
];

const COLORS = ['red', 'yellow', 'violet'];

const Item = ({ item, onToggle, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onToggle} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Checkbox
      status={item.done ? 'checked' : 'unchecked'}
      onPress={onToggle}
      color={item.done ? "white" : "#6495ED"} // White checkmark when checked
      uncheckedColor="#6495ED" // Blue outline when unchecked
    />
  </TouchableOpacity>
);

const App = () => {
  const [data, setData] = useState(initialData);

  const toggleDone = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Count finished and not finished tasks
  const finishedCount = data.reduce((count, task) => (task.done ? count + 1 : count), 0);
  const notFinishedCount = data.length - finishedCount;

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.done ? 'navy' : COLORS[index % COLORS.length];
    const textColor = item.done ? 'white' : 'black';

    return (
      <Item
        item={item}
        onToggle={() => toggleDone(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.headerText}>To Do List</Text>
        </View>

        {/* Summary Section. Added the done and not done label */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>✔ Done: {finishedCount}</Text>
          <Text style={styles.summaryText}>✘ Not Done: {notFinishedCount}</Text>
        </View>

        {/* Task List */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={data}
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
  header: {
    backgroundColor: 'pink',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 400,
    color: 'white',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    flex: 1,
  },
});

export default App;