import React from "react";
import { View, Text, Image, ScrollView, ImageBackground, Dimensions } from "react-native";
import Swiper from "react-native-swiper";


const { width: screenWidth } = Dimensions.get("window");
const imageHeight = screenWidth * 0.5625; // 16:9 ratio

// ✅ Manual image map (Static imports)
const hotelImages = {
    hotel1: [
        require("../assets/hotel/hotel11.jpg"),
        require("../assets/hotel/hotel12.jpg"),
        require("../assets/hotel/hotel13.jpg"),
        require("../assets/hotel/hotel14.jpg"),
    ],
    hotel2: [
        require("../assets/hotel/hotel21.jpg"),
        require("../assets/hotel/hotel22.jpg"),
        require("../assets/hotel/hotel23.jpg"),
        require("../assets/hotel/hotel24.jpg"),
    ],
    hotel3: [
        require("../assets/hotel/hotel31.jpg"),
        require("../assets/hotel/hotel32.jpg"),
        require("../assets/hotel/hotel33.jpg"),
        require("../assets/hotel/hotel34.jpg"),
    ],
};

export default function HotelsPage() {
    return (
        <ImageBackground
            source={require("../assets/Hotel.jpg")}
            resizeMode="cover"
            className="flex-1"
        >
            <ScrollView className="flex-1 bg-white/60 px-6 pt-24 pb-10">
                <Text className="text-3xl font-extrabold text-green-800 text-center mb-6">
                    Experience Comfort in the Wilderness
                </Text>

                <Text className="text-base text-gray-700 text-center mb-10">
                    Our curated selection of 3-star, 4-star, and 5-star hotels ensures you enjoy luxury, comfort, and convenience while staying close to nature.
                </Text>

                <View className="space-y-8">

                    {/* Hotel 1 */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Swiper showsPagination={true} autoplay autoplayTimeout={7.5} style={{ height: imageHeight }}>
                            {hotelImages.hotel1.map((imgSrc, idx) => (
                                <Image
                                    key={idx}
                                    source={imgSrc}
                                    style={{
                                        width: screenWidth - 48,
                                        height: imageHeight,
                                        alignSelf: 'center',
                                        borderRadius: 12,
                                    }}
                                    resizeMode="cover"
                                />
                            ))}
                        </Swiper>
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">Forest Edge Retreat (3-Star)</Text>
                            <Text className="text-gray-600 mt-2">Budget-friendly rooms with basic amenities. Perfect for nature lovers and backpackers.</Text>
                        </View>
                    </View>

                    {/* Hotel 2 */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Swiper showsPagination={true} autoplay autoplayTimeout={7.5} style={{ height: imageHeight }}>
                            {hotelImages.hotel2.map((imgSrc, idx) => (
                                <Image
                                    key={idx}
                                    source={imgSrc}
                                    style={{
                                        width: screenWidth - 48,
                                        height: imageHeight,
                                        alignSelf: 'center',
                                        borderRadius: 12,
                                    }}
                                    resizeMode="cover"
                                />
                            ))}
                        </Swiper>
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">Jungle Stay Palace (4-Star)</Text>
                            <Text className="text-gray-600 mt-2">Premium lodging with elegant decor, jungle views, and delicious local cuisine.</Text>
                        </View>
                    </View>

                    {/* Hotel 3 */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Swiper showsPagination={true} autoplay autoplayTimeout={7.5} style={{ height: imageHeight }}>
                            {hotelImages.hotel3.map((imgSrc, idx) => (
                                <Image
                                    key={idx}
                                    source={imgSrc}
                                    style={{
                                        width: screenWidth - 48,
                                        height: imageHeight,
                                        alignSelf: 'center',
                                        borderRadius: 12,
                                    }}
                                    resizeMode="cover"
                                />
                            ))}
                        </Swiper>
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">The Royal Canopy (5-Star)</Text>
                            <Text className="text-gray-600 mt-2">A luxurious escape offering spa, fine dining, and suites nestled in serene jungle surroundings.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
