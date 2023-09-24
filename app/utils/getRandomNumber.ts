export default function getRandomNumber(upTo: number): number {
  // Generate a random number between 0 (inclusive) and upTo (exclusive)
  const randomNumber = Math.floor(Math.random() * upTo);
  return randomNumber;
}
