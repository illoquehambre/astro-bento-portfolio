// src/lib/remark-reading-time.mjs
import readingTime from 'reading-time';

export function remarkReadingTime() {
  return (tree, file) => {
    const text = tree.children
      .filter(node => node.type === 'text')
      .map(node => node.value)
      .join(' ');
    const stats = readingTime(text);
    file.data.readingTime = stats;
  };
}
