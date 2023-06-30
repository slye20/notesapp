import react, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function AddScren({ navigation }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
        Add a note!
      </Text>
      <TextInput
        value={text}
        placeholder="Enter Note"
        style={styles.input}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => navigation.navigate("Notes", { text })}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF884",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    margin: 5,
  },
  button: { padding: 10, margin: 10 },
  buttonText: { fontSize: 15, color: "white" },
});
