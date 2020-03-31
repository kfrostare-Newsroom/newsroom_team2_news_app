const stubLocation = require("../support/stubLocation");

describe("User can see the current edition based on location", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 59.33, longitude: 18.06 })
    );
  });

  it("shows list of articles", () => {
    cy.get(".article-headline").should("contain", "Free Article");
    cy.get(".article-teaser").should(
      "contain",
      "The world is running out of hope."
    );
    cy.get(".article-headline").should("contain", "Premium Article");
    cy.get(".article-teaser").should("contain", "The new gold");
  });
});
