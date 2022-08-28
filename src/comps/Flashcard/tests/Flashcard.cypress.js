describe("Flashcard", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=flashcard--default&viewMode=story"
    );
  });
  it("it should render the Flashcard", () => {
    cy.get('[data-cy="Flashcard"]').should("exist");
  });

  it("it should have kanji and kana be visible, and translation not be visible", () => {
    cy.get('[data-cy="Flashcard"]').contains("てんさい").should("be.visible");
    cy.get('[data-cy="Flashcard"]').contains("天才").should("be.visible");
    cy.get('[data-cy="Flashcard"]').contains("genius").should("not.be.visible");
  });

  it("it should have translation be visible after click", () => {
    cy.get('[data-cy="Flashcard"]').contains("genius").should("not.be.visible");
    cy.get('[data-cy="Flashcard"]').click();
    cy.get('[data-cy="Flashcard"]').contains("genius").should("be.visible");
  });
});
