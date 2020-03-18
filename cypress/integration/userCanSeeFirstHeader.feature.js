describe("user views menus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("displays first header header", () => {
    cy.get("h1").should("contain", "VAMOS TEAM 2");
  });
});