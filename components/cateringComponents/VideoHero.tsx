'use client'

import React, { useEffect, useState } from 'react'

const PREVIEW_SRC =
  'https://streamable.com/e/qe5b3p?autoplay=1&muted=1&loop=1'
const MAIN_SRC = 'https://streamable.com/e/0atbtr?autoplay=1'

type VideoHeroProps = {
  isPlaying: boolean
  onPlay: () => void
}

const VideoHero = ({ isPlaying, onPlay }: VideoHeroProps) => {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(hover: none), (pointer: coarse)')
    const update = () => {
      const hasTouch = media.matches || navigator.maxTouchPoints > 0
      setIsTouch(hasTouch)
    }

    update()

    if (media.addEventListener) {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  return (
    <div className="relative w-full aspect-video lg:aspect-auto lg:h-screen overflow-hidden bg-black">
      {!isPlaying && (
        <button
          type="button"
          className={`absolute inset-0 z-10 ${
            isTouch ? 'flex items-center justify-center' : 'cursor-pointer'
          }`}
          aria-label="Play video"
          onClick={onPlay}
        >
          {isTouch && (
            <span className="rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white">
              Play
            </span>
          )}
        </button>
      )}

        <iframe
          title={isPlaying ? 'Main video' : 'Preview video'}
        src={isPlaying ? MAIN_SRC : PREVIEW_SRC}
        className={`absolute inset-0 h-full w-full ${
          isPlaying ? '' : 'pointer-events-none'
        }`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default VideoHero
