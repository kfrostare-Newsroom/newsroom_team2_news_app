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
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/subscriptions",
      response: { status: "paid" }
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
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Sign in")
        .click();
      cy.wait(1000);
    });
    cy.get("#2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
  });

  it("click in buy subscription", () => {
    cy.get("button")
      .contains("Buy Subscription")
      .click();
    cy.wait(1000);
    cy.get("form[id='payment-form']").should("be.visible");
    cy.get('iframe[name^="__privateStripeFrame5"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="cardnumber"]')
        .type("4242424242424242", { delay: 10 });
    });
    cy.get('iframe[name^="__privateStripeFrame6"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="exp-date"]')
        .type("0425", { delay: 10 });
    });
    cy.get('iframe[name^="__privateStripeFrame7"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="cvc"]')
        .type("575", { delay: 10 });
    });
    cy.get("button")
      .contains("Submit Payment")
      .click();
    cy.wait(1000);
    cy.get("#success-message").should(
      "contain",
      "Congratulations you are now a subscriber!"
    );
    cy.get("button")
      .contains("To The News!")
      .click();
    cy.get(".article-headline").should("contain", "Free Article");
    cy.get(".article-teaser").should(
      "contain",
      "The world is running out of hope."
    );
  });
});
