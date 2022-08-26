describe("Input", () => {
  it("it should render the Input", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=input--default&viewMode=story");
    cy.get('[data-cy="input"]').should("exist");
  });

  it("it should have placeholder be visible", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=input--default&viewMode=story");
    cy.get('[data-cy="input"]')
      .invoke("attr", "placeholder")
      .should("contain", "Type here..");
  });

  it("it should change input when typed", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=input--default&viewMode=story");
    cy.get('[data-cy="input"]').type("testing");
    cy.get('[data-cy="input"]').invoke("attr", "value").should("contain", "testing");
  });

  it("it should check the checkbox when clicked", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=input--checkbox&viewMode=story");
    cy.get('[data-cy="input"]').invoke("attr", "value").should("contain", "");
    cy.get('[data-cy="input"]').click();
    cy.get('[data-cy="input"]').invoke("attr", "value").should("contain", "true");
    cy.get('[data-cy="input"]').click();
    cy.get('[data-cy="input"]').invoke("attr", "value").should("contain", "");
  });

  it("it should check one radio at a time when clicked", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=input--colors&viewMode=story");
    cy.get('[data-cy="purple"]').invoke("attr", "value").should("contain", "");
    cy.get('[data-cy="green"]').invoke("attr", "value").should("contain", "");
    cy.get('[data-cy="purple"]').click();
    cy.get('[data-cy="purple"]').invoke("attr", "value").should("contain", "true");
    cy.get('[data-cy="green"]').invoke("attr", "value").should("contain", "");
    cy.get('[data-cy="green"]').click();
    cy.get('[data-cy="purple"]').invoke("attr", "value").should("contain", "");
    cy.get('[data-cy="green"]').invoke("attr", "value").should("contain", "true");
  });
});
