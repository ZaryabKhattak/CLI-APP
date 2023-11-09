const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'What is your name? ',
  'What is your favorite color? ',
  'What is your favorite car? '
];

let a = 0;

const answers = [];

function askNextQuestion() {
  if (a < questions.length) {
    const question = questions[a];
    rl.question(question, (answer) => {
      answers.push(answer);
      a++;
      askNextQuestion();
    });
  } else {
    rl.close();
  }
}

askNextQuestion();

rl.on('close', () => {

    console.log(`Nice to meet you, ${answers[0]}! So Your favorite color is ${answers[1]}!, and your favorite car is ${answers[2]}.`);
});
