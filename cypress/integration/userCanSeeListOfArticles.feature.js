describe("Index path:", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.visit("/");
  });

  it("shows list of articles", () => {
    cy.get(".article-headline").should("contain", "Free Article")
    cy.get(".article-teaser").should("contain", "The world is running out of hope.")
    cy.get(".article-headline").should("contain", "Premium Article")
    cy.get(".article-teaser").should("contain", "The new gold")
  });
});