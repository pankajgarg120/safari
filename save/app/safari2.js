// app/safari.js
import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

const safaris = [
    "Jhalana Safari",
    "Ranthambore Safari",
    "Sariska Safari",
    "Jawai Leopard Safari",
    "Kumbhalgarh Wildlife Safari",
    "Tiger Safari",
    "Chambal Safari",
];

const tigerImages = [
    require("../assets/tiger/tiger1.jpg"),
    require("../assets/tiger/tiger2.jpg"),
    require("../assets/tiger/tiger3.jpg"),
    require("../assets/tiger/tiger4.jpg"),
    require("../assets/tiger/tiger5.jpg"),
];

export default function SafariPage() {
    return (
        <ScrollView className="flex-1 bg-white p-4 space-y-6 pt-24 items-center bg-white justify-center">
            <Text className="text-3xl font-extrabold text-green-800 text-center">Explore Our Jungle Safaris</Text>

            <Text className="text-base text-gray-700 text-justify leading-6">
                Get ready to dive into the heart of India's wilderness! From the majestic tigers of Ranthambore to the elusive leopards of Jawai, each safari offers a unique adventure. Our safaris are designed to bring you close to nature while keeping your comfort and safety in mind. Whether you’re a wildlife photographer or an adventure seeker, this is the ultimate way to witness the wild.
            </Text>

            <View className="space-y-3">
                {safaris.map((safari, index) => (
                    <Text key={index} className="text-lg font-semibold text-gray-800">
                        🐾 {safari}
                    </Text>
                ))}
            </View>

            <Text className="text-2xl font-bold text-green-700 mt-4">A Glimpse into the Wild</Text>


            <View className="space-y-4 items-center bg-white justify-center">
                {tigerImages.map((img, index) => (
                    <Image
                        key={index}
                        source={img}
                        className="w-full h-56 rounded-xl"
                        resizeMode="cover"
                    />
                ))}
            </View>

            <Text className="text-lg text-gray-700 mt-4 text-center">
                Experience the thrill, capture the moments, and create memories that last a lifetime.
            </Text>
        </ScrollView>
    );
}
