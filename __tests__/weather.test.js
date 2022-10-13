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
import { async } from 'regenerator-runtime';
import { renderWeather } from '../src/utils/renderWeather';
const html  = fs.readFileSync(path.join(__dirname,"../index.html"), "utf8");


const fetch = require("node-fetch");
global.fetch = fetch;
let dom;
let document;
let screen;



describe('checking how fetching weather works', () => {

  beforeEach(() =>{
    dom = new JSDOM(html, {
      runScripts: "dangerously",
      includeNodeLocations: true
    });
    document = dom.window.document.body;
    screen = document.querySelector('#cities-list');
  });
  it('should have dropdown-Items after execute loadCities', () => {

    const cities = [
      {
        id: 1,
        city: "Santa Cruz",
        lat: "-17.8",
        long: "-63.1667"
      }
    ];
    
    loadCities(cities,dom.window.document );

    expect(document.querySelector('.dropdown-item')).toBeInTheDocument();
  });

  it('should not have dropdown-Items after execute loadCities', () => {
    expect(document.querySelector('.dropdown-item')).toBeNull();
  });

  test('should return an specific city with the following coords', async() => {
    const cities = [
      {
        id: 1,
        city: "Santa Cruz de la Sierra",
        lat: "-17.8",
        long: "-63.1667"
      }
    ];

    await renderWeather(cities[0].lat, cities[0].long, dom.window.document);

   expect(dom.window.document.getElementById("city").textContent).toBe(cities[0].city);
  });

});


