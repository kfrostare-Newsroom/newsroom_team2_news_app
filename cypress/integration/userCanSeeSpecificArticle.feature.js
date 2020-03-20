describe("user can view specific articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.visit("/");
  });

  it("shows article index", () => {
    cy.get(".article-headline").should("contain", "Toilet paper!")
    cy.get(".article-teaser").should("contain", "The world is running out of hope.")
    cy.get(".article-headline").should("contain", "Toilet")
    cy.get(".article-teaser").should("contain", "The new gold")
  });

  it("user can navigate to article", () => {
    cy.get(".article-headline").within(() => {
      cy.get("button").contains("Read more").click
    });
  })
});