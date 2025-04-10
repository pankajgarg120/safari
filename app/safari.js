import React, { useState } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Linking,
    ImageBackground,
    Modal,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const safaris = [
    "Jhalana Safari",
    "Ranthambore Safari",
    "Sariska Safari",
    "Jawai Leopard Safari",
    "Kumbhalgarh Wildlife Safari",
    "Jim Corbett Safari",
    "Chambal Safari",
];

const safariData = {
    "Jhalana Safari": [
        require("../assets/tiger/jhalana/J1.jpg"),
        require("../assets/tiger/jhalana/J2.jpg"),
        require("../assets/tiger/jhalana/J3.jpg"),
        require("../assets/tiger/jhalana/J4.jpg"),
    ],
    "Jim Corbett Safari": [
        require("../assets/tiger/jimcorbett/jc1.jpg"),
        require("../assets/tiger/jimcorbett/jc2.jpg"),
        require("../assets/tiger/jimcorbett/jc3.jpg"),
        require("../assets/tiger/jimcorbett/jc4.jpg"),
    ],
    "Ranthambore Safari": [
        require("../assets/tiger/ranthambore/r1.jpg"),
        require("../assets/tiger/ranthambore/r2.jpg"),
        require("../assets/tiger/ranthambore/r3.jpg"),
        require("../assets/tiger/ranthambore/r4.jpg"),
    ],
    "Sariska Safari": [
        require("../assets/tiger/sariska/s1.jpg"),
        require("../assets/tiger/sariska/s2.jpg"),
        require("../assets/tiger/sariska/s3.jpg"),
        require("../assets/tiger/sariska/s4.jpg"),
    ],
    "Jawai Leopard Safari": [
        require("../assets/tiger/jawai/j1.jpg"),
        require("../assets/tiger/jawai/j2.jpg"),
        require("../assets/tiger/jawai/j3.jpg"),
        require("../assets/tiger/jawai/j4.jpg"),
    ],
    "Kumbhalgarh Wildlife Safari": [
        require("../assets/tiger/kumbhalgarh/k1.jpg"),
        require("../assets/tiger/kumbhalgarh/k2.jpg"),
        require("../assets/tiger/kumbhalgarh/k3.jpg"),
        require("../assets/tiger/kumbhalgarh/k4.jpg"),
    ],
    "Chambal Safari": [
        require("../assets/tiger/chambal/c1.jpg"),
        require("../assets/tiger/chambal/c2.jpg"),
        require("../assets/tiger/chambal/c3.jpg"),
        require("../assets/tiger/chambal/c4.jpg"),
    ],
};

const safariDetails = {
    "Ranthambore Safari": {
        zones: `🗺️ Zone Routes:
Zone 1: Singhdwar → Raipur → Amreshawardang → ... (20 km)
Zone 2: Jogimahal → Jhalra → Kamaldha → ... (20 km)
Zone 3: Jogimahal → Padam Talab → Rajbagh → ... (18 km)
Zone 4: Singdwar → Tambakhan → Maliktalab → ... (27 km)
Zone 5: Singdwar → Jokha → Kachida → ... (18 km)
Zone 6: Kundal → Pallidarwaja → Mansarovar → ... (27 km)
Zone 7: Chidi Kho → Rajbagh Naka → Kushalidarra (12 km)
Zone 8: Balas → Neemalidang → Kalibhat → ... (16 km)
Zone 9: Qualji → Ghati ka Tiraha → Kamleshwar Mandir → ... (22 km)
Zone 10: Halonda → Kailashpuri → Devpura Band (20 km)`,
        timings: {
            morning: "6:30 AM - 10:00 AM",
            evening: "2:30 PM - 6:00 PM",
        },
    },
    "Jhalana Safari": {
        zones: `🗺️ Zones: Central Track, Leopard Safari Route, Shikaar Audhi, Base Camp Track`,
        timings: {
            morning: "6:15 AM - 9:15 AM",
            evening: "3:45 PM - 6:15 PM",
        },
    },
    "Sariska Safari": {
        zones: `🗺️ Zones: Zone 1 to Zone 4 including Pandupol Temple, Slopka, Kalighati, Kankwari Fort`,
        timings: {
            morning: "6:00 AM - 10:00 AM",
            evening: "2:00 PM - 6:00 PM",
        },
    },
    "Jawai Leopard Safari": {
        zones: `🗺️ Zones: Devgiri Hills, Perwa Leopard Area, Jawai Dam Zone`,
        timings: {
            morning: "6:00 AM - 9:00 AM",
            evening: "4:30 PM - 7:30 PM",
        },
    },
    "Kumbhalgarh Wildlife Safari": {
        zones: `🗺️ Zones: Kumbhalgarh Sanctuary Core Zone, Ghanerao, Thandi Beri`,
        timings: {
            morning: "7:00 AM - 10:00 AM",
            evening: "3:30 PM - 6:30 PM",
        },
    },
    "Jim Corbett Safari": {
        zones: `🗺️ Zones: Bijrani, Jhirna, Dhikala, Dhela, Durga Devi`,
        timings: {
            morning: "6:00 AM - 9:30 AM",
            evening: "3:00 PM - 6:00 PM",
        },
    },
    "Chambal Safari": {
        zones: `🗺️ Zones: National Chambal Sanctuary along the Chambal River (boat safari)`,
        timings: {
            morning: "6:30 AM - 10:00 AM",
            evening: "3:30 PM - 6:00 PM",
        },
    },
};

export default function SafariPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSafari, setSelectedSafari] = useState(null);

    const openSafariModal = (safari) => {
        setSelectedSafari(safari);
        setModalVisible(true);
    };

    return (
        <ImageBackground
            source={require("../assets/junglesafaribg.jpg")}
            resizeMode="cover"
            className="flex-1"
        >
            <View className="flex-1 bg-black/40">
                <ScrollView className="flex-1 px-4 pt-24 space-y-6">
                    <View className="flex-row items-center justify-between mb-4 px-2">
                        <TouchableOpacity onPress={() => Linking.openURL("https://instagram.com/tigerindiasafari")}>
                            <Image source={require("../assets/icons/instagram.png")} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                        <Text className="text-3xl font-extrabold text-white text-center flex-1">Explore Our Jungle Safaris</Text>
                        <TouchableOpacity onPress={() => Linking.openURL("https://facebook.com")}>
                            <Image source={require("../assets/icons/facebook.png")} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-white text-base text-justify px-2">
                        Embark on a thrilling journey through India's most breathtaking wildlife destinations...
                    </Text>

                    <View className="flex-row justify-between items-start px-2">
                        <View className="space-y-3 flex-1 pr-4">
                            {safaris.map((safari, index) => (
                                <TouchableOpacity key={index} onPress={() => openSafariModal(safari)}>
                                    <Text className="text-lg font-semibold text-white">🐾 {safari}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Image
                            source={require("../assets/tiger/tigers.jpg")}
                            style={{ width: screenWidth * 0.45, height: 200, borderRadius: 10 }}
                            resizeMode="cover"
                        />
                    </View>

                    <View className="bg-yellow-100/90 p-4 rounded-lg mt-8">
                        <Text className="text-xl font-bold text-orange-800 mb-2">🌿 Ranthambore Special</Text>
                        <Text className="text-gray-900 text-base text-justify">
                            Famous for its Bengal Tigers and historic fort...
                        </Text>
                    </View>

                    <View className="items-center space-y-4 mt-6">
                        <Text className="text-xl font-bold text-yellow-300">A Glimpse into the Wild</Text>
                        <View className="flex-row items-start space-x-4">
                            <Image source={require("../assets/tiger/tiger1.jpg")} style={{ width: 300, height: 300, borderRadius: 12 }} />
                            <Text className="text-black text-sm p-4 bg-white/80 rounded-xl w-[300px] text-justify">
                                “Every roar echoes through the forest...”
                                {"\n"}
                                “Whispers of the jungle dance in the wind…”
                                {"\n"}
                                “Each paw print tells a tale of the untamed…”
                                {"\n"}
                                “The heartbeat of the wild pulses beneath the trees…”
                                {"\n"}
                                “Sunlight filters through leaves, casting shadows of legends…”
                                {"\n"}
                                “Nature watches, ancient and alive…”
                                {"\n"}
                                “Eyes in the dark, fierce and knowing…"
                                {"\n"}
                                “The jungle breathes in rhythm with the wild…”
                            </Text>
                            <Image source={require("../assets/tiger/tiger12.jpg")} style={{ width: 300, height: 300, borderRadius: 12 }} />
                        </View>
                    </View>
                </ScrollView>

                {/* Modal */}
                <Modal
                    visible={modalVisible}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View className="flex-1 bg-black/90 items-center justify-center p-4">
                        <Text className="text-xl font-bold text-white mb-2">{selectedSafari}</Text>

                        {selectedSafari && safariDetails[selectedSafari] && (
                            <ScrollView className="bg-white/90 p-4 rounded-xl w-full max-h-[70%] mb-3">
                                <Text className="text-black font-semibold text-base mb-1">🗺️ Zone Details:</Text>
                                <Text className="text-black text-sm leading-6">{safariDetails[selectedSafari].zones}</Text>

                                <Text className="mt-3 text-black font-semibold">🌅 Morning Safari:</Text>
                                <Text className="text-black text-sm">{safariDetails[selectedSafari].timings.morning}</Text>

                                <Text className="mt-2 text-black font-semibold">🌇 Evening Safari:</Text>
                                <Text className="text-black text-sm">{safariDetails[selectedSafari].timings.evening}</Text>
                            </ScrollView>
                        )}

                        {selectedSafari && safariData[selectedSafari] && (
                            <ScrollView horizontal className="mt-2 space-x-3 max-h-[200px]">
                                {safariData[selectedSafari].map((img, idx) => (
                                    <Image
                                        key={idx}
                                        source={img}
                                        style={{ width: 200, height: 200, borderRadius: 10 }}
                                        resizeMode="cover"
                                    />
                                ))}
                            </ScrollView>
                        )}

                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="mt-4 bg-yellow-500 px-6 py-2 rounded-full"
                        >
                            <Text className="text-white font-bold">Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
}
