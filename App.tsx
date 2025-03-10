import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CastButton, useRemoteMediaClient } from "react-native-google-cast";

export default function App() {
  const client = useRemoteMediaClient();
  console.log("client", client);

  if (client) {
    // Send the media to your Cast device as soon as we connect to a device
    // (though you'll probably want to call this later once user clicks on a video or something)
    client.loadMedia({
      mediaInfo: {
        contentUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4",
        contentType: "video/mp4",
      },
    });
  }
  return (
    <View style={styles.container}>
      <CastButton style={{ tintColor: "black", height: 48, width: 48 }} />
      <Text>Click on the Cast button</Text>
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
});
