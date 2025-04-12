import React, { forwardRef } from "react";
import { View, Text, Image, TouchableOpacity, Linking, useWindowDimensions } from "react-native";

const Footer = forwardRef(() => {
    const { width: screenWidth } = useWindowDimensions();

    const openURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.warn(`Can't open URL: ${url}`);
        }
    };

    const isLargeScreen = screenWidth >= 768;

    return (
        <View className="bg-gray-300 w-full px-4 py-6">
            <View
                className={`flex ${isLargeScreen ? "flex-row space-x-6" : "flex-col space-y-4"} items-center justify-center`}
            >
                {/* Banner */}
                <Image
                    source={require("../assets/footer-banner.png")}
                    resizeMode="contain"
                    style={{
                        width: isLargeScreen ? screenWidth * 0.4 : screenWidth - 32,
                        height: 150,
                        borderRadius: 12,
                    }}
                />

                {/* Text Block */}
                <View className="space-y-2 max-w-xl">
                    <Text className="text-lg font-bold text-black text-center md:text-left">
                        TIGER INDIA SAFARI
                    </Text>
                    <Text className="text-green-700 text-center md:text-left">
                        Explore India's wild side
                    </Text>
                    <Text className="text-blue-600 text-center md:text-left">
                        📧 info.tigerindiasafari@gmail.com
                    </Text>
                    <Text className="text-blue-600 text-center md:text-left">
                        📞 +91 8690954063
                    </Text>

                    <TouchableOpacity
                        onPress={() => openURL("https://www.instagram.com/tigerindiasafari/")}
                    >
                        <Text className="text-blue-600 underline text-center md:text-left">
                            📸 Follow Us on Instagram
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => openURL("https://wa.me/message/3BILLTLVGYCSJ1")}
                    >
                        <Text className="text-blue-600 underline text-center md:text-left">
                            💬 Chat with us on WhatsApp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openURL("https://www.facebook.com/share/16S6JJGNyv/")}
                    >
                        <Text className="text-blue-600 underline text-center md:text-left">
                            📘 Follow Us on facebook
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
});

export default Footer;
