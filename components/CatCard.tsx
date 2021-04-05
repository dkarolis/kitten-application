import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function CatCard(props: {
  name: string;
  height: number;
  width: number;
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `http://placekitten.com/${props.height}/${props.width}`,
        }}
        style={styles.image}
        onLoad={() => setIsLoaded(true)}
      />
      <View
        style={[
          styles.loadingContainer,
          {
            display: isLoaded ? "none" : "flex",
          },
        ]}
      >
        <Ionicons size={30} name="ellipsis-horizontal-circle-outline" />
        <Text style={styles.loadingText}>Loading</Text>
      </View>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 15,
  },
  text: {
    textAlign: "center",
    padding: 10,
  },
  loadingText: {
    paddingTop: 6,
  },
  loadingContainer: {
    flexDirection: "row",
    margin: "auto",
    bottom: 60,
    marginTop: -35,
  },
});
