describe("Progressbar", () => {
  it("it should render the Progressbar", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=progressbar--low&viewMode=story"
    );
    cy.get('[data-cy="Progressbar"]').should("exist");
  });

  it("it should have count be visible", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=progressbar--low&viewMode=story"
    );
    cy.get('[data-cy="Progressbar"]').contains("10/100");
  });

  it("it should have red bar for low count", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=progressbar--low&viewMode=story"
    );
    cy.get('[data-cy="ProgressbarBar"]')
      .should("have.css", "background-color")
      .and("eq", "rgb(225, 24, 69)");
  });

  it("it should have yellow bar for medium count", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=progressbar--medium&viewMode=story"
    );
    cy.get('[data-cy="ProgressbarBar"]')
      .should("have.css", "background-color")
      .and("eq", "rgb(242, 202, 25)");
  });

  it("it should have green bar for high count", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=progressbar--complete&viewMode=story"
    );
    cy.get('[data-cy="ProgressbarBar"]')
      .should("have.css", "background-color")
      .and("eq", "rgb(135, 233, 17)");
  });
});
