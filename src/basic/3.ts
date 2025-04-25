type Quantity = string | number;

let value: Quantity;
value = 'Two';
value = 2;


type Mode = 'enable' | 'disable';

function setMode(mode: Mode): void {
  if (mode === 'enable') {
    console.log('System on');
  } else {
    console.log('System off');
  }
}

 setMode('enable');

 //
 console.log(value);//  