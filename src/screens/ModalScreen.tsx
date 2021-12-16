import { Layout } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Picker, Platform, StyleSheet } from "react-native";

import useFilterStore from "../stores/useFilterStore";

export default function ModalScreen() {
  const [selectedValue, setSelectedValue] = React.useState("asc");
  const { setFilter } = useFilterStore();
  return (
    <Layout style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          setFilter(itemValue);
        }}
      >
        <Picker.Item label='A - Z' value='asc' />
        <Picker.Item label='Z - A' value='desc' />
        <Picker.Item label='Date Newest' value='newest' />
        <Picker.Item label='Date Oldest' value='oldest' />
      </Picker>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "80%",
  },
});
