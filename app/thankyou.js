import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// ✅ Static imports (no dynamic require)
const tigerImages = [
    require("../assets/tiger/tiger6.jpg"),
    require("../assets/tiger/tiger7.jpg"),
    require("../assets/tiger/tiger8.jpg"),
    require("../assets/tiger/tiger9.jpg"),
    require("../assets/tiger/tiger10.jpg"),
];

const hotelImages = [
    require("../assets/hotel/hotel6.jpg"),
    require("../assets/hotel/hotel7.jpg"),
    require("../assets/hotel/hotel8.jpg"),
    require("../assets/hotel/hotel9.jpg"),
];

export default function ThankYouPage() {
    const router = useRouter();

    return (
        <ScrollView className="flex-1 bg-white px-4 pt-20 pb-10">
            <Text className="text-3xl font-bold text-center text-green-800 mb-6">
                Thank You!
            </Text>

            <Text className="text-lg text-center text-gray-700 mb-8">
                Your request has been submitted successfully. We will get back to you soon!
            </Text>

            {/* 🐅 Tiger Images */}
            <Text className="text-xl font-semibold mb-2 text-green-700">Jungle Safari Highlights</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                {tigerImages.map((img, index) => (
                    <Image
                        key={`tiger-${index}`}
                        source={img}
                        style={{ width: 150, height: 100, marginRight: 10, borderRadius: 10 }}
                    />
                ))}
            </ScrollView>

            {/* 🏨 Hotel Images */}
            <Text className="text-xl font-semibold mb-2 text-green-700">Our Hotels</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                {hotelImages.map((img, index) => (
                    <Image
                        key={`hotel-${index}`}
                        source={img}
                        style={{ width: 150, height: 100, marginRight: 10, borderRadius: 10 }}
                    />
                ))}
            </ScrollView>

            {/* 🔙 Back Home */}
            <TouchableOpacity
                onPress={() => router.push("/")}
                className="bg-green-800 py-3 px-6 rounded-lg mt-8 mx-auto"
            >
                <Text className="text-white text-center font-semibold text-base">Go to Home</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
