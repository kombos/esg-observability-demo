import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";

export function convertToNumber(str: string): number {
  const num: number = Number(str); // Convert to number
  return isNaN(num) ? 0 : num; // Return 0 if NaN, otherwise the number
}

export function incrementStringNumber(str: string): string {
  // Convert the string to a number
  const num: number = Number(str);

  // Check if it's a valid number, if not return "0"
  if (isNaN(num)) {
    return "0";
  }

  // Increment the number and convert back to a string
  return (num + 1).toString();
}

export function getObjectHash(obj: Record<string, any>, hashLength: number): string {
  const objString = JSON.stringify(obj);
  const hashBytes = sha256(new TextEncoder().encode(objString));
  const hash = toHex(hashBytes);
  return hash.substring(0, hashLength);
}
