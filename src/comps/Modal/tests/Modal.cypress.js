describe("Modal", () => {
  it("it should render the Modal", () => {
    cy.visit("http://localhost:6006/iframe.html?id=modal--add&viewMode=story");
    cy.get('[data-cy="Modal"]').should("exist");
  });

  it("it should display when isVisible is toggled", () => {
    cy.visit("http://localhost:6006/iframe.html?id=modal--add&viewMode=story");
    cy.get('[data-cy="Button"]').click();
    cy.get('[data-cy="Modal"]').should("be.visible");
  });

  it("it should have title be visible", () => {
    cy.visit("http://localhost:6006/iframe.html?id=modal--add&viewMode=story");
    cy.get('[data-cy="Button"]').click();
    cy.get('[data-cy="Modal"]').contains("Add Card");
  });

  it("it should have children be visible", () => {
    cy.visit("http://localhost:6006/iframe.html?id=modal--add&viewMode=story");
    cy.get('[data-cy="Button"]').click();
    cy.get('[data-cy="Modal"]').contains(
      "Which deck would you like to add this card to?"
    );
  });

  it("it should have a green header", () => {
    cy.visit("http://localhost:6006/iframe.html?id=modal--add&viewMode=story");
    cy.get('[data-cy="Button"]').click();
    cy.get('[data-cy="modal-header"]')
      .should("have.css", "background-color")
      .and("eq", "rgb(135, 233, 17)");
  });

  it("it should have a yellow header", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=modal--remove&viewMode=story");
    cy.get('[data-cy="modal-header"]')
      .should("have.css", "background-color")
      .and("eq", "rgb(242, 202, 25)");
  });

  it("it should have a red header", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=modal--delete&viewMode=story");
    cy.get('[data-cy="modal-header"]')
      .should("have.css", "background-color")
      .and("eq", "rgb(225, 24, 69)");
  });
});
