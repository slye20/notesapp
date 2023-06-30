import react, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

function NotesScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome.Button
          name="edit"
          color="black"
          size={25}
          backgroundColor="yellow"
          onPress={console.log("hello")}
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            headerStyle: {
              backgroundColor: "yellow",
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              height: 100,
            },
            headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF884",
    alignItems: "center",
    justifyContent: "center",
  },
});
