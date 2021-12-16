import {
  Avatar,
  Button,
  Divider,
  IndexPath,
  Layout,
  List,
  ListItem,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import useFilterStore from "../../stores/useFilterStore";

const HomeContainer = () => {
  const [productData, setProductData] = React.useState([]);
  const { filter } = useFilterStore();
  async function fetchProduct() {
    await fetch(
      "https://urban.devrumaid.com/wp-json/wc/v2/products/?consumer_key=ck_48c0fbcc31ae75449e426efc02fcc8ced5a8ff2a&consumer_secret=cs_2241a1f23e2bbb06ad578557243e52ad2db2cc34"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setProductData(responseJson);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  const renderItem = ({ item, index }: any) => {
    return (
      <ListItem
        title={item.name}
        description={item.price}
        accessoryLeft={() => (
          <Avatar size='giant' source={{ uri: item.images[0].src }} />
        )}
        accessoryRight={() => (
          <Button onPress={() => console.log("pressed")} status='info'>
            View Detail
          </Button>
        )}
      />
    );
  };

  React.useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Layout style={styles.container}>
      <List
        data={
          filter === "asc"
            ? productData.sort((a: any, b: any) => a.name - b.name)
            : filter === "desc"
            ? productData.sort((a: any, b: any) => b.name - a.name)
            : filter === "newest"
            ? productData.sort(
                (a: any, b: any) => b.date_created - a.date_created
              )
            : filter === "oldest"
            ? productData.sort(
                (a: any, b: any) => a.date_created - b.date_created
              )
            : productData
        }
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
  },
  filteredContainer: {
    marginTop: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  filteredSelect: {
    width: "40%",
    marginRight: 20,
  },
});
