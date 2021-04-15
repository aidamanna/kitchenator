import "@testing-library/jest-dom/extend-expect";

import { render } from "../src/components/list-menus/listMenus";

test("When loading the page the list of menus is rendered", async () => {
  document.body.innerHTML = `<div class="main-wrapper"></div>`;

  render();

  const menuListElement = document.querySelector(".menu-list");
  expect(menuListElement).toBeInTheDocument();
});
