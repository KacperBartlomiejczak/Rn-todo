import { Pressable, View, Text } from "react-native";



export default function AddTaskBtn() {
  return (
    <Pressable
      className="w-16 h-16  bg-blue-500 rounded-full flex flex-col items-center justify-center absolute bottom-12 right-8 "
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#1d4ed8" : undefined,
          borderRadius: 24,
        },
      ]}
      android_ripple={{
        color: "#1d4ed8",
        borderless: true,
        radius: 24,
      }}
    >
      <Text className="text-white text-2xl font-semi-bold">+</Text>
    </Pressable>
  );
}
