describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex', function() {
  it('navigation from frontpage to specific pokemon works', function() {
    cy.visit('http://localhost:5000')
    cy.contains('diglett').click()
    cy.contains('sand veil')
  })
})