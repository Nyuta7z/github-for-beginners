context("Counter main", () => {
    it("Should open app on lineslip", () => {
      cy.visit("https://lineslip-stg.azurewebsites.net/login");
    });
  });

  it("Should input", () => {
    cy.get('input').type('qwerty@qwe.qwe');
  });
