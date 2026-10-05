import Image from 'next/image';
import { cn } from '@/shared/lib';

/** 이미지/GIF/영상. src가 없으면 플레이스홀더를 렌더링합니다. */
export interface Media {
  src?: string;
  alt: string;
  type?: 'image' | 'gif' | 'video';
}

interface MediaFrameProps {
  media?: Media;
  /** 브라우저 창 크롬(상단 점 3개 + 주소창) 표시 여부 */
  browserChrome?: boolean;
  url?: string;
  className?: string;
}

export function MediaFrame({ media, browserChrome, url = 'localhost:3000', className }: MediaFrameProps) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-line bg-surface', className)}>
      {browserChrome && (
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/30" />
          </div>
          <span className="rounded bg-surface-2 px-3 py-0.5 font-mono text-[11px] text-fg-muted">{url}</span>
        </div>
      )}

      <div className="relative aspect-video">
        {media?.src ? (
          media.type === 'video' ? (
            <video src={media.src} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              unoptimized={media.type === 'gif'}
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
            />
          )
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,rgb(var(--accent-rgb)/0.18),transparent_60%)]">
            <span className="rounded border border-line bg-bg/70 px-3 py-1 font-mono text-[11px] text-fg-muted">
              {media?.alt ?? '미디어'} {media?.type && `· ${media.type.toUpperCase()}`} 삽입 영역
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
