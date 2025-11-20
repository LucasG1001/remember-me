import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { init } from "./db";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    async function setup() {
      await init();

      // const { status: existingStatus } =
      //   await Notifications.getPermissionsAsync();
      // let finalStatus = existingStatus;
      // if (existingStatus !== "granted") {
      //   const { status } = await Notifications.requestPermissionsAsync();
      //   finalStatus = status;
      // }
      // if (finalStatus !== "granted") {
      //   Alert.alert("Failed to get push token for push notification!");
      //   return;
      // }
      // const token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log(token);

    }
  }, []);
}

const styles = StyleSheet.create({
container: { flex: 1, alignItems: "center", justifyContent: "center" },
title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
bottomButtons: {
position: "absolute",
bottom: 40,
width: "100%",
paddingHorizontal: 20,
},
bigButton: {
backgroundColor: "#1e90ff",
padding: 20,
borderRadius: 15,
marginVertical: 10,
alignItems: "center",
},
buttonText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});