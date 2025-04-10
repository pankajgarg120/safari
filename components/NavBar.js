import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();

    const tabs = [
        { label: "Home", path: "/" },
        { label: "Jungle Safari", path: "/safari" },
        { label: "Hotels", path: "/hotels" },
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
    ];

    return (
        <View className="absolute top-0 left-0 w-full z-50 px-4 py-3 bg-black/40">
            <View className="flex-row flex-wrap justify-center gap-x-6 gap-y-2">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.path;
                    return (
                        <TouchableOpacity key={tab.path} onPress={() => router.push(tab.path)}>
                            <Text
                                className={`text-base font-extrabold tracking-wide ${isActive ? "text-yellow-400 underline" : "text-white"
                                    }`}
                            >
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
