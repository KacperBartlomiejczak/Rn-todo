import {
  Text,
  View,
  FlatList,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { allTasks } from "@/data/allTask";
import { getCategoryColor } from "@/utils/getCategoryColor";

import HeaderView from "@/components/headerView";
import AddTaskBtn from "@/components/addTaskBtn";
import TaskCard from "@/components/taskCard";
import InputTask from "@/components/inputTask";

import { useState } from "react";
import CreateTaskModal from "@/components/createTaskModal";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible((lastState) => !lastState);
  };

  return (
    <View>
      <SafeAreaView className="relative h-full p-4">
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
        <CreateTaskModal isVisible={isVisible} onVisible={handleVisible} />
      </SafeAreaView>
    </View>
  );
}
