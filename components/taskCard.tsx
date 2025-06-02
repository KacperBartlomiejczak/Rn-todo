import { useState } from "react";
import { View, Pressable, Text } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

interface taskCardProps {
  name: string;
  date: Date;
  desc: string;
  color?: string;
}

export default function TaskCard({ name, date, desc, color }: taskCardProps) {
  const [isTaskDone, setIsTaskDone] = useState(false);

  return (
    <View
      className={`rounded-xl p-4 flex gap-3 mb-5`}
      style={{ backgroundColor: color }}
    >
      <View className="flex flex-row justify-between items-center">
        <Text className="text-xl font-bold capitalize">{name}</Text>
        <Text>{date.toLocaleDateString()}</Text>
      </View>
      <View className="flex flex-row justify-around items-center gap-5">
        <Text className="w-[87%] text-base/5">{desc}</Text>
        <BouncyCheckbox size={28} isChecked={isTaskDone} fillColor="#3b82f6" />
      </View>
    </View>
  );
}
