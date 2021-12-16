import { Layout } from "@ui-kitten/components";
import React from "react";
import { Picker, StyleSheet } from "react-native";
import useFilterStore from "../../stores/useFilterStore";

const FilterContainer = () => {
  const [selectedValue, setSelectedValue] = React.useState("asc");
  const { setFilter } = useFilterStore();
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
      }}
    >
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
};

export default FilterContainer;
