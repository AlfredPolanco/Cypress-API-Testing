describe('First Post for API', () => {
  it('create user using API', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/users',
      body:
          {
            "name":"morpheus",
            "job":"leader"
          }
    }).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body).to.have.property('createdAt');
    });
  })
});