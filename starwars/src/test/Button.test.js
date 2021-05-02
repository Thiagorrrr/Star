import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Button from "../components/Button";

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

it("render Button", () => {
  act(() => {
    render(<Button />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<button class=\\"button\\">Next</button>"`
  );
});

it("renders Button name", () => {
    const PropsTypes = {
      name: "Next",
    };
  
    act(() => {
      render(<Button />, container);
    });
  
    expect(container.querySelector(".button").textContent).toBe(
      `${PropsTypes.name}`
    );
  });