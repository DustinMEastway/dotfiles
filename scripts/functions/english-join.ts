/** Join @see words together with commas and `&` signs where appropriate. */
export function englishJoin(words: string[]): string {
  words = words.filter((word) => word);

  if (words.length < 1) {
    return '';
  } else if (words.length < 2) {
    return words[0];
  }

  return (
    words.slice(0, words.length - 1).join(', ')
    + ((words.length > 2) ? ',' : '')
    + ' & '
    + words[words.length - 1]
  );
}
