import "@testing-library/jest-dom/extend-expect";

import { render } from "../src/listMenus";

test("When loading the page the list of menus is rendered", async () => {
  document.body.innerHTML = `<div class="main-wrapper"></div>`;

  const mainElement = document.querySelector(".main-wrapper");

  render(mainElement);

  const menuList = document.querySelector(".menu-list");
  expect(menuList).toBeInTheDocument();
});
