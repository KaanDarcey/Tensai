describe("Button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=button--all-kinds&viewMode=story", {timeout: 30000});
  });
  it('it should render the buttons', () => {
    cy.get('[data-cy="primary-button"]').should("exist");
    cy.get('[data-cy="secondary-button"]').should("exist");
    cy.get('[data-cy="action-button"]').should("exist");
    cy.get('[data-cy="success-button"]').should("exist");
    cy.get('[data-cy="warning-button"]').should("exist");
    cy.get('[data-cy="danger-button"]').should("exist");
    cy.get('[data-cy="close-button"]').should("exist");
    cy.get('[data-cy="link-button"]').should("exist");
  })

  it('it should have labels be visible', () => {
    cy.get('[data-cy="primary-button"]').contains("Learn");
    cy.get('[data-cy="secondary-button"]').contains("Study");
    cy.get('[data-cy="action-button"]').contains("Quiz");
    cy.get('[data-cy="success-button"]').contains("Add");
    cy.get('[data-cy="warning-button"]').contains("Check Answer");
    cy.get('[data-cy="danger-button"]').contains("Delete");
    cy.get('[data-cy="close-button"]').contains("Close");
    cy.get('[data-cy="link-button"]').contains("Link");
  })

  it('it should have proper styling based on kind', () => {
    cy.get('[data-cy="primary-button"]').should('have.css', 'border', '1px solid rgb(0, 87, 233)')
    cy.get('[data-cy="secondary-button"]').should('have.css', 'border', '1px solid rgb(237, 236, 232)')
    cy.get('[data-cy="action-button"]').should('have.css', 'border', '1px solid rgb(255, 0, 189)')
    cy.get('[data-cy="success-button"]').should('have.css', 'border', '1px solid rgb(135, 233, 17)')
    cy.get('[data-cy="warning-button"]').should('have.css', 'border', '1px solid rgb(242, 202, 25)')
    cy.get('[data-cy="danger-button"]').should('have.css', 'border', '1px solid rgb(225, 24, 69)')
    cy.get('[data-cy="close-button"]').should('have.css', 'border', '1px solid rgb(255, 255, 255)')
    cy.get('[data-cy="link-button"]').should('have.css', 'border', '0px none rgb(255, 0, 189)')

    cy.get('[data-cy="primary-button"]').should('have.css', 'box-shadow', 'rgb(9, 50, 120) 3px 3px 0px 0px')
    cy.get('[data-cy="secondary-button"]').should('have.css', 'box-shadow', 'rgb(0, 0, 0) 3px 3px 0px 0px')
    cy.get('[data-cy="action-button"]').should('have.css', 'box-shadow', 'rgb(161, 8, 122) 3px 3px 0px 0px')
    cy.get('[data-cy="success-button"]').should('have.css', 'box-shadow', 'rgb(87, 151, 11) 3px 3px 0px 0px')
    cy.get('[data-cy="warning-button"]').should('have.css', 'box-shadow', 'rgb(193, 162, 23) 3px 3px 0px 0px')
    cy.get('[data-cy="danger-button"]').should('have.css', 'box-shadow', 'rgb(131, 4, 33) 3px 3px 0px 0px')
    cy.get('[data-cy="close-button"]').should('have.css', 'box-shadow', 'rgb(0, 0, 0) 3px 3px 0px 0px')
    cy.get('[data-cy="link-button"]').should('have.css', 'box-shadow', 'none')
  })

  it('it should have border when clicked', () => {
    cy.get('[data-cy="primary-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="secondary-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="action-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="success-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="warning-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="danger-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="close-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="link-button"]').click().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
  })

  it('it should have border when focused', () => {
    cy.get('[data-cy="primary-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="secondary-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="action-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="success-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="warning-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="danger-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="close-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
    cy.get('[data-cy="link-button"]').focus().should('have.css', 'border', '1px solid rgb(0, 0, 0)')
  })

  it('it should have no box shadow when animated', () => {
    cy.get('[data-cy="primary-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="secondary-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="action-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="success-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="warning-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="danger-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="close-button"]').focus().should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px')
    cy.get('[data-cy="link-button"]').focus().should('have.css', 'box-shadow', 'none')
  })
});
