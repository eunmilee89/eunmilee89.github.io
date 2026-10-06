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
  /** 프레임 크기는 고정한 채 안쪽 미디어에만 효과(확대 등)를 줄 때 사용 */
  mediaClassName?: string;
}

export function MediaFrame({ media, browserChrome, url = 'localhost:3000', className, mediaClassName }: MediaFrameProps) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-line bg-surface', className)}>
      {browserChrome && (
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
          </div>
          <span className="rounded bg-surface-2 px-3 py-0.5 font-mono text-[11px] text-secondary">{url}</span>
        </div>
      )}

      <div className="relative aspect-video overflow-hidden">
        {media?.src ? (
          media.type === 'video' ? (
            <video src={media.src} autoPlay muted loop playsInline className={cn('h-full w-full object-cover', mediaClassName)} />
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              unoptimized={media.type === 'gif'}
              sizes="(max-width: 768px) 100vw, 960px"
              className={cn('object-cover', mediaClassName)}
            />
          )
        ) : (
          <div className={cn('absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent_60%)]', mediaClassName)}>
            <span className="rounded border border-line bg-background/70 px-3 py-1 font-mono text-[11px] text-secondary">
              {media?.alt ?? '미디어'} {media?.type && `· ${media.type.toUpperCase()}`} 삽입 영역
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
