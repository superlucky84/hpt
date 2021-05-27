import jj from './module';
import './style/default.scss';

function makeTypingGame2() {
  jj();
  document.body.style.backgroundColor = 'blue';
}

function makeTypingGame() {
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  document.body.appendChild(div);
  document.body.appendChild(div2);

  console.log('km');

  document.getElementById('buttona').addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    document.getElementById('buttonk').style.backgroundColor = 'red';
  });
}
makeTypingGame();
makeTypingGame2();

if (process.env.NODE_ENV === 'development') {
  console.log('P123123', process.env.NODE_ENV);
}

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
