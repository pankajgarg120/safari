import React, { forwardRef } from "react";
import { View, Text, Image } from "react-native";

const Footer = forwardRef((props, ref) => {
    return (
        <View ref={ref} className="bg-blue-200 p-6 space-y-3">
            <View className="flex-row items-center space-x-4">
                <Image
                    source={require("../assets/footer-banner.png")}
                    className="h-16 w-16 rounded-full"
                    resizeMode="contain"
                />
                <View>
                    <Text className="text-lg font-bold text-gray-800">TIGER INDIA SAFARI</Text>
                    <Text className="text-xs text-gray-800">Explore india's wild side</Text>
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
        </View>
    );
});

export default Footer;
