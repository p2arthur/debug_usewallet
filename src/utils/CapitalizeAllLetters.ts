export function capitalizeEachWord(inputString: string): string {
  return inputString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Example usage:
const inputString = 'floating bookshelf bookshelf bookshelf';
const result = capitalizeEachWord(inputString);
console.log(result);
