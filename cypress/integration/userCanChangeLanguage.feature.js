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

  it("shows list of languages", () => {
    cy.get("#dropdown-menu")
      .should("contain", "Language")
      .click();
    cy.wait(1000);
    cy.get("#english").should("contain", "English")
    cy.get("#swedish").should("contain", "Svenska")
    cy.get("#spanish").should("contain", "Español")
    
  });
});