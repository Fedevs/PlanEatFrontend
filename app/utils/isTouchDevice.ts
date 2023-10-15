/***
 * Checks if the device is a touch device
 * @returns boolean - True if the device is a touch device, false otherwise
 ***/
export default function isTouchDevice(): boolean {
  const maxTouchCondition =
    navigator.hasOwnProperty("maxTouchPoints") && navigator.maxTouchPoints > 0;

  return "ontouchstart" in window || maxTouchCondition;
}
