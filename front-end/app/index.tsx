import { Button } from "@/components/Button";
import { View, ImageBackground } from "react-native";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from '@/assets/images/background.jpg';
import { BrainCircuit } from "lucide-react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { Label } from "@/components/Label";
import Politique from "@/components/Politique";

export default function HomeScreen() {
    const [agree, setAgree] = useState(false);

    const handlePolitiqueChange = (accepted: boolean) => {
        setAgree(accepted);
    };

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <SafeAreaView className="w-full h-full bg-transparent flex flex-column items-center justify-center">
                <Text className="absolute top-16 text-2xl text-white" style={{ fontFamily: 'eth' }}>
                    <BrainCircuit color={"white"} />
                    BenchMark
                </Text>
                <View className="flex-col w-full items-center absolute bottom-10 rounded-t-3xl justify-center p-4">
                    <Politique toActivate={handlePolitiqueChange} />
                    <Button
                        disabled={!agree}
                        className="w-11/12 shadow-xl rounded-xl items-center place-self-center"
                    >
                        {agree ? (
                            <Link
                                href="/(tabs)/app"
                                style={{ fontFamily: 'roboto' }}
                                className="w-full h-full text-center"
                            >
                                Continuer
                            </Link>
                        ) : (
                            <Label className="text-black text-lg font-bold">
                                Acceptez les conditions
                            </Label>
                        )}
                    </Button>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}