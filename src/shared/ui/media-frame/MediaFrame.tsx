import { cn } from '@/shared/lib';
import { MediaImage } from './MediaImage';
import { MediaPlaceholder } from './MediaPlaceholder';

/** 이미지. src가 없으면 플레이스홀더를 렌더링합니다. */
export interface Media {
  src?: string;
  alt: string;
}

interface MediaFrameProps {
  media?: Media;
  /** 브라우저 창 크롬(상단 점 3개 + 주소창) 표시 여부 */
  browserChrome?: boolean;
  /** 주소창에 표시할 URL. 없으면 주소창을 생략합니다. */
  url?: string;
  className?: string;
  /** 프레임 크기는 고정한 채 안쪽 미디어에만 효과(확대 등)를 줄 때 사용 */
  mediaClassName?: string;
}

export function MediaFrame({ media, browserChrome, url, className, mediaClassName }: MediaFrameProps) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-line bg-surface', className)}>
      {browserChrome && (
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
          </div>
          {url && <span className="rounded bg-surface-2 px-3 py-0.5 font-mono text-[11px] text-secondary">{url}</span>}
        </div>
      )}

      <div className="relative aspect-video overflow-hidden">
        {media?.src ? (
          <MediaImage src={media.src} alt={media.alt} className={mediaClassName} />
        ) : (
          <MediaPlaceholder label={`${media?.alt ?? '이미지'} 삽입 영역`} className={mediaClassName} />
        )}
      </div>
    </div>
  );
}
