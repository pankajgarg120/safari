import React from "react";
import { ScrollView, View, Text, Image, Dimensions } from "react-native";
import { Video } from "expo-av";
import Swiper from "react-native-web-swiper";
import "../global.css"; // Tailwind CSS enabled

const { width, height } = Dimensions.get("window");

export default function HomePage() {
    return (
        <View className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={true}>

                {/* 🌿 Jungle Quote Above Slider */}
                <View className="px-6 pt-6 mt-7">
                    <Text className="text-xl md:text-2xl lg:text-3xl font-semibold italic text-center text-green-800 bg-green-100 p-4 rounded-xl shadow-md">
                        "Chase the wild in the heart of the jungle, then find peace in the luxury of your stay — where every safari ends in a warm hotel embrace."
                    </Text>
                </View>

                {/* 🖼️ Image Slider */}
                <View className="w-full mt-6" style={{ height: height }}>
                    <Swiper controlsProps={{
                        dotsTouchable: true,
                        prevPos: 'left',
                        nextPos: 'right',
                        prevTitle: '‹',
                        nextTitle: '›',
                        nextTitleStyle: {
                            fontSize: 40,
                            color: '#2f855a',
                            position: 'absolute',
                            top: '45%',
                            right: 10,
                            zIndex: 10,
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            borderRadius: 30,
                            paddingHorizontal: 10,
                            paddingVertical: 2,
                        },
                        prevTitleStyle: {
                            fontSize: 40,
                            color: '#2f855a',
                            position: 'absolute',
                            top: '45%',
                            left: 10,
                            zIndex: 10,
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            borderRadius: 30,
                            paddingHorizontal: 10,
                            paddingVertical: 2,
                        },
                        dotActiveStyle: {
                            backgroundColor: '#2f855a',
                        },
                    }}>
                        <View className="flex-1 justify-center items-center">
                            <Image
                                source={require("../assets/pic1.jpg")}
                                style={{ width, height }}
                                resizeMode="cover"
                            />
                        </View>
                        <View className="flex-1 justify-center items-center">
                            <Image
                                source={require("../assets/pic2.jpg")}
                                style={{ width, height }}
                                resizeMode="cover"
                            />
                        </View>
                        <View className="flex-1 justify-center items-center">
                            <Image
                                source={require("../assets/pic3.jpg")}
                                style={{ width, height }}
                                resizeMode="cover"
                            />
                        </View>
                    </Swiper>
                </View>

                {/* 🎥 Hero Video With Overlay Quote */}
                <View className="w-full justify-center items-center relative mt-6" style={{ height }}>
                    <Video
                        source={require("../assets/j1.mp4")}
                        shouldPlay
                        isLooping
                        isMuted={true}
                        resizeMode="cover"
                        style={{
                            width,
                            height,
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />
                    <View className="absolute top-10 px-6">
                        <Text className="text-white text-xl md:text-2xl text-center font-bold italic bg-black/60 p-4 rounded-lg shadow-lg">
                            “There’s a moment in every tiger safari when time stands still — the wind holds its breath, the forest leans in, and your heartbeat echoes the rhythm of the wild. Then, out of the golden grass, emerges the tiger — not just an animal, but a living myth wrapped in stripes and silence.”
                        </Text>
                    </View>
                </View>

                {/* 📜 Content Section */}
                <View className="p-6 space-y-4">
                    <Text className="text-2xl font-bold text-green-800">Explore the Wild</Text>
                    <Text className="text-base text-gray-700">
                        Dive into the lush wilderness and experience tiger safaris like never before.
                        Experience the untamed beauty of nature with our guided Jungle Safaris.
                        Ride through dense forests, spot majestic tigers, and hear the symphony of exotic birds.
                        Every turn holds a new surprise – from playful monkeys to elusive leopards.
                        Whether you're a wildlife enthusiast or a first-time explorer, our safaris bring you closer to the wild like never before.
                    </Text>

                    <View className="flex-1 justify-center items-center bg-white space-y-4">

                        <View className="flex-row items-start justify-between p-4">
                            <Image
                                source={require("../assets/tiger/tiger8.jpg")}
                                className="w-40 h-40 rounded-lg"
                                resizeMode="cover"
                            />

                            <Text className="ml-4 flex-1 border border-green-800 p-4 rounded-xl bg-white text-base text-gray-800 shadow-md">
                                Step into the untamed beauty of the wild, where every rustle in the bushes holds a secret and every paw print tells a story older than time. A tiger safari is not just a journey—it’s a breathtaking experience that captures your eyes with raw majesty and steals your heart with nature’s purest power.

                                As the golden sun filters through ancient sal trees and morning mist dances over the forest floor, your senses awaken to a world untouched by chaos. The air is charged with anticipation—every sound, every shadow, every whisper in the wind holds the promise of a royal encounter. And then, with silent grace, the striped monarch steps into view—its eyes locked with yours, a moment suspended in time.

                                This is not a scene from a dream—it’s the heartbeat of the jungle, waiting for you to feel it for yourself. Book your adventure today and witness the magic of the wild unfold before you—because some moments aren’t meant to be seen on screens, but felt deep within the soul, where stories are born and never forgotten.
                            </Text>
                        </View>





                        <View className="flex-row items-start justify-between p-4">
                            <Text className="mr-4 flex-1 border border-green-800 p-4 rounded-xl bg-white text-base text-gray-800 shadow-md">
                                "Let the wild take your breath away—not the bumps on the road. Our safari rides are as smooth as the sunrise over the jungle—designed for comfort, built for adventure."
                                {'\n'}
                                {'\n'}
                                "Explore the untamed in unmatched comfort—because a great safari isn’t just about the destination, but the ride that brings you there in style."
                                {'\n'}
                                {'\n'}
                                "From the roar of the tiger to the rustle of leaves, feel every moment—not every bump. Our safari rides ensure comfort with every mile, so your heart races for the right reasons."
                                {'\n'}
                                {'\n'}
                                "Wild outside, smooth inside. Enjoy every twist and turn of your jungle journey without feeling them—because great safaris deserve great rides."
                                {'\n'}
                                {'\n'}
                                "Bumpy roads don’t belong in great memories. That’s why our safari rides are designed to keep you safe"
                            </Text>
                            <Image
                                source={require("../assets/pic1.jpg")}
                                className="w-40 h-40 rounded-lg"
                                resizeMode="cover"
                            />


                        </View>

                        <View className="w-full px-4 py-6">
                            <View className="bg-white rounded-2xl p-6 shadow-md w-full">
                                <Text className="text-gray-600 text-base">
                                    Why Choose a Tiger Safari?{"\n\n"}
                                    🐾 Unforgettable Encounters: Witness tigers, leopards, elephants, and countless other species in their natural habitat.{"\n\n"}
                                    📸 Photography Paradise: Perfect lighting, raw emotion, and candid moments—ideal for nature photography.{"\n\n"}
                                    🛶 Immersive Experiences: Guided jungle trails, canopy walks, and jeep safaris led by expert naturalists.{"\n\n"}
                                    🌄 Scenic Landscapes: From lush forests to sun-kissed grasslands, every turn offers a new canvas of beauty.{"\n\n"}
                                    💚 Eco-Tourism Focused: Support conservation efforts and local communities by choosing ethical wildlife tourism.{"\n\n"}
                                    🗓️ Plan Your Escape Today{"\n"}
                                    Tigers don’t live in cages—they live in stories, in wilderness, in the whispers of the wind. Come, write your own wild story.{"\n\n"}
                                    Book your tiger safari today and step into the legend.{"\n\n"}
                                    📍 Available in premier tiger reserves like Ranthambhore, Jim Corbett, Bandhavgarh, Kanha, Tadoba, and more.{"\n\n"}
                                    📞 Custom packages, stay options, and travel assistance available.
                                </Text>
                            </View>
                        </View>


                        <Image
                            source={require("../assets/pic3.jpg")}
                            className="w-full h-52 rounded-xl"
                            resizeMode="cover"
                        />
                    </View>

                    <View className="content-center">
                        <Text className="text-xl font-semibold text-green-700 text-center">
                            Luxury Lodges
                        </Text>
                    </View>

                    <View className="w-full px-4 py-6">
                        <View className="bg-white rounded-2xl p-6 shadow-md w-full">
                            <Text className="text-gray-600 text-base">
                                After the thrill of the chase and the heartbeat of the jungle, find your peace in a place that feels like home—but better.{"\n\n"}
                                Our handpicked jungle hotels and eco-resorts are more than just a place to rest—they are sanctuaries of comfort, surrounded by nature’s quiet symphony. Wake up to the call of distant birds, sip your morning tea with a view of misty treetops, and fall asleep under a sky lit by a million stars.{"\n\n"}
                                Whether nestled deep in the forest or overlooking serene lakes and open meadows, each stay is designed to immerse you in nature without ever compromising on luxury.
                            </Text>
                        </View>
                    </View>


                </View>
            </ScrollView >
        </View >
    );
}
