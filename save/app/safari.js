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
        <ScrollView className="flex-1 bg-white p-4 space-y-6 pt-24 items-center justify-center"
            contentContainerStyle={{ flexGrow: 1 }}
        >
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




            <View className="space-y-4 items-center bg-white justify-center">
                <Text className="text-2xl font-bold text-green-700 mt-4">A Glimpse into the Wild</Text>

                {/*Images and text side by side */}

                {/* First Image*/}
                <View className="flex-row items-start justify-between p-4">
                    <Image
                        source={require("../assets/tiger/tiger11.jpg")}
                        style={{ width: 300, height: 400, borderRadius: 12 }}
                        resizeMode="cover"
                    />

                    <Text className="ml-4 flex-1 border border-green-800 p-4 rounded-xl bg-white text-base text-gray-800 shadow-md"
                        style={{ height: 400 }}
                    >
                        With eyes that pierce through the jungle and jaws
                        wide open, the tiger steps into the wild not as a
                        creature of fear—but as a force of nature.
                        Every breath is silent thunder, every move a calculated strike.
                        It does not roar for attention, but to declare dominance.
                        In the stillness of the forest, its hunger speaks louder than any growl.
                        The hunt isn’t just survival—it’s a reminder that power needs no permission.
                    </Text>
                </View>





            </View>

        </ScrollView>
    );
}
