import { Slot } from "expo-router";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
    const [showStickyContact, setShowStickyContact] = useState(false);
    const scrollRef = useRef(null);
    const footerRef = useRef(null);

    const handleScroll = (event) => {
        if (!footerRef.current) return;

        const scrollY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;
        const layoutHeight = event.nativeEvent.layoutMeasurement.height;

        if (scrollY + layoutHeight >= contentHeight - 50) {
            // User has reached near the footer
            setShowStickyContact(true);
        }
    };

    return (
        <View className="flex-1 bg-white">
            <NavBar />

            <ScrollView
                ref={scrollRef}
                className="flex-1"
                contentContainerStyle={{
                    flexGrow: 1, minWidth: "100%",
                    overflowX: "auto",
                }}
                showsVerticalScrollIndicator={true}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <Slot />
                <Footer ref={footerRef} />
            </ScrollView>

            {/* Sticky Contact Bar */}
            {showStickyContact && (
                <View className="absolute bottom-0 left-0 right-0 bg-green-900 py-2 px-4">
                    <Text className="text-white text-center font-bold text-base">
                        CALL US AT 📞 8690-954-063
                    </Text>
                </View>
            )}
        </View>
    );
}
