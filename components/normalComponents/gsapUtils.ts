/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import gsap from 'gsap';

export function horizontalLoop(items: any[], config: any) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
    repeat: config.repeat, 
    paused: config.paused, 
    defaults: {ease: "none"}, 
    onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 100); }
  });
  
  let length = items.length,
      startX = items[0].offsetLeft,
      times: number[] = [],
      widths: number[] = [],
      xPercents: number[] = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1),
      totalWidth: number, item: any, i: number;

  gsap.set(items, { 
    xPercent: (i, target) => {
      let w = widths[i] = parseFloat(gsap.getProperty(target, "width", "px") as string);
      xPercents[i] = snap(parseFloat(gsap.getProperty(target, "x", "px") as string) / w * 100 + (gsap.getProperty(target, "xPercent") as number));
      return xPercents[i];
    }
  });

  gsap.set(items, {x: 0});
  totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * (gsap.getProperty(items[length-1], "scaleX") as number) + (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    let curX = xPercents[i] / 100 * widths[i];
    let distanceToStart = item.offsetLeft + curX - startX;
    let distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
    tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars: any = {}) {
    Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
  tl.current = () => curIndex;
  tl.progress(1, true).progress(0, true); 
  return tl;
}