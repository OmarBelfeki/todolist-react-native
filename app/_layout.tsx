import { Stack } from "expo-router"

export default function Routing () {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: "Home"}}/>
            <Stack.Screen name="create" options={{title: "Create Todo"}}/>
        </Stack>
    )
}
