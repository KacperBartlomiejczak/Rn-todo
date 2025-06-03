import { Pressable,  Text } from "react-native";



export default function AddTaskBtn({onVisible} : {onVisible : () => void}) {
  return (
    <Pressable
      className="w-16 h-16 bg-blue-500  rounded-full flex flex-col items-center justify-center absolute bottom-12 right-8 z-50"
      style={({pressed}) => [
        {backgroundColor: pressed ? "#1d4ed8" : "blue"},
      ]}
      android_ripple={{
        color: "#1d4ed8",
        borderless: true,
        radius: 24,
      }}
      onPress={onVisible}
    >
      <Text className="text-white text-2xl font-semibold">+</Text>
    </Pressable>
  );
}
