describe("user views menus", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays first header header", () => {
    cy.get("h1").should("contain", "Urban Living");
  });
});