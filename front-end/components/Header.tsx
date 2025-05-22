import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { BellRing, ScanFace } from "lucide-react-native";
import TestAvatar from './testAvatar';
const Header = () => {
    return (
        <View className="flex-row absolute z-20 top-12  justify-between w-full p-4">
            <View className="w-max justify-start flex-col " >
                <Text className="text-sm text-zinc-500 " >Good morning...</Text>
                <Text className="font-bold" >Abraham Yujin!👋</Text>
            </View>
            <View className="w-max flex-row items-center gap-3 " >
                <ScanFace color={"lime"} />
                <TouchableOpacity className="rounded-full w-12 h-12 items-center justify-center" >
                    <BellRing size={24} color="#000" />
                </TouchableOpacity>
                <TestAvatar url={null} size={40} />
            </View>
        </View>
    )
}

export default Header