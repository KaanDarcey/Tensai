describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6006/iframe.html?id=navigation--default&viewMode=story");
  });
  it("it should render the Navigation", () => {
    cy.get('[data-cy="Navigation"]').should("exist");
  });

  it("it should have labels be visible", () => {
    cy.get('[data-cy="Navigation"]').contains("Study").should("be.visible");
    cy.get('[data-cy="Navigation"]').contains("Decks").should("be.visible");
    cy.get('[data-cy="Navigation"]').contains("Profile").should("be.visible");
  });
});
