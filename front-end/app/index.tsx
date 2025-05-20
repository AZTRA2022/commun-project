import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-red-500 h-screen w-full absolute bottom-0 items-center justify-center" >
            <Text className="text-white" >Hello world</Text>
        </SafeAreaView>
    );
}
