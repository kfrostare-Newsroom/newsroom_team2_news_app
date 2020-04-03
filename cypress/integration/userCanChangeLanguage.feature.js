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

  it('changes to swedish when I tell it to', () => {
    cy.get("#dropdown-menu")
      .should("contain", "Language")
      .click();
    cy.wait(1000);
    cy.get("#swedish").click()
    cy.get("#tagline").should("contain", "Din källa för inspiration och harmoni i arbetslivet.") 
  });

  it('changes to spanish when I tell it to', () => {
    cy.get("#dropdown-menu")
      .should("contain", "Language")
      .click();
    cy.wait(1000);
    cy.get("#spanish").click()
    cy.get("#tagline").should("contain", "Fuente de inspiración laboral para jóvenes profesionales.") 
  });

  it('changes to english when I tell it to', () => {
    cy.get("#dropdown-menu")
      .should("contain", "Language")
      .click();
    cy.wait(1000);
    cy.get("#english").click()
    cy.get("#tagline").should("contain", "A source of work / life inspiration for young professionals.") 
  });
});