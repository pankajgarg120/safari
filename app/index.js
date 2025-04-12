import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    ImageBackground,
    Dimensions,
} from "react-native";
import { Video } from "expo-av";
import Swiper from "react-native-web-swiper";
import "../global.css"; // Tailwind CSS enabled

const { width: screenWidth } = Dimensions.get("window");
const imageHeight = screenWidth * 0.5625; // 16:9 ratio


// Static image array for Swiper (avoid dynamic require)
const sliderImages = [
    require("../assets/pic6.jpg"),
    require("../assets/pic5.jpg"),
    require("../assets/pic4.jpg"),
    require("../assets/pic7.jpg"),
    require("../assets/pic8.jpg"),
];

export default function HomePage() {
    return (
        // <ImageBackground
        //     source={require("../assets/Home.jpg")}
        //     style={{ flex: 1 }}
        //     resizeMode="cover"
        // >
        <View className="flex-1 bg-gray-200">
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    minWidth: "100%",
                }}
                showsVerticalScrollIndicator={true}
            >
                {/* 🌿 Jungle Quote */}
                <View className="px-4 pt-6 mt-12">
                    <Text className="text-lg md:text-2xl font-semibold italic text-center text-green-800 bg-green-100 p-4 rounded-xl shadow-md">
                        "Chase the wild in the heart of the jungle, then find peace in the luxury of your stay — where every safari ends in a warm hotel embrace."
                    </Text>
                </View>

                {/* 🖼️ Image Slider */}
                <View className="mt-6 h-72 md:h-[500px]" style={{ width: screenWidth }}>
                    <Swiper showsPagination={true} autoplay autoplayTimeout={7.5} style={{ height: imageHeight }}>
                        {sliderImages.map((imgSrc, idx) => (
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
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />

                    <View className="absolute px-4 top-0 left-0 p-4">
                        <Text className="text-white text-sm md:text-xl text-center font-bold italic bg-black/60 p-4 rounded-lg shadow-lg">
                            “There’s a moment in every tiger safari when time stands still — the wind holds its breath, the forest leans in, and your heartbeat echoes the rhythm of the wild.”
                        </Text>
                    </View>
                </View>

                {/* 📜 Content Section */}
                <View className="px-4 py-6 space-y-6">
                    <Text className="text-xl font-bold text-green-800">
                        Explore the Wild
                    </Text>
                    <Text className="text-base text-gray-700">
                        Dive into the lush wilderness and experience tiger safaris like never before.
                        Experience the untamed beauty of nature with our guided Jungle Safaris.
                        Ride through dense forests, spot majestic tigers, and hear the symphony of exotic birds...
                    </Text>

                    {/* 🐅 Tiger Section */}
                    <View className="flex-col md:flex-row items-center space-y-4 md:space-x-4">
                        <Image
                            source={require("../assets/tiger/tiger8.jpg")}
                            className=" md:w-48 h-48 rounded-xl"
                            style={{ width: screenWidth / 1.5 }}
                            resizeMode="cover"
                        />
                        <Text className="text-sm text-gray-800 border border-green-800 p-2 rounded-xl bg-white shadow-md">
                            Step into the untamed beauty of the wild, where every rustle in the bushes holds a secret and every paw print tells a story older than time...
                            {"\n"}{"\n"}
                            This is not a scene from a dream—it’s the heartbeat of the jungle. Book your adventure today and witness the magic unfold.
                            {"\n"}{"\n"}
                            🦁 "Follow the trail not marked by maps,
                            but by instinct —
                            where nature writes her own story
                            in shades of green and gold."
                            {"\n"}{"\n"}
                            🌲 "Let the forest canopy be your roof,
                            and the calls of the wild your lullaby."
                        </Text>
                    </View>

                    {/* 🛻 Safari Ride Comfort */}
                    <View className="flex flex-col md:items-center md:space-x-reverse md:space-x-4 flex-wrap align-middle">
                        <Image
                            source={require("../assets/pic1.jpg")}
                            style={{
                                width: screenWidth - 48,
                                height: screenWidth * 0.5625,
                                borderRadius: 12,
                            }}
                            resizeMode="cover"
                        />
                        <Text>  </Text>
                        <Text className="text-sm text-gray-800 border border-green-800 p-4 rounded-xl bg-white shadow-md max-w-md">
                            "Let the wild take your breath away—not the bumps on the road. Our safari rides are designed for comfort and built for adventure."
                            {"\n\n"}
                            🦓 "A safari is not just a trip... It’s a journey through time, where the Earth breathes wild and free."
                            {"\n\n"}
                            🦁 "Every roar in the distance, every rustle in the grass — a reminder that this is their kingdom, not ours."
                            {"\n\n"}
                            🌅 "Golden skies, endless plains, and a front-row seat to the greatest show on Earth."
                        </Text>
                    </View>

                    {/* 🐾 Why Safari */}
                    <View className="flex-1 bg-gray-100 items-center justify-center">
                        <View className="bg-white rounded-full aspect-square w-80 items-center justify-center p-6 shadow-lg">
                            <Text className="text-center text-lg font-bold text-black mb-2">
                                Why Choose a Tiger Safari?
                            </Text>
                            <Text className="text-gray-600 text-sm text-center">
                                🐾 Unforgettable Encounters{"\n"}
                                📸 Photography Paradise{"\n"}
                                🛶 Immersive Experiences{"\n"}
                                🌄 Scenic Landscapes{"\n"}
                                💚 Eco-Tourism
                            </Text>
                            <Text className="text-gray-700 text-xs text-center mt-4">
                                Book your tiger safari today!{"\n"}
                                📍 Ranthambhore, Jim Corbett, Bandhavgarh{"\n"}
                                📞 Custom packages available
                            </Text>
                        </View>
                    </View>

                    {/* 🏨 Jungle Hotel */}
                    <View className="flex md:items-center md:space-x-reverse md:space-x-4 flex-wrap align-middle px-2">
                        <Image
                            source={require("../assets/pic3.jpg")}
                            style={{
                                width: screenWidth - 48,
                                height: (screenWidth - 48) * 0.5625, // or any height you want
                                borderRadius: 30,

                            }}
                            resizeMode="cover"
                        />
                    </View>

                    {/* ✨ Luxury Lodges Section */}
                    <View className="items-center mt-6">
                        <Text className="text-xl font-semibold text-green-700">
                            Luxury Lodges
                        </Text>
                    </View>

                    <View className="bg-white rounded-2xl p-6 shadow-md border border-green-100 space-y-4 mt-2">
                        <Text className="text-green-800 font-semibold text-base italic text-center">
                            After the thrill of the chase and the heartbeat of the jungle, find your peace in a place that feels like home — but better...
                        </Text>

                        <View className="border-t border-gray-200 pt-4 space-y-2">
                            <Text className="text-gray-700 text-sm">
                                🏕️{" "}
                                <Text className="font-medium italic">
                                    "Retreat to comfort surrounded by whispers of the wild."
                                </Text>
                            </Text>
                            <Text className="text-gray-700 text-sm">
                                🛏️{" "}
                                <Text className="font-medium italic">
                                    "Where jungle dreams meet 5-star comfort."
                                </Text>
                            </Text>
                            <Text className="text-gray-700 text-sm">
                                🌌{" "}
                                <Text className="font-medium italic">
                                    "Sleep beneath a million stars, wrapped in luxury."
                                </Text>
                            </Text>
                            <Text className="text-gray-700 text-sm">
                                🔥{" "}
                                <Text className="font-medium italic">
                                    "Evenings by the fire, mornings with the mist — it’s more than a stay, it’s a memory."
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
        // </ImageBackground >
    );
}
