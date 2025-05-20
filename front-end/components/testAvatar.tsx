import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar";

const TestAvatar = ({ size }: { size: number }) => {
    return (
        <View className='w-max h-max ' >
            <Avatar alt="Avatar" style={{ width: size, height: size }} className="rounded-full">
                <AvatarImage style={{ width: size, height: size }} className="rounded-full"
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
                    }}
                />
                <AvatarFallback>
                    <Text>UN</Text>
                </AvatarFallback>
            </Avatar>
        </View>
    )
}

export default TestAvatar