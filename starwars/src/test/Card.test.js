import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Card from "../components/Card";

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

it("render Card with no parameters films and set class card__type-features--off", () => {
  const PropsTypes = {
    name: "Tatooine",
    population: "2000",
    climate: "arid",
    terrain: "desert",
  };
  act(() => {
    render(<Card data={PropsTypes} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"card\\">
      <h2 class=\\"card__title\\">Tatooine</h2>
      <div class=\\"card__features\\">
        <ul class=\\"card__list\\">
          <li class=\\"card__type\\">Population: <span class=\\"card__info card__info--true \\">2000</span></li>
          <li class=\\"card__type\\">Climate: <span class=\\"card__info card__info--true \\">arid</span></li>
          <li class=\\"card__type\\">Terrain: <span class=\\"card__info card__info--true \\">desert </span></li>
          <li class=\\"card__type-features card__type-features--off\\">Features 0 films </li>
        </ul>
      </div>
    </div>"
  `);
});

it("render Card with parameters films", () => {
  const PropsTypes = {
    name: "Tatooin",
    population: "2000",
    climate: "arid",
    terrain: "desert",
    films: [1, 2, 3],
  };
  act(() => {
    render(<Card data={PropsTypes} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"card\\">
      <h2 class=\\"card__title\\">Tatooin</h2>
      <div class=\\"card__features\\">
        <ul class=\\"card__list\\">
          <li class=\\"card__type\\">Population: <span class=\\"card__info card__info--true \\">2000</span></li>
          <li class=\\"card__type\\">Climate: <span class=\\"card__info card__info--true \\">arid</span></li>
          <li class=\\"card__type\\">Terrain: <span class=\\"card__info card__info--true \\">desert </span></li>
          <li class=\\"card__type-features card__type-features--true\\">Features 3 films </li>
        </ul>
      </div>
    </div>"
  `);
});

it("render Card with parameters unknown and set class card__info--off", () => {
  const PropsTypes = {
    name: "unknown",
    population: "unknown",
    climate: "unknown",
    terrain: "unknown",
    films: [],
  };
  act(() => {
    render(<Card data={PropsTypes} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"card\\">
      <h2 class=\\"card__title\\">unknown</h2>
      <div class=\\"card__features\\">
        <ul class=\\"card__list\\">
          <li class=\\"card__type\\">Population: <span class=\\"card__info card__info--off \\">unknown</span></li>
          <li class=\\"card__type\\">Climate: <span class=\\"card__info card__info--off \\">unknown</span></li>
          <li class=\\"card__type\\">Terrain: <span class=\\"card__info card__info--off \\">unknown </span></li>
          <li class=\\"card__type-features card__type-features--off\\">Features 0 films </li>
        </ul>
      </div>
    </div>"
  `);
});
