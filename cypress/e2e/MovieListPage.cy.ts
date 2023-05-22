describe('MovieListPage component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
      cy.intercept('http://localhost:4000/movies', { fixture: 'movies.json' }).as('getMovies');
      cy.wait('@getMovies');
  });

  it('displays a list of movies', () => {
    cy.get('[data-testid="MovieListPage"]')
        .find('.movie-tile')
        .should('have.length', 5);
  });

  it('allows filtering movies by title', () => {
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

  it('should reflect search query, genre, and sortBy in URL', () => {
    cy.get('[data-testid="input-component"]').type('abc');
    cy.get('.searchForm').find('button').click();
    cy.get('[data-testid="genre-select"]').find('#Comedy').click();
    cy.get('[data-testid="sort-by-select"]').select('Title');

    cy.url().should('include', '/?genre=Comedy&search=abc&sortBy=Title');
  });

  it('should preserve query params after navigating to movie details', () => {
      cy.intercept('http://localhost:4000/movies?search=Comedy&searchBy=genres&sortBy=title&sortOrder=asc&search=abc&searchBy=title', { fixture: 'movies.json' }).as('getMovies');
      cy.intercept('http://localhost:4000/movies?search=abc&searchBy=title', { fixture: 'movies.json' }).as('getMovies');
      cy.intercept('http://localhost:4000/movies?search=Comedy&searchBy=genres&search=abc&searchBy=title', { fixture: 'movies.json' }).as('getMovies');
      cy.wait('@getMovies');

    cy.get('[data-testid="input-component"]').type('abc');
    cy.get('.searchForm').find('button').click();
    cy.get('[data-testid="genre-select"]').find('#Comedy').click();
    cy.get('[data-testid="sort-by-select"]').select('Title');
    cy.get('[data-testid="MovieListPage"]').find('.movie-tile').first().click();

    cy.url().should('include', '/movies/0');
    cy.url().should('include', '/movies/0?genre=Comedy&search=abc&sortBy=Title');
  });
});
