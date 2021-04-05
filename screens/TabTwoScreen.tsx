import React from 'react';
import { StyleSheet, Image, Text, View  } from 'react-native';

export default function TabTwoScreen({route}) {
  console.log("hello", route);
  let information;
  if(route.params) {
    const { item } = route.params;
    information = item;
  } else {
    information = {key: 'Choose a kitten in Kitten list', width: 400, height: 400}
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{information.key}</Text>
      <View style={styles.separator} />
      <Image source={{ uri: `http://placekitten.com/${information.height}/${information.width}`, height: 400, width: 400}} resizeMode="contain"/>
      <View style={styles.separator} />
      <View style={styles.descriptionContainer}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  descriptionContainer: {
    width: 400,
  }
});




