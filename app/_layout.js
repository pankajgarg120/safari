import { Slot } from "expo-router";
import { ScrollView, View, Text } from "react-native";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
    const [showStickyContact, setShowStickyContact] = useState(false);
    const [footerPositionY, setFooterPositionY] = useState(0);

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        const layoutHeight = event.nativeEvent.layoutMeasurement.height;

        if (scrollY + layoutHeight >= footerPositionY - 50) {
            setShowStickyContact(true);
        } else {
            setShowStickyContact(false);
        }
    };

    return (
        <View className="flex-1 bg-white">
            <NavBar />

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 80,
                    minWidth: "100%",
                }}
                showsVerticalScrollIndicator={true}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <Slot />
                <Footer onLayout={(e) => setFooterPositionY(e.nativeEvent.layout.y)} />
            </ScrollView>

            {showStickyContact && (
                <View className="absolute bottom-0 left-0 right-0 bg-green-900 py-2 px-4 z-50">
                    <Text className="text-white text-center font-bold text-base">
                        CALL US AT 📞 8690-954-063
                    </Text>
                </View>
            )}
        </View>
    );
}
