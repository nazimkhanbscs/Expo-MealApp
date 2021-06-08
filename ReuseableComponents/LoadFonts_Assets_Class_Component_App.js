// Fonts and Assets loading using Class component

// import * as React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import * as Font from "expo-font";
// import { Asset } from "expo-asset";
// import { Ionicons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   state = {
//     fontsLoaded: false,
//   };

//   async loadFonts() {
//     Asset.loadAsync([]),
//       await Font.loadAsync({
//         ...Ionicons.font,
//         // Load a font `Montserrat` from a static resource
//         //Montserrat: require("./assets/fonts/Montserrat.ttf"),
//         "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//         "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),

//         // Any string can be used as the fontFamily name. Here we use an object to provide more control
//         // "Montserrat-SemiBold": {
//         //   uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
//         //   display: Font.FontDisplay.FALLBACK,
//         // },
//       });
//     this.setState({ fontsLoaded: true });
//   }

//   componentDidMount() {
//     this.loadFonts();
//   }

//   render() {
//     // Use the font with the fontFamily property after loading
//     if (this.state.fontsLoaded) {
//       return (
//         <View style={styles.container}>
//           <Text style={{ fontSize: 20 }}>Default Font</Text>
//           <Text style={{ fontFamily: "open-sans", fontSize: 20 }}>
//             OpenSans
//           </Text>
//           <Text style={{ fontFamily: "open-sans-bold", fontSize: 20 }}>
//             OpenSans-Bold
//           </Text>
//         </View>
//       );
//     } else {
//       return null;
//     }
//   }
// }

// Font and Asset loading using Hooks

// Font and Asset loading using Hooks

import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [loaded] = useFonts({
    ...Ionicons.font,
    // Montserrat: require("./assets/fonts/Montserrat.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "open-sans-bold", fontSize: 30 }}>
        Montserrat Bold
      </Text>
      <View
        style={{
          height: 150,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Image
          source={require("./assets/favicon.png")}
          style={{ height: 150, width: "40%", margin: 10 }}
        />
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={{ height: 150, width: "40%", margin: 10 }}
        />
      </View>
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
