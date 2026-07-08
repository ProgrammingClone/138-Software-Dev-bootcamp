// small utility function
export function capitalizeWords(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
