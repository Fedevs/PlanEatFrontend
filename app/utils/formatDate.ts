export default function formatDate(dateOriginal: string): string {
  // Create a Date instance from the original date
  const date: Date = new Date(dateOriginal);

  // Extract the day, month, and year from the date
  const day: string = date.getDate().toString().padStart(2, "0");
  const month: string = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months in JavaScript are zero-based
  const year: number = date.getFullYear();

  // Build the formatted date string "DD-MM-YYYY"
  const formattedDate: string = `${day}/${month}/${year}`;

  return formattedDate;
}
