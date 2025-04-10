import React from "react";
import { ScrollView, View, Text, Image, Dimensions } from "react-native";
import { Video } from "expo-av";
import Swiper from "react-native-web-swiper";
import "../global.css"; // Tailwind CSS enabled

export default function HomePage() {
    return (
        <View className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                minWidth: "100%",
                overflowX: "auto",
            }} showsVerticalScrollIndicator={true}>

                {/* 🌿 Jungle Quote */}
                <View className="px-4 pt-6 mt-7">
                    <Text className="text-lg md:text-2xl font-semibold italic text-center text-green-800 bg-green-100 p-4 rounded-xl shadow-md">
                        "Chase the wild in the heart of the jungle, then find peace in the luxury of your stay — where every safari ends in a warm hotel embrace."
                    </Text>
                </View>

                {/* 🖼️ Image Slider */}
                <View className="w-full mt-6 h-72 md:h-[500px]">
                    <Swiper
                        controlsProps={{
                            dotsTouchable: true,
                            prevTitle: '‹',
                            nextTitle: '›',
                            prevTitleStyle: {
                                fontSize: 30,
                                color: '#2f855a',
                                backgroundColor: 'rgba(255,255,255,0.6)',
                                borderRadius: 20,
                                paddingHorizontal: 10,
                            },
                            nextTitleStyle: {
                                fontSize: 30,
                                color: '#2f855a',
                                backgroundColor: 'rgba(255,255,255,0.6)',
                                borderRadius: 20,
                                paddingHorizontal: 10,
                            },
                            dotActiveStyle: {
                                backgroundColor: '#2f855a',
                            },
                        }}
                    >
                        <View className="flex-1 items-center justify-center">
                            <Image
                                source={require("../assets/pic1.jpg")}
                                className="w-full h-full rounded-lg"
                                resizeMode="cover"
                            />
                        </View>
                        <View className="flex-1 items-center justify-center">
                            <Image
                                source={require("../assets/pic2.jpg")}
                                className="w-full h-full rounded-lg"
                                resizeMode="cover"
                            />
                        </View>
                        <View className="flex-1 items-center justify-center">
                            <Image
                                source={require("../assets/pic3.jpg")}
                                className="w-full h-full rounded-lg"
                                resizeMode="cover"
                            />
                        </View>
                    </Swiper>
                </View>

                {/* 🎥 Hero Video */}
                <View className="relative w-full mt-6 h-72 md:h-[500px] justify-center items-center">
                    <Video
                        source={require("../assets/j1.mp4")}
                        shouldPlay
                        isLooping
                        isMuted
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    />
                    <View className="absolute px-4">
                        <Text className="text-white text-sm md:text-xl text-center font-bold italic bg-black/60 p-4 rounded-lg shadow-lg">
                            “There’s a moment in every tiger safari when time stands still — the wind holds its breath, the forest leans in, and your heartbeat echoes the rhythm of the wild.”
                        </Text>
                    </View>
                </View>

                {/* 📜 Content Section */}
                <View className="px-4 py-6 space-y-6">
                    <Text className="text-xl font-bold text-green-800">Explore the Wild</Text>
                    <Text className="text-base text-gray-700">
                        Dive into the lush wilderness and experience tiger safaris like never before.
                        Experience the untamed beauty of nature with our guided Jungle Safaris.
                        Ride through dense forests, spot majestic tigers, and hear the symphony of exotic birds...
                    </Text>

                    {/* 🐅 Tiger Section 1 */}
                    <View className="flex-col md:flex-row items-center space-y-4 md:space-x-4">
                        <Image
                            source={require("../assets/tiger/tiger8.jpg")}
                            className="w-full md:w-48 h-48 rounded-xl"
                            resizeMode="cover"
                        />
                        <Text className="text-sm text-gray-800 border border-green-800 p-4 rounded-xl bg-white shadow-md">
                            Step into the untamed beauty of the wild, where every rustle in the bushes holds a secret and every paw print tells a story older than time...
                        </Text>
                    </View>

                    {/* 🛻 Safari Ride Comfort */}
                    <View className="flex-col md:flex-row-reverse items-center space-y-4 md:space-x-4">
                        <Image
                            source={require("../assets/pic1.jpg")}
                            className="w-full md:w-48 h-48 rounded-xl"
                            resizeMode="cover"
                        />
                        <Text className="text-sm text-gray-800 border border-green-800 p-4 rounded-xl bg-white shadow-md">
                            "Let the wild take your breath away—not the bumps on the road. Our safari rides are as smooth as the sunrise..."
                        </Text>
                    </View>

                    {/* 🐾 Why Safari */}
                    <View className="bg-white rounded-2xl p-6 shadow-md">
                        <Text className="text-gray-600 text-sm">
                            Why Choose a Tiger Safari?{"\n\n"}
                            🐾 Unforgettable Encounters{"\n"}
                            📸 Photography Paradise{"\n"}
                            🛶 Immersive Experiences{"\n"}
                            🌄 Scenic Landscapes{"\n"}
                            💚 Eco-Tourism{"\n\n"}
                            Book your tiger safari today and step into the legend.{"\n"}
                            📍 Locations: Ranthambhore, Jim Corbett, Bandhavgarh, etc.{"\n"}
                            📞 Custom packages available.
                        </Text>
                    </View>

                    {/* 🏨 Jungle Hotel */}
                    <Image
                        source={require("../assets/pic3.jpg")}
                        className="w-full h-52 rounded-xl"
                        resizeMode="cover"
                    />

                    <View className="items-center mt-6">
                        <Text className="text-xl font-semibold text-green-700">Luxury Lodges</Text>
                    </View>

                    <View className="bg-white rounded-2xl p-6 shadow-md">
                        <Text className="text-gray-600 text-sm">
                            After the thrill of the chase and the heartbeat of the jungle, find your peace in a place that feels like home—but better...
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
