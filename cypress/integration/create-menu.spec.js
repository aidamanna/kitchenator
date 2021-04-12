describe("Add your menu", () => {
  it("opens add menu modal when clicking", () => {
    cy.visit("/");

    cy.findByRole("button", { name: /add your menu/i }).click();

    cy.findByPlaceholderText(/YYYY-MM-DD/i).type("2021-04-07");
    cy.findByRole("button", { name: /next/i }).click();

    // cy.findByPlaceholderText(/Lunch recipe title/i).type("Burger");
    // cy.findByPlaceholderText(/dinner recipe title/i).type("Eggs");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("button", { name: /submit/i }).click();

    // Assert the menu when developed
  });
});
