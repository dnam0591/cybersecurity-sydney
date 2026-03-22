import { useEffect, useState } from 'react';
import { HighlightText } from './Highlighted.sub.component';
import { questions, type QuestionType } from '../../questions';

function shuffleArray(arr: QuestionType[]): QuestionType[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function HeroText() {
  const [shuffled, setShuffled] = useState<QuestionType[]>([]);
  const [index, setIndex] = useState(0);

  const sentence = 'Join cybersecurity to learn essential skills.';
  const words = sentence.split(' ');

  useEffect(() => {
    setShuffled(shuffleArray(questions));
  }, []);

  useEffect(() => {
    if (index >= 4) return;

    const timer = setTimeout(() => {
      setIndex(prev => {
        if (prev >= 4) return prev;
        return prev + 1;
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  const showCTA = index >= 5;

  return (
    <h1 className="text-white font-space-mono text-center text-4xl mx-4.5 md:text-6xl md:mx-6 lg:max-w-350 lg:mx-12.5 lg:text-8xl">
      {showCTA || !shuffled[index] ?
        <p className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-3 max-w-5xl mx-auto">
          {words.map((word, i) => (
            <span key={i} className="">
              {word}
            </span>
          ))}
        </p>
      : <HighlightText
          parts={shuffled[index].parts}
          highlightIndex={shuffled[index].highlightIndex}
        />
      }
    </h1>
  );
}
