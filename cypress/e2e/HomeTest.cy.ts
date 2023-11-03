describe("template spec", () => {
  it("should render Hero headline", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-test-id="headline"]')
      .should("exist")
      .should("have.text", "Find, book, or rent a car - quickly and easily!");
  });

  it("should scroll on button click", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Explore Cars").click();

    cy.get('[data-test-id="discover"]').should(($element) => {
      const element = $element[0] as HTMLElement;
      const rect = element.getBoundingClientRect();
      expect(rect.top).to.be.at.least(0);
      expect(rect.bottom).to.be.at.most(Cypress.config("viewportHeight"));
    });
  });
});

describe("Search Test", () => {
  it("should search for values", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="input1"]').type("BMW");

    cy.get('[data-test-id="test-search-BMW"]').click();

    cy.get('[data-test-id="search-button"]').click();

    cy.url().should("include", "?manufacturer=");
  });
});
