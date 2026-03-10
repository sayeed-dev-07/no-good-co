'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

type SplitTarget = 'lines' | 'words';

type CreateSplitTextRevealOptions = {
  element: HTMLElement;
  splitType: string;
  target: SplitTarget;
  trigger?: HTMLElement;
  start?: string;
  immediateThreshold?: number;
  splitOptions?: Partial<ConstructorParameters<typeof SplitText>[1]>;
  fromVars: gsap.TweenVars;
  toVars: gsap.TweenVars;
};

const isInImmediateRange = (element: HTMLElement, threshold: number) => {
  const rect = element.getBoundingClientRect();
  const viewportBottom = window.innerHeight * threshold;

  return rect.top <= viewportBottom && rect.bottom >= 0;
};

export const createSplitTextReveal = ({
  element,
  splitType,
  target,
  trigger,
  start = 'clamp(top 95%)',
  immediateThreshold = 0.95,
  splitOptions,
  fromVars,
  toVars,
}: CreateSplitTextRevealOptions) => {
  const split = new SplitText(element, {
    type: splitType,
    mask: 'lines',
    ...splitOptions,
  });

  const targets = target === 'lines' ? split.lines : split.words;

  gsap.set(element, { visibility: 'visible' });
  gsap.set(targets, fromVars);

  const tween = gsap.to(targets, {
    ...toVars,
    paused: true,
    overwrite: true,
  });

  const triggerElement = trigger ?? element;

  let scrollTrigger: ScrollTrigger | null = null;

  if (isInImmediateRange(triggerElement, immediateThreshold)) {
    tween.play(0);
  } else {
    scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start,
      once: true,
      onEnter: () => tween.play(0),
    });
  }

  return () => {
    scrollTrigger?.kill();
    tween.kill();
    split.revert();
  };
};
