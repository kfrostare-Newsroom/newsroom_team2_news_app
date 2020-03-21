describe("user can view specific articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_index.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/1",
      response: "ixture:specific_article.json"
    })
    cy.visit("/");
  });

  it("user can navigate to article", () => {
    cy.get(".article-box").last().within(() => {
      cy.get("button").contains("Read More").click()
    });

  })
});