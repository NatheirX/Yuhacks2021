import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import StyledButton from "./components/StyledButton";
import Video from "./components/Video";
import * as Progress from "react-native-progress";
import Youtube from "react-native-youtube";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      <View style={styles.line}></View>
      <ScrollView style={styles.scrolling}>
        <Text style={styles.scroll}></Text>
        <Video done={0}></Video>
        <Video done={0}></Video>
        <Video done={0}></Video>
      </ScrollView>

      <View style={styles.line}></View>
      <View style={styles.footer}>
        <View style={styles.containerButtons}>
          <View style={styles.buttonContainer}>
            <StyledButton content="Previous" />
          </View>
          <View style={styles.buttonContainer}>
            <StyledButton content="Home" />
          </View>
          <View style={styles.buttonContainer}>
            <StyledButton content="Next" />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
    marginTop: 50,
  },
  scrolling: {
    // backgroundColor: "red",
  },
  footer: {
    backgroundColor: "white",
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    height: 75,
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "black",
  },
  buttonContainer: {
    flex: 1,
  },
  containerButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 50,
    flex: 1,
  },
});
