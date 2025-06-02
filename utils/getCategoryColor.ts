export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "personal":
      return "#fdba74";
    case "work":
      return "#86efac";
    case "study":
      return "#93c5fd";
    default:
      return "#ffffff";
  }
};
