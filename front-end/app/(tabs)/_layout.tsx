import { Stack } from "expo-router"

export default () => {
    return (
        <Stack>
            <Stack.Screen name="app" options={{ headerShown: false }} />
            <Stack.Screen name="explore" options={{ headerShown: false }} />
        </Stack>
    )
}