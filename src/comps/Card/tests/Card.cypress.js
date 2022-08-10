describe("Button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=card--all-sizes&viewMode=story");
  });
  it("it should render the Cards", () => {
    cy.get('[data-cy="small-card"]').should("exist");
    cy.get('[data-cy="medium-card"]').should("exist");
    cy.get('[data-cy="large-card"]').should("exist");
  });

  it("it should have children content be visible", () => {
    cy.get('[data-cy="small-card"]').contains("Small sized Card component");
    cy.get('[data-cy="medium-card"]').contains("Medium sized Card component");
    cy.get('[data-cy="large-card"]').contains("Large sized Card component");
  });
});
