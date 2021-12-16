import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

const SplashContainer = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Root");
    }, 3000);
  }, []);
  return (
    <Layout style={styles.container}>
      <Text style={styles.welcomeText}>Splash Screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SplashContainer;
