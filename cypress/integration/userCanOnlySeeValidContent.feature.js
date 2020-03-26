describe("regular user can only ", () => {
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
      .within(() => {
        cy.get(".spec-title").should("contain", "Toilet");
        cy.get(".spec-content").should("contain", "...");
        cy.get('p').should("contain", 'This article require a premium membership.')
      })
  });

  it('Authenticated user that is NOT a SUBSCRIBER can only see redacted article', () => {
    cy.window()
      .then(window => {
        window.store.dispatch(
          {
            type: "AUTHENTICATE",
            payload: { currentUser: { email: 'thomas@craft.com', role: '' } }
          }
        )
      })
    cy.get("#2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
    cy.get(".article")
      .within(() => {
        cy.get(".spec-title").should("contain", "Toilet");
        cy.get(".spec-content").should("contain", "...");
        cy.get('p').should("contain", 'This article require a premium membership.')
      })
  });

  it('Authenticated user that is a SUBSCRIBER can se full length of article', () => {
    cy.window()
      .then(window => {
        window.store.dispatch(
          {
            type: "AUTHENTICATE",
            payload: { currentUser: { email: 'thomas@craft.com', role: 'subscriber' } }
          })
      })
    cy.get("#2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
    cy.get(".article")
      .within(() => {
        cy.get(".spec-title").should("contain", "Toilet");
      })
    cy.get(".article")
      .should("not.contain", "...")
      .and("not.contain", 'This article require a premium membership.')
  });


});
