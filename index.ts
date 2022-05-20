import './style.css';

import { of, map, Observable, timer, interval } from 'rxjs';

console.log('Start App');

const subscirption = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscirption.unsubscribe();
  console.log('Stop App');
}, 3000);
