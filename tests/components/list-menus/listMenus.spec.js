import "@testing-library/jest-dom/extend-expect";

import { render } from "../../../src/components/list-menus/listMenus";

describe("List Menus render", () => {
  it("loads the list of programmed menus", async () => {
    document.body.innerHTML = `<div class="main-wrapper"></div>`;

    render();

    const menuListElement = document.querySelector(".menu-list");
    expect(menuListElement).toBeInTheDocument();
  });
});
