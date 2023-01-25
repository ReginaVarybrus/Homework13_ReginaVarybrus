'use strict';

console.log('=====Task 1=====');

const textHello = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hallo!'), 3000);
  });

  textHello
    .then(value => console.log(value));

console.log('=====Task 2=====');

function deleay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 4000);
    });
  }

async function funcDelay () {
    console.log('first call');
    await deleay();
    console.log('second call');
}

funcDelay();

console.log('=====Task 3=====');

function createDice () {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.round(Math.random() * 10);
        
        if (randomNumber < 6) {
            reject();
        }
        else {
            resolve();
        }
    });
}

const result = createDice();

Promise.all([result, result, result])
    .then(() => {
      console.log('You are lucky');
    })
    .catch(() => {
        console.log('Not today');
    });

