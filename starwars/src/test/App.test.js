import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "../components/App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render App with no parameters", () => {
  act(() => {
    render(<App />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"container\\">
      <div class=\\"container__bg \\"> </div>
      <main>
        <div class=\\"card\\">
          <h2 class=\\"card__title\\"></h2>
          <div class=\\"card__features\\">
            <ul class=\\"card__list\\">
              <li class=\\"card__type\\">Population: <span class=\\"card__info card__info--true \\"></span></li>
              <li class=\\"card__type\\">Climate: <span class=\\"card__info card__info--true \\"></span></li>
              <li class=\\"card__type\\">Terrain: <span class=\\"card__info card__info--true \\"> </span></li>
              <li class=\\"card__type-features card__type-features--off\\">Features 0 films </li>
            </ul>
          </div>
        </div><button class=\\"button\\">Next</button>
      </main>
    </div>"
  `);
});
