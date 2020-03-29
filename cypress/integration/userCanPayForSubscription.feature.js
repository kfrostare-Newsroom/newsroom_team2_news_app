describe("User can pay for subscription:", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/2",
      response: "fixture:specific_article_2.json"
    });
    cy.visit("/");
    cy.get("#2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
  });

  it("click in buy subscription", () => {
    cy.get("button").contains("Buy Subscription").click()
    cy.get("form[id='payment-form']").should("be.visible")
  });
});
