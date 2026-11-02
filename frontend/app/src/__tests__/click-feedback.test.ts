import { playClickSound, shouldPlayClickFor } from "../click-feedback";

describe("button click feedback", () => {
  beforeEach(() => { document.body.innerHTML = '<main id="app"></main>'; });
  afterEach(() => { document.body.innerHTML = ""; });

  test("recognizes nested native buttons and accessible Pressables", () => {
    const app = document.getElementById("app")!;
    app.innerHTML = '<button><span>Export</span></button>' +
      '<div role="button">Forecast</div><div role="link">Repository</div>';

    expect(shouldPlayClickFor(app.querySelector("span"))).toBe(true);
    expect(shouldPlayClickFor(app.querySelector('[role="button"]'))).toBe(true);
    expect(shouldPlayClickFor(app.querySelector('[role="link"]'))).toBe(true);
  });

  test("ignores disabled controls and non-button interactions", () => {
    const app = document.getElementById("app")!;
    app.innerHTML = '<button disabled>Export</button>' +
      '<div role="button" aria-disabled="true">Train</div>' +
      '<input type="file"><select><option>Model</option></select>';

    expect(shouldPlayClickFor(app.querySelector("button"))).toBe(false);
    expect(shouldPlayClickFor(app.querySelector('[role="button"]'))).toBe(false);
    expect(shouldPlayClickFor(app.querySelector("input"))).toBe(false);
    expect(shouldPlayClickFor(app.querySelector("option"))).toBe(false);
    expect(shouldPlayClickFor(null)).toBe(false);
  });

  test("ignores buttons outside the application", () => {
    const button = document.createElement("button");
    document.body.appendChild(button);
    expect(shouldPlayClickFor(button)).toBe(false);
  });

  test("never throws when the browser has no Web Audio support", () => {
    expect(() => playClickSound()).not.toThrow();
  });
});
