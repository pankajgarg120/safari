import React from "react";
import { View, Text, ScrollView, Image, ImageBackground, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export default function AboutPage() {
    return (
        <ImageBackground
            source={require("../assets/About.jpg")}
            resizeMode="cover"
            className="flex-1"
        >
            <ScrollView
                contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
                style={{ width: screenWidth }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <Text className="text-3xl font-extrabold text-green-800 text-center mt-24 mb-6">
                    About Us
                </Text>

                {/* Banner Image */}
                <View className="items-center justify-center mb-6">
                    <Image
                        source={require("../assets/tiger/tiger1.jpg")}
                        className="rounded-xl"
                        style={{
                            width: screenWidth - 32,
                            height: (screenWidth - 32) * 0.5625,
                        }}
                        resizeMode="cover"
                    />
                </View>

                {/* Info Block */}
                <View className="space-y-3 px-2">
                    <Text className="text-lg font-bold text-gray-800 text-center">TIGER INDIA SAFARI</Text>
                    <Text className="text-xs text-gray-800 text-center">Explore India’s Wild Side</Text>

                    {/* About Text */}
                    <Text className="text-gray-700 text-base text-justify leading-relaxed mt-4">
                        At Tiger India Safari, we bring you face-to-face with India’s untamed beauty.
                        From thrilling tiger trails to serene luxury stays, our mission is to offer
                        an unforgettable jungle experience while preserving wildlife and promoting
                        sustainable tourism.
                    </Text>
                    <Text className="text-gray-700 text-base text-justify leading-relaxed">
                        Jungle Safari India is a Wildlife Tour Company that offers tour packages for every National Park in India. This company was launched in 2008 by Sunil Sharma and since that time it’s been a remarkable player in the tourism sector.
                    </Text>
                    <Text className="text-gray-700 text-base text-justify leading-relaxed">
                        You can book safaris for various wildlife sanctuaries of India along with hotels. From thrilling jungle safari rides and memorable elephant rides to comfortable cab services and nice resort accommodations, Jungle Safari India has got it all.
                    </Text>
                    <Text className="text-gray-700 text-base text-justify leading-relaxed">
                        People can book their tours and safaris from our online platforms so that they don’t have to stand in long queues. For customer satisfaction, we provide customer support services to help with inquiries, itinerary planning, and any other travel-related needs.
                    </Text>
                    <Text className="text-gray-700 text-base text-justify leading-relaxed">
                        Jungle Safari India offers different types of tour packages such as weekend packages, family-friendly trips, and safari fun adventures. When booking a package you can select your accommodation according to your allowance and need, from luxury resorts to budget-friendly hotels.
                    </Text>
                    <Text className="text-gray-700 text-base text-justify leading-relaxed">
                        Customer satisfaction is our priority and thus we provide the best tour packages so that you can explore every corner of India without worrying about budget, comfort, or anything else.
                    </Text>
                    <Text className="text-gray-700 text-base text-justify leading-relaxed">
                        Our company stands out for its dedication to customer satisfaction and ethical tourism practices. Jungle Safari India employs knowledgeable and experienced guides for safari rides who know a lot about the flora and fauna of the park, so you don’t have to worry about safety. These guides add excitement to the safari experience by providing knowledge about the park's biodiversity.
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
