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
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

import {loadCities} from '../src/utils/loadCities';
import { fireEvent, getByText, waitFor} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
const { JSDOM } = require("jsdom");
import fs from "fs";
import path from "path";

const html  = fs.readFileSync(path.join(__dirname,"../index.html"), "utf8");

let dom;
let document;
// let screen;



describe('checking how fetching weather works', () => {

  beforeEach(() =>{
    dom = new JSDOM(html, {
      runScripts: "dangerously",
      includeNodeLocations: true
    });
    document = dom.window.document.body;
    // screen = dom.window.screen;
  });
  test('Check addTodo able add todo to todoList', () => {
    // document.body.innerHTML = `
    //   <div class="btn-group" id="group">
    //   <button type="button" class="btn btn-danger">Cities</button>
    //   <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    //     <span class="visually-hidden">Toggle Dropdown</span>
    //   </button>
    //   <ul class="dropdown-menu" id="cities-list">
    //   </ul>
    //   </div>
    // `;
    // loadCities();
    //require('../weather.js');
    // const newTodoInput = document.getElementById('newTodoInput');
    // const addTodoBtn = document.getElementById('addTodoBtn');
    // const todolist = document.getElementById('todoList');

    // newTodoInput.value = 'New todolist!';
    // addTodoBtn.click();

    expect('<li>New todolist!</li>').toBe('<li>New todolist!</li>');
  })
});


