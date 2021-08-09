describe("<App />", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("navigation", () => {
    it("should display recipes", () => {
      cy.get('[data-cy="search-input"]')
        .invoke("attr", "aria-label")
        .should("eq", "Search for a recipe");
      cy.get('[data-cy="search-button"]').contains("Search");
      cy.get('[data-cy="recipe-list-item"]').should("have.length", 2);
    });

    it("should display recipe details", () => {
      cy.visit("/1");

      cy.get('[data-cy="search-input"]')
        .invoke("attr", "aria-label")
        .should("eq", "Search for a recipe");
      cy.get('[data-cy="search-button"]').contains("Search");
      cy.get('[data-cy="recipe-list-item"]').should("have.length", 2);

      cy.get('[data-cy="recipe-detail-title"]').contains(
        "Cereal Ice Cream Cups"
      );
      cy.get('[data-cy="recipe-detail-description"]').contains(
        "Win the ice cream social with these customizable ice cream cups! Use with your favorite chocolate, cereal, or hard candy for an extra satisfying treat. You’ll never want to go back to plain cones again!"
      );
      cy.get('[data-cy="recipe-detail-preparation-time"]').contains(
        "Preparation time: 15 minutes"
      );
      cy.get('[data-cy="recipe-detail-produces"]').contains("6 servings");
    });
  });

  describe("desktop", () => {
    describe("search", () => {
      it("should find a recipe", () => {
        cy.get('[data-cy="search-input"]').type("Fry");
        cy.get('[data-cy="search-button"]').click();
        cy.get('[data-cy="recipe-list-item"]').should("have.length", 1);
      });
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    describe("search", () => {
      it("should find a recipe", () => {
        cy.get('[data-cy="search-input"]').type("Fry");
        cy.get('[data-cy="search-button"]').click();
        cy.get('[data-cy="recipe-list-item"]').should("have.length", 1);
      });
    });

    describe("recipe details", () => {
      it("should see the recipe details and come back to main screen", () => {
        cy.get('[data-cy="recipe-link"]').first().click();

        cy.get('[data-cy="back-button"').should("contain.text", "Back");
        cy.get('[data-cy="recipe-detail-title"').contains(
          "Cereal Ice Cream Cups"
        );
        cy.get('[data-cy="recipe-detail-description"').contains(
          "Win the ice cream social with these customizable ice cream cups! Use with your favorite chocolate, cereal, or hard candy for an extra satisfying treat. You’ll never want to go back to plain cones again!"
        );
        cy.get('[data-cy="recipe-detail-preparation-time"]').contains(
          "Preparation time: 15 minutes"
        );
        cy.get('[data-cy="recipe-detail-produces"]').contains("6 servings");

        cy.get('[data-cy="back-button"').click();

        cy.get('[data-cy="recipe-list-item"]').should("have.length", 2);
      });
    });
  });
});
