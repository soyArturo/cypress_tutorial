describe("formas de encontrar un elemento", () => {
  it("Buscar", () => {
    cy.visit("http://automationpractice.com/index.php");
    //Get por clase
    cy.get(".search_query.form-control.ac_input").type("Hola ");
    //Get por id
    cy.get("#search_query_top").type("Como te va? ");
    //Get por name
    cy.get("[name='search_query']").type("Muy bien");
    cy.get('[placeholder="Search"]').clear();
  });
});
