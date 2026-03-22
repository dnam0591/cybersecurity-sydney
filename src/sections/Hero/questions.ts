export type QuestionType = {
  parts: string[];
  highlightIndex: number;
};

export const questions: QuestionType[] = [
  {
    parts: ['Would you know if your laptop was ', 'compromised', '?'],
    highlightIndex: 1,
  },
  {
    parts: ['Is your Wi-Fi network actually ', 'secure', '?'],
    highlightIndex: 1,
  },
  {
    parts: ['How easily could someone access your ', 'passwords', '?'],
    highlightIndex: 1,
  },
  {
    parts: ['Could a hacker control your ', 'webcam', '?'],
    highlightIndex: 1,
  },
];
