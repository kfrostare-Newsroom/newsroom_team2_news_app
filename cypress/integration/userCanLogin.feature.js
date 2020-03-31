describe("User authenticates", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json",
    });

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:user_login.json",
      headers: {
        uid: "user@mail.com"
      }
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/validate_token?uid=user@mail.com",
      response: "fixture:user_login.json",
      headers: {
        uid: "user@mail.com"
      }
    });
    cy.visit("/");
  });

  it("show a login button and then a login form", () => {
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Sign in")
        .click();
    });
    cy.get("#message").should("contain", "Hello user@mail.com");
  });
});
