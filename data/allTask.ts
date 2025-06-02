import { allTaskTypes } from "@/types/interface";

export const allTasks: allTaskTypes[] = [
  {
    id: 1,
    name: "task 1",
    date: new Date("24-09-2025"),
    category: "personal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget purus diam. Cras ornare sollicitudin mi, quis sagittis nisl sollicitudin ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    isDone: false,
  },
  {
    id: 2,
    name: "task 2",
    date: new Date("24-09-2025"),
    category: "work",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget purus diam. Cras ornare sollicitudin mi, quis sagittis nisl sollicitudin ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    isDone: false,
  },
  {
    id: 3,
    name: "task 2",
    date: new Date("24-09-2025"),
    category: "study",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget purus diam. Cras ornare sollicitudin mi, quis sagittis nisl sollicitudin ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    isDone: false,
  },
];
