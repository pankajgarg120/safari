import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function AboutPage() {
    return (
        <View className="flex-1 bg-white items-center justify-center">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 items-center bg-white justify-center">
                {/* Header */}
                <Text className="text-3xl font-extrabold text-green-800 text-center mt-24 mb-6">
                    About Us
                </Text>

                {/* Logo or symbolic image (optional) */}
                <View className="flex-1 justify-center items-center bg-white">
                    <Image
                        source={require("../assets/tiger/tiger1.jpg")}
                        className="w-full h-48 rounded-xl mb-6"
                        resizeMode="cover"
                    />

                </View>
                {/* Organization Info */}
                <View className="space-y-3">
                    <Text className="text-lg font-bold text-gray-800 text-center">TIGER INDIA SAFARI</Text>
                    <Text className="text-xs text-gray-800 text-center">Explore India’s Wild Side</Text>

                    <Text className="text-gray-600 text-center mt-4">
                        At Tiger India Safari, we bring you face-to-face with India’s untamed beauty.
                        From thrilling tiger trails to serene luxury stays, our mission is to offer
                        an unforgettable jungle experience while preserving wildlife and promoting
                        sustainable tourism.
                    </Text>

                    {/* Contact Details */}
                    <View className="mt-6 space-y-1 content-center items-center">
                        <Text className="text-gray-600">📧 info.tigerindiasafari@gmail.com</Text>
                        <Text className="text-gray-600">📞 +91 8690954063</Text>
                        <a
                            href="https://www.instagram.com/tigerindiasafari/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 underline"
                        >
                            📸 Follow Us on instagram
                        </a>
                        <a
                            href="https://wa.me/message/3BILLTLVGYCSJ1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 underline"
                        >
                            💬 Chat with us on WhatsApp
                        </a>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}
