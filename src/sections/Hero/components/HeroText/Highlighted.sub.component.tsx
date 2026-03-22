type HighlightTextProps = {
  parts: string[];
  highlightIndex: number;
};

export function HighlightText({ parts, highlightIndex }: HighlightTextProps) {
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            i === highlightIndex ? 'gradient-text font-bold mr-2' : 'mr-2'
          }>
          {part}
        </span>
      ))}
    </span>
  );
}