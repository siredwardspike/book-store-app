import { Stack } from "expo-router";

export function RoutLayout(){
    return (
        <Stack >
            <Stack.Screen name="users/(tabs)">
            </Stack.Screen>
            <Stack.Screen name="account/login"></Stack.Screen>
            <Stack.Screen name="account/signup"></Stack.Screen>
        </Stack>
    )
}