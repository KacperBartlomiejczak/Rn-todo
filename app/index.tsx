import { Text, View, FlatList, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { allTasks } from "@/data/allTask";
import { getCategoryColor } from "@/utils/getCategoryColor";

import HeaderView from "@/components/headerView";
import AddTaskBtn from "@/components/addTaskBtn";
import TaskCard from "@/components/taskCard";

import { useState } from "react";
import CreateTaskModal from "@/components/createTaskModal";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible((lastState) => !lastState);
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 relative p-4">
        <HeaderView />
        <AddTaskBtn onVisible={handleVisible} />

        <FlatList
          data={allTasks}
          renderItem={({ item }) => (
            <TaskCard
              name={item.name}
              date={item.date}
              desc={item.description}
              color={getCategoryColor(item.category)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          className="mt-5"
        />
      </SafeAreaView>
      <CreateTaskModal isVisible={isVisible} onVisible={handleVisible} />
    </View>
  );
}
