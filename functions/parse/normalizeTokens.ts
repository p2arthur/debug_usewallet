export function normalizeUnit (string: string) {
  return string
    .toString()                         // Cast to string (optional)
    .normalize('NFKD')                  // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .replace( /[\u0300-\u036f]/g, '' )  // Remove accents
    .trim()                             // Remove whitespace from both sides of a string (optional)
}

export function normalizeAsset (string: string) {
  return string
    .toString()                         // Cast to string (optional)
    .trim()                             // Remove whitespace from both sides of a string (optional)
}