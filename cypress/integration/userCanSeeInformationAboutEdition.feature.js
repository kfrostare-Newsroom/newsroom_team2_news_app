const stubLocation = require("../support/stubLocation");

describe("User can see the current edition based on location", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/sessions",
      response: { session: { location: { latitude: 59.33, longitude: 18.06 }, edition: "Stockholm" } }
    });
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 59.33, longitude: 18.06 })
    );
  });

  it("see what edition we are displaying", () => {
    cy.get("#header").should("contain", "Stockholm edition");
  });
});
