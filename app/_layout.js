import { Slot } from "expo-router";
import { ScrollView, View, Text, SafeAreaView, Dimensions } from "react-native";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const screenWidth = Dimensions.get("window").width;

export default function Layout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 }}>
                <NavBar />

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 40, // space for sticky bar
                        width: screenWidth,
                    }}
                    showsVerticalScrollIndicator={true}
                >
                    <View style={{ width: screenWidth }}>
                        <Slot />
                    </View>

                    {/* Push footer to bottom when content is short */}
                    <View style={{ width: screenWidth, marginTop: 'auto' }}>
                        <Footer />
                    </View>
                </ScrollView>

                {/* Always visible sticky call bar */}
                <View
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: 0,
                        backgroundColor: "#064e3b",
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        zIndex: 999,
                    }}
                >
                    <Text style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>
                        CALL US AT 📞 8690-954-063
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
