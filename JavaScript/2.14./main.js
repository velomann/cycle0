//задача 1 
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }


// решение

// if(browser === 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser === 'Chrome'){
//     alert( 'Okay we support these browsers too' );
//   } else if (browser === 'Firefox'){
//     alert( 'Okay we support these browsers too' );
//   } else if (browser === 'Safari') {
//     alert( 'Okay we support these browsers too' );
//   } else if (browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }


//задача 2

// const number = +prompt('Введите число между 0 и 3', '');

// // if (number === 0) {
// //   alert('Вы ввели число 0');
// // }

// // if (number === 1) {
// //   alert('Вы ввели число 1');
// // }

// // if (number === 2 || number === 3) {
// //   alert('Вы ввели число 2, а может и 3');
// // }

//Решение
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
    
//     case 0: 
//     alert("вы ввели 0");
//     break; 
    
//     case 1: 
//     alert('Вы ввели число 1');
//     break; 

//     default: 
//     alert('Вы ввели число 2, а может и 3');
//     break; 
