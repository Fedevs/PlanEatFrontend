/**
 * Truncate a string to a specified maximum length and append ellipsis if needed.
 *
 * @param {string} str - The input string to be truncated.
 * @param {number} maxLength - The maximum length allowed for the string.
 * @returns {string} - The truncated string with ellipsis if needed.
 */
export default function truncateString(str: string, maxLength: number): string {
  /**
   * Check if the length of the input string is less than or equal to the
   * specified maximum length. If true, return the original string.
   */
  if (str.length <= maxLength) {
    return str;
  }

  /**
   * If the length of the string exceeds the maximum length, truncate it and
   * append three dots as ellipsis to indicate that the string has been truncated.
   */
  return `${str.substring(0, maxLength - 3)}...`;
}
