import React from "react";
import { View, Text } from "react-native";

type Props = {
  height?: number;
  width?: number;
};

const Whitespace = ({ height, width }: Props) => {
  return <View style={{ height: height, width: width }} />;
};

export default Whitespace;
