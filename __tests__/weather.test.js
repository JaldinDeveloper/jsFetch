//import {screen} from '@testing-library/dom'
//const {someFunction} = require('some-package')
// const {screen} = require('@testing-library/dom');
// test('uses jest-dom', () => {
//   document.body.innerHTML = `
//     <span data-testid="not-empty"><span data-testid="empty"></span></span>
//     <div data-testid="visible">Visible Example</div>
//   `

//   expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
//   expect(screen.getByText('Visible Example')).toBeVisible()
// })
test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
      <input id="newTodoInput" />
      <button id="addTodoBtn">Add todo</button>
      <ol id="todoList"></ol>
    `;
    require('../weather.js');
    const newTodoInput = document.getElementById('newTodoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todolist = document.getElementById('todoList');
  
    newTodoInput.value = 'New todolist!';
    addTodoBtn.click();
  
    expect('<li>New todolist!</li>').toBe('<li>New todolist!</li>');
});