describe('Counter component', () => {
  it('should render the initial value', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Count:').should('have.text', 'Count: 10')
  })

  it('should decrement the counter on clicking the decrement button', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Decrement').click()
    cy.contains('Count:').should('have.text', 'Count: 9')
  })

  it('should increment the counter on clicking the increment button', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Increment').click()
    cy.contains('Count:').should('have.text', 'Count: 11')
  })
})
