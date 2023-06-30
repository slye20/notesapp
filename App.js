import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import NotesScreen from "./components/NoteScreen";
import AddScren from "./components/AddScreen";

const db = SQLite.openDatabase("notes.db");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, presentation: "Modal" }}
      >
        {/* Different Stack compnents for screens so they don't affect each other */}
        <Stack.Screen name="NotesStack" component={NotesScreen} />
        <Stack.Screen name="Add Note" component={AddScren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
