describe("Dropdown", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=dropdown--default&viewMode=story"
    );
  });
  it("it should render the dropdown", () => {
    cy.get('[data-cy="dropdown"]').should("exist");
  });

  it("it should have label be visible", () => {
    cy.get('[data-cy="dropdown"]').contains("Dropdown");
  });

  it("it should open/close on click and display/hide the list items", () => {
    cy.contains("Apple").not();
    cy.contains("Banana").not();
    cy.contains("Orange").not();
    cy.get('[data-cy="dropdown"]').click();
    cy.contains("Apple");
    cy.contains("Banana");
    cy.contains("Orange");
    cy.get('[data-cy="dropdown"]').click();
    cy.contains("Apple").not();
    cy.contains("Banana").not();
    cy.contains("Orange").not();
  });

  it("it should update label after making a selection", () => {
    cy.contains("Dropdown");
    cy.contains("Apple").not();
    cy.get('[data-cy="dropdown"]').click();
    cy.contains("Apple").click();
    cy.contains("Apple");
    cy.get('[data-cy="dropdown"]').not();
  });
});
