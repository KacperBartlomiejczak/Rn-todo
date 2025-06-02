import { View, Text, Image, Pressable } from "react-native";

export default function HeaderView() {
  return (
    <View className=" flex flex-row justify-between items-center">
      <Text className="text-2xl font-bold">to.dos</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#3b82f6" : undefined,
          },
        ]}
        android_ripple={{
          color: "#3b82f6",
          radius: 24,
          foreground: true,
        }}
      >
        <Image
          source={require("@/assets/images/userProfileImage.jpg")}
          resizeMode="cover"
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
      </Pressable>
    </View>
  );
}
