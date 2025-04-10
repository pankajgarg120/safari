import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function HotelsPage() {
    return (
        <View className="flex-1 bg-white items-center bg-white justify-center">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
                {/* Heading with top margin to avoid NavBar clash */}
                <Text className="text-3xl font-extrabold text-green-800 text-center mt-24 mb-6">
                    Experience Comfort in the Wilderness
                </Text>

                <Text className="text-base text-gray-700 text-center mb-10">
                    Our curated selection of 3-star, 4-star, and 5-star hotels ensures you enjoy luxury, comfort, and convenience while staying close to nature.
                </Text>

                {/* Hotel Cards */}
                <View className="space-y-8">

                    {/* Hotel 1 - 3 Star */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Image
                            source={require("../assets/hotel/hotel1.jpg")}
                            className="w-full h-48"
                            resizeMode="cover"
                        />
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">Forest Edge Retreat (3-Star)</Text>
                            <Text className="text-gray-600 mt-2">
                                Budget-friendly rooms with basic amenities. Perfect for nature lovers and backpackers.
                            </Text>
                        </View>
                    </View>

                    {/* Hotel 2 - 4 Star */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Image
                            source={require("../assets/hotel/hotel2.jpg")}
                            className="w-full h-48"
                            resizeMode="cover"
                        />
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">Jungle Stay Palace (4-Star)</Text>
                            <Text className="text-gray-600 mt-2">
                                Premium lodging with elegant decor, jungle views, and delicious local cuisine.
                            </Text>
                        </View>
                    </View>

                    {/* Hotel 3 - 5 Star */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Image
                            source={require("../assets/hotel/hotel3.jpg")}
                            className="w-full h-48"
                            resizeMode="cover"
                        />
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">The Royal Canopy (5-Star)</Text>
                            <Text className="text-gray-600 mt-2">
                                A luxurious escape offering spa, fine dining, and suites nestled in serene jungle surroundings.
                            </Text>
                        </View>
                    </View>

                    {/* Hotel 4 - 4 Star */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Image
                            source={require("../assets/hotel/hotel4.jpg")}
                            className="w-full h-48"
                            resizeMode="cover"
                        />
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">Wild Horizon Inn (4-Star)</Text>
                            <Text className="text-gray-600 mt-2">
                                A mix of luxury and adventure with nature trails and bonfire evenings.
                            </Text>
                        </View>
                    </View>

                    {/* Hotel 5 - 3 Star */}
                    <View className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <Image
                            source={require("../assets/hotel/hotel5.jpg")}
                            className="w-full h-48"
                            resizeMode="cover"
                        />
                        <View className="p-4">
                            <Text className="text-xl font-bold text-green-700">Green Nest Lodge (3-Star)</Text>
                            <Text className="text-gray-600 mt-2">
                                Cozy and peaceful lodge perfect for weekend getaways and family stays.
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}
