import { fromEvent, startWith, withLatestFrom } from 'rxjs';  
import { map, switchMap, takeUntil } from 'rxjs/operators';

// Import stylesheets
import './style.css';
const root = document.getElementById('app');
const slider = document.createElement('div');
slider.classList.add('slider');
const pin = document.createElement('div');
pin.classList.add('pin');
slider.append(pin);
root.append(slider);

const from = 20;
const to = 200;
const step = 20;
let sliderWidth: number;

createNotches();
createDragNDrop();

function createNotches() {
  const notches = document.createElement('div');
  notches.classList.add('notches');
  slider.append(notches);
  for (let i = from; i <= to; i = i+step) {
    const notch = document.createElement('div');
    notch.classList.add('notch');
    notches.append(notch);
  } 
}


/** 
 * Сорри, тут будет сложно, написал на rxjs, 
 * потому что терпеть не могу такое писать нативно 
 **/
function createDragNDrop() {
  const resize$ = fromEvent(window, 'resize').pipe(startWith(1));

  // Динамические оффсет и ширина
  const offset$ = resize$.pipe(map(() => slider.offsetLeft));
  const width$ = resize$.pipe(map(() => slider.clientWidth), map(v => v - 2));

  // У меня есть событие mousedown, mousemove, mouseup
  const mousedown$ = fromEvent<MouseEvent>(slider, 'mousedown');
  const mousemove$ = fromEvent<MouseEvent>(window, 'mousemove');
  const mouseup$ = fromEvent<MouseEvent>(window, 'mouseup');
  
  // При нажатии на mousedown я должен начать слушать mousemove
  const drag$ = mousedown$.pipe(
    // Но при событии mouseup прекратить слушать mousemove
    switchMap(() => mousemove$.pipe(takeUntil(mouseup$))),
  );

  drag$.pipe(
    withLatestFrom(offset$, width$), 
    // Меряем, делаем движение по отчечкам, отсекаем мин и макс
    map(([e, offset, width]) => {
      const position = e.clientX - offset;
      const notchCount = width / ((to - from) / step );
      let results = Math.round(position / notchCount) * notchCount;
      results = Math.max(0, results);
      results = Math.min(width, results);

      return results;
    })
  )
  // Обновляем положение пина
  .subscribe((pos) => {
    console.log(pos);
    pin.style.transform = `translate(${pos}px)`;
  });

}