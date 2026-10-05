import { Fragment } from 'react';

interface RichTextProps {
  text: string;
  className?: string;
}

/** `**강조**` 구문을 액센트 컬러로 렌더링하는 경량 텍스트 컴포넌트 */
export function RichText({ text, className }: RichTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <p className={className}>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-accent">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </p>
  );
}
