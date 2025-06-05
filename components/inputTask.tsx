import { Text, View, TextInput } from "react-native";

interface inputTaskProps {
  labelName: string;
  placeholder: string;
  editable?: boolean;
  onPress?: () => void;
  onChange?: (text: string) => void;
}

export default function InputTask({
  labelName,
  placeholder,
  editable = true,
  onPress,
  onChange,
}: inputTaskProps) {
  return (
    <>
      <Text className="font-1 font-light text-base">{labelName}</Text>
      <TextInput
        className={"px-2 py-4 border-2  border-blue-500 rounded-xl"}
        placeholder={placeholder}
        editable={editable}
        onPress={onPress}
        onChangeText={(text) => onChange?.(text)}
      />
    </>
  );
}
