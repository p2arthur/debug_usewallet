// https://gist.github.com/codeguy/6684588

export function normalizeString (string: string) {
  return string
    .toString()                         // Cast to string (optional)
    .normalize('NFKD')                  // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .replace( /[\u0300-\u036f]/g, '' )  // Remove accents
    .toLowerCase()                      // Convert the string to lowercase letters
    .trim()                             // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-')               // Replace spaces with -
    .replace(/[^\w\-]+/g, '')           // Remove all non-word chars
    .replace(/\_/g,'-')                 // Replace _ with -
    .replace(/\-\-+/g, '-')             // Replace multiple - with single -
    .replace(/\-$/g, '');               // Remove trailing -
}