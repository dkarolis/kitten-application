import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Text,
  View,
} from "react-native";

import { CatCard } from "../components/CatCard";

export default function TabOneScreen({ navigation }) {
  const [countNumber, setCount] = useState(30);

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateKittenName() {
    var name1 = [
      "Annie",
      "Bailey",
      "Bandit",
      "Bear",
      "Bella",
      "Bob",
      "Boo",
      "Boots",
      "Bubba",
      "Buddy",
      "Buster",
      "Cali",
      "Callie",
      "Casper",
      "Charlie",
      "Chester",
      "Chloe",
      "Cleo",
      "Coco",
      "Cookie",
      "Cuddles",
      "Daisy",
      "Dusty",
      "Felix",
      "Fluffy",
      "Garfield",
      "George",
      "Ginger",
      "Gizmo",
      "Gracie",
      "Harley",
      "Jack",
      "Jasmine",
    ];

    var name2 = [
      "Jasper",
      "Kiki",
      "Kitty",
      "Leo",
      "Lilly",
      "Lily",
      "Loki",
      "Lola",
      "Lucky",
      "Lucy",
      "Luna",
      "Maggie",
      "Max",
      "Mia",
      "Midnight",
      "Milo",
      "Mimi",
      "Miss kitty",
      "Missy",
      "Misty",
      "Mittens",
      "Molly",
      "Muffin",
      "Nala",
      "Oliver",
      "Oreo",
    ];

    var name =
      name1[getRandomInt(0, name1.length)] +
      " " +
      name2[getRandomInt(0, name2.length)];
    return name;
  }

  const generateData = (count: number) => {
    let data = [];
    for (let i = 0; i < count; i++) {
      data[i] = {
        key: generateKittenName(),
        width: getRandomInt(100, 1000),
        height: getRandomInt(200, 900),
      };
    }
    return data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setCount(30);
          }}
        >
          <Text style={styles.buttonText}>30</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCount(50)}>
          <Text style={styles.buttonText}>50</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCount(100)}>
          <Text style={styles.buttonText}>100</Text>
        </Pressable>
        <Text style={styles.inputDescription}>Items in page:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCount(text)}
          value={countNumber}
          placeholder="Number"
          keyboardType="numeric"
        />
      </View>
      <FlatList
        data={generateData(countNumber)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("KittenView", { item: item })}
          >
            <CatCard name={item.key} width={item.width} height={item.height} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 5,
    width: 70,
    height: 30,
    padding: 6,
    backgroundColor: "#009fff",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  input: {
    width: 90,
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  inputDescription: {
    paddingTop: 11,
    marginRight: 5,
    marginLeft: 10,
  },
});
