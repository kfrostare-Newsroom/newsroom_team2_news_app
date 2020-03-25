describe("Base user can only ", () => {
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
      response: "fixture:specific_article.json"
    });
    cy.visit("/");
  });

  it("Not logged in can only see redacted article", () => {
    cy.get("#2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
    cy.get(".article")
      .last()
      .within(() => {
        cy.get(".spec-title").should("contain", "Toilet");
        cy.get(".spec-content.restricted").should("contain", "...");
      });
  });

  xit("Logged in can see the whole article", () => {
    before(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login.json",
        headers: {
          uid: "user@mail.com"
        }
      });
      cy.get("#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("password");
        cy.get("button")
          .contains("Submit")
          .click();
      });
    });

    cy.get("#2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
    cy.get(".article")
      .last()
      .within(() => {
        cy.get(".spec-title").should("contain", "Toilet");
        cy.get(".spec-content").should(
          "contain",
          "People are selling toilet paper to gold prices! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        );
      });
  });
});
