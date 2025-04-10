import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
    ActivityIndicator,
    Alert,
} from "react-native";
import { useRouter } from "expo-router";
import emailjs from "emailjs-com";

emailjs.init("6aamT4ejL9S1BLXqV0dt2"); // Initialize your public key once

export default function ContactPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [personalRequest, setPersonalRequest] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [enableSafari, setEnableSafari] = useState(true); // safari is checked by default
    const [enableHotel, setEnableHotel] = useState(false);

    const [selectedSafaris, setSelectedSafaris] = useState([]);
    const [selectedHotels, setSelectedHotels] = useState([]);

    const safariOptions = ["Jhalana", "Ranthambore", "Sariska", "Jawai", "Kumbhalgarh", "Tiger Safari", "Chambal Safari"];
    const hotelOptions = ["3 Star", "4 Star", "5 Star"];

    const toggleSelection = (item, list, setter) => {
        if (list.includes(item)) {
            setter(list.filter(i => i !== item));
        } else {
            setter([...list, item]);
        }
    };

    const handleSubmit = async () => {
        if (!mobile) {
            Platform.OS === "web"
                ? alert("Mobile number is required")
                : Alert.alert("Mobile number is required");
            return;
        }

        setIsLoading(true);

        const safariText = enableSafari && selectedSafaris.length ? selectedSafaris.join(", ") : "Not selected";
        const hotelText = enableHotel && selectedHotels.length ? selectedHotels.join(", ") : "Not selected";

        const templateParams = {
            from_name: name || "Guest",
            from_mobile: mobile,
            from_email: email || "Not provided",
            preferred_safari: safariText,
            preferred_hotel: hotelText,
            personal_request: personalRequest || "None",
        };

        try {
            if (Platform.OS === "web") {
                const emailjs = require("emailjs-com");

                await emailjs.send(
                    "service_9clzhhr",    // Replace with your actual EmailJS service ID
                    "template_bhd8gfc",   // Replace with your actual EmailJS template ID
                    templateParams,
                    "Rb-zMQQpin8on6q8I"     // Replace with your EmailJS public key (user ID)
                )

                router.push("/thankyou");
            } else {
                alert("This feature works on web only.");
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            Platform.OS === "web"
                ? alert("Failed to send. Try again later.")
                : Alert.alert("Failed to send. Try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView className="flex-1 bg-white" contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}>
            <View className="w-full px-4 pt-24 max-w-md">
                <Text className="text-2xl font-extrabold text-green-800 text-center mb-6">Contact Us</Text>

                {/* Name */}
                <Text className="text-gray-700 font-semibold mb-1">Full Name</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
                />

                {/* Mobile */}
                <Text className="text-gray-700 font-semibold mb-1">Mobile Number *</Text>
                <TextInput
                    value={mobile}
                    onChangeText={setMobile}
                    placeholder="Enter your mobile number"
                    keyboardType="phone-pad"
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
                />

                {/* Email */}
                <Text className="text-gray-700 font-semibold mb-1">Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
                />

                {/* Safari Section */}
                <TouchableOpacity
                    onPress={() => setEnableSafari(!enableSafari)}
                    className="flex-row items-center mb-2"
                >
                    <View className={`w-5 h-5 mr-2 border rounded ${enableSafari ? 'bg-green-700' : 'border-gray-400'}`} />
                    <Text className="text-lg font-semibold">Safari</Text>
                </TouchableOpacity>

                {enableSafari && (
                    <View className="ml-6 mb-4">
                        {safariOptions.map(option => (
                            <TouchableOpacity
                                key={option}
                                onPress={() => toggleSelection(option, selectedSafaris, setSelectedSafaris)}
                                className="flex-row items-center mb-2"
                            >
                                <View className={`w-4 h-4 mr-2 border rounded ${selectedSafaris.includes(option) ? 'bg-green-700' : 'border-gray-400'}`} />
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* Hotel Section */}
                <TouchableOpacity
                    onPress={() => setEnableHotel(!enableHotel)}
                    className="flex-row items-center mb-2 mt-4"
                >
                    <View className={`w-5 h-5 mr-2 border rounded ${enableHotel ? 'bg-green-700' : 'border-gray-400'}`} />
                    <Text className="text-lg font-semibold">Hotel</Text>
                </TouchableOpacity>

                {enableHotel && (
                    <View className="ml-6 mb-4">
                        {hotelOptions.map(option => (
                            <TouchableOpacity
                                key={option}
                                onPress={() => toggleSelection(option, selectedHotels, setSelectedHotels)}
                                className="flex-row items-center mb-2"
                            >
                                <View className={`w-4 h-4 mr-2 border rounded ${selectedHotels.includes(option) ? 'bg-green-700' : 'border-gray-400'}`} />
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* Personal Request */}
                <Text className="text-gray-700 font-semibold mb-1 mt-4">Any Personal Request</Text>
                <TextInput
                    value={personalRequest}
                    onChangeText={setPersonalRequest}
                    placeholder="Write anything you'd like to mention"
                    multiline
                    numberOfLines={4}
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
                />

                {/* Submit Button */}
                <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={isLoading}
                    className="bg-green-800 py-3 rounded-lg"
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text className="text-white text-center font-bold text-base">Submit</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
