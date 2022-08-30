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

  it("it should have item with larger border-top after click", () => {
    cy.get('[data-cy="Decks"]')
      .should("have.css", "border-top")
      .and("eq", "0px none rgb(0, 0, 0)");
    cy.get('[data-cy="Decks"]').click();
    cy.get('[data-cy="Decks"]')
      .should("have.css", "border-top")
      .and("eq", "6px solid rgb(0, 0, 0)");
  });
});
