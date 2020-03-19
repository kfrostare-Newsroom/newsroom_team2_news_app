describe("user views menus", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("views list of articles", () => {
    cy.get(".article-headline").should("contain", "Article Headline")
    cy.get(".article-teaser").should("contain", "Article teaser...")
  });
});