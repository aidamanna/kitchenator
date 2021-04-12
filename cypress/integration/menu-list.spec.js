describe("Menu list", () => {
  it("displays planned menus", () => {
    cy.visit("/");

    cy.findByText(/Monday 22 Mar/i).should("exist");
    cy.findByText(/Tuesday 23 Mar/i).should("exist");
    cy.findByText(/Wednesday 24 Mar/i).should("exist");
  });
});
