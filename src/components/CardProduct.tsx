import { Card, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Whitespace from "./Whitespace";

type Props = {
  image: string;
  name: string;
  address: string;
  floor: string;
  bed: string;
  bathroom: string;
};

const CardProduct = ({ image, name, address, floor, bed, bathroom }: Props) => {
  return (
    <Card style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageHeader} />
      <Layout style={styles.titleContainer}>
        <Text category='h3' style={{ color: "black" }}>
          RUMAH
        </Text>
        <Whitespace height={10} />
        <Text>{address}</Text>
        <Whitespace height={10} />
        <Layout style={styles.detail}>
          <Layout style={styles.iconDetail}>
            <Image source={require("../assets/floor-plan.png")} />
            <Text style={styles.textDetail}>{floor}</Text>
          </Layout>
          <Layout style={styles.iconDetail}>
            <Image source={require("../assets/bed.png")} />
            <Text style={styles.textDetail}>{bed}</Text>
          </Layout>
          <Layout style={styles.iconDetail}>
            <Image source={require("../assets/bathroom.png")} />
            <Text style={styles.textDetail}>{bathroom}</Text>
          </Layout>
        </Layout>
      </Layout>
    </Card>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: { height: 320, borderRadius: 20, marginTop: 20 },
  imageHeader: {
    height: 200,
    width: 330,
    padding: 0,
    margin: -30,
  },
  titleContainer: {
    flex: 1,
    height: 100,
    width: 320,
    paddingTop: 60,
    margin: -25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconDetail: { flex: 1, flexDirection: "row" },
  textDetail: { fontWeight: "bold", marginTop: 15, marginLeft: 10 },
});
