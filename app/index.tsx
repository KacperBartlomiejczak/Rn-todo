import { Text, View, FlatList, Modal, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from 'react-native-ui-datepicker';

import { allTasks } from "@/data/allTask";
import { getCategoryColor } from "@/utils/getCategoryColor";

import HeaderView from "@/components/headerView";
import AddTaskBtn from "@/components/addTaskBtn";
import TaskCard from "@/components/taskCard";


import {useState} from 'react'

export default function Index() {

  const [isVisible, setIsVisible] = useState(false)
  const handleVisible = () => {
    setIsVisible((lastState) => !lastState)
  }

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

        <Modal visible={isVisible} animationType="slide" presentationStyle="formSheet">
           <SafeAreaView className="">
            <Text>Add Task</Text>
            <View>
              <Text>Title</Text>
              <TextInput placeholder="Task title" />
            </View>
            <View>
              <Text>Date</Text>
              <DateTimePicker mode="single" ></DateTimePicker>
            </View>

            <Pressable onPress={handleVisible}>  
              <Text>Cancel</Text>
            </Pressable>
          </SafeAreaView> 

        </Modal>
      </SafeAreaView>
    </View>
  );
}
