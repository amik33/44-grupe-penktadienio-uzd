console.clear();

console.log('--1 uzd---------------------');

function func1 (a, b) {
    if (a < b) {
        console.log('a didesnis uz b');
    } else if (a > b) {
        console.log('b didesnis uz a');
    } 
}

func1(4, 5)

console.log('--2 uzd---------------------');

const func2 = () => {

    let array = [];
    for (let i = 1; i <= 10; i++ ) {
        array.push(Math.abs(i));
    }
    return array;
}

console.log(func2());

console.log('--3 uzd---------------------');

const func3 = () => {

    let array = [];
    for (let i = 0; i <= 10; i += 2 ) {
        array.push(Math.abs(i));
    }
    return array;
}

console.log(func3());

console.log('--4 uzd---------------------');

const func4 = () => {

    let array = [];
    for (let i = 0; i < 5; i++ ) {
        array.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
    return array;
}

console.log(func4());

console.log('--5 uzd---------------------');

let res = 0;
while (res !== 5) {
    res = Math.floor(Math.random() * 10) + 1;
    console.log(res);
}

console.log('--6 uzd---------------------');

let array = [];
const arraylength = Math.floor(Math.random() * (30 - 20 + 1) + 20);
console.log(array);
for (let i = 0; i < arraylength; i++) {
    array.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}
console.log(array);

let bign = 0;
array.filter(n => n > bign ? bign = n : bign = bign);
console.log('max: ', bign);

console.log('--7 uzd---------------------');

const func7 = () => {
    
    let array = [];

    let letter = ('A','B','C','D');

    for (let i = 0; i < 100; i++) {
       array.push(Math.floor(Math.random('A','B','C','D')));

    }

    return array;
}
console.log(func7());


  

