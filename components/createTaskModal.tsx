import { Modal, View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker from "react-native-date-picker";

import InputTask from "./inputTask";

import { useState } from "react";

interface CreateTaskProps {
  isVisible: boolean;
  onVisible: () => void;
}

export default function CreateTaskModal({
  isVisible,
  onVisible,
}: CreateTaskProps) {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const openModalHandler = () => {
    setIsDateModalOpen(true);
  };

  return (
    <>
      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={onVisible}
        transparent={true}
      >
        <View className="h-full flex justify-end items-center">
          <SafeAreaView className=" bg-white p-4 min-h-[45%]">
            <Text className="text-2xl font-bold mb-4">Create Task</Text>
            <View className="flex gap-2 mb-4">
              <InputTask labelName="Name" placeholder="Task Name" />
            </View>
            <View className="flex flex-row justify-center items-center gap-2 mb-4 px-1">
              <View className="flex w-1/2">
                <InputTask
                  labelName="Date"
                  placeholder="Pick Date"
                  onPress={openModalHandler}
                />
              </View>
              <View className="flex w-1/2">
                <InputTask
                  labelName="Category"
                  placeholder="Pick Category"
                  editable={false}
                />
              </View>
            </View>
            <View className="flex gap-2 mb-4">
              <Text className="font-light text-base">Description</Text>
              <TextInput
                placeholder="Task Description"
                multiline
                numberOfLines={4}
                className="px-2 py-4 border-2 border-blue-500 rounded-xl"
              />
            </View>

            <View className="flex flex-row justify-end items-end gap-4 mt-2">
              <Pressable onPress={onVisible} className="p-4">
                <Text className="text-red-600">Cancel</Text>
              </Pressable>
              <Pressable className="p-4 bg-blue-500 rounded-xl">
                <Text className="text-white">Add Task</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </View>
      </Modal>

    
    </>
  );
}
