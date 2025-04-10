import React, { forwardRef } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

const Footer = forwardRef((props, ref) => {
    const openURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.warn(`Can't open URL: ${url}`);
        }
    };

    return (
        <View ref={ref} className="bg-transparent p-6 space-y-3">
            <View className="flex-row items-center space-x-4">
                <Image
                    source={require("../assets/footer-banner.png")}
                    className="h-16 w-16 rounded-full"
                    resizeMode="contain"
                />
                <View>
                    <Text className="text-lg font-bold text-black">
                        TIGER INDIA SAFARI
                    </Text>
                    <Text className="text-xs text-gray-300">
                        Explore India's wild side
                    </Text>
                    <Text className="text-orange-300">
                        📧 info.tigerindiasafari@gmail.com
                    </Text>
                    <Text className="text-blue-600">
                        📞 +91 8690954063
                    </Text>

                    <TouchableOpacity
                        onPress={() =>
                            openURL("https://www.instagram.com/tigerindiasafari/")
                        }
                    >
                        <Text className="text-pink-400 underline">
                            📸 Follow Us on Instagram
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            openURL("https://wa.me/message/3BILLTLVGYCSJ1")
                        }
                    >
                        <Text className="text-green-400 underline">
                            💬 Chat with us on WhatsApp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
});

export default Footer;
