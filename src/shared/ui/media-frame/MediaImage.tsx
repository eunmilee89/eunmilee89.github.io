'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/shared/lib';
import { MediaPlaceholder } from './MediaPlaceholder';

type LoadStatus = 'loading' | 'loaded' | 'error';

const ERROR_LABEL = '이미지를 불러오지 못했습니다';

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function MediaImage({ src, alt, className }: MediaImageProps) {
  const [status, setStatus] = useState<LoadStatus>('loading');

  if (status === 'error') {
    return <MediaPlaceholder label={ERROR_LABEL} className={className} />;
  }

  const isLoading = status === 'loading';

  return (
    <>
      {isLoading && <div className="absolute inset-0 bg-surface-2 motion-safe:animate-pulse" aria-hidden />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 960px"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={cn('object-cover transition-opacity duration-300 motion-reduce:transition-none', isLoading && 'opacity-0', className)}
      />
    </>
  );
}
