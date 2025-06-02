import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { allTasks } from "@/data/allTask";
import { getCategoryColor } from "@/utils/getCategoryColor";

import HeaderView from "@/components/headerView";
import AddTaskBtn from "@/components/addTaskBtn";
import TaskCard from "@/components/taskCard";

export default function Index() {
  return (
    <View>
      <SafeAreaView className="relative h-full p-4">
        <HeaderView />
        <AddTaskBtn />

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
    </View>
  );
}
