describe('MovieListPage component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movies');
  });

  it('displays a list of movies', () => {
    cy.intercept('http://localhost:4000/movies', { fixture: 'movies.json' }).as('getMovies');
    cy.wait('@getMovies');
    cy.get('[data-testid="MovieListPage"]')
        .find('.movie-tile')
        .should('have.length', 5);
  });

  it('allows filtering movies by title', () => {
    cy.intercept(
        'http://localhost:4000/movies',
        { fixture: 'movies.json' }
    ).as('getMovies');
    cy.wait('@getMovies');

    cy.get('[data-testid="MovieListPage"]')
        .find('input[type="text"]')
        .type('Movie5');

    cy.intercept(
        'http://localhost:4000/movies?search=Movie5&searchBy=title',
        { fixture: 'movie5.json' }
    ).as('getMovie5');
    cy.get('.searchForm')
        .find('button')
        .click();

    cy.wait('@getMovie5');
    cy.get('[data-testid="MovieListPage"]')
        .find('.movie-tile')
        .should('have.length', 1);
  });
});
