import react, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

function NotesScreen({ navigation, route }) {
  const [notes, setNotes] = useState([{ title: "Eat banana", id: "0" }]);

  // Create button to create new note
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome.Button
          name="edit"
          color="black"
          size={25}
          backgroundColor="yellow"
          onPress={() => {
            navigation.navigate("Add Note");
          }}
        />
      ),
    });
  });

  // Check attribute text only if params exist
  useEffect(() => {
    if (route.params?.text) {
      console.log(route.params.text);
      addNote(route.params.text);
    }
  }, [route.params?.text]);

  // addNote and renderNote for FlatList
  function addNote(text) {
    let newNote = {
      title: text,
      id: notes.length.toString(),
    };
    setNotes([...notes, newNote]);
  }

  function renderNote({ item }) {
    return (
      <View style={styles.listItem}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={notes}
        renderItem={renderNote}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function NotesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          headerStyle: {
            backgroundColor: "yellow",
            borderBottomWidth: 3,
            borderBottomColor: "orange",
            height: 100,
          },
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF884",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    width: "100%",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "orange",
    borderBottomWidth: 3,
  },
});
