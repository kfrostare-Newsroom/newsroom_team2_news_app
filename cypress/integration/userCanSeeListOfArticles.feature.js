describe("user views menus", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.visit("/");
  });

  it("views list of articles", () => {
    cy.get(".article-headline").should("contain", "Coronavirus")
    cy.get(".article-teaser").should("contain", "The World's governments cannot manage it")
  });
});