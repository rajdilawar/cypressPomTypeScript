describe('API Tests', () => {
    let accessToken = 'aa7c249d67627d8ada1a7b6cbaae42fb6f1aec7c46e948d8e7852aec535a114b';
  
    it('should fetch users with authentication token', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
          Authorization: accessToken,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);

        // for (const xyz in response.body) {
        //     cy.log(`${xyz}: ${response.body.map(user => user.name)}`);
        //   }
    
        if (response.body && response.body.length >0) {
          const names = response.body.map(user => user.name);
          //using for in loop
        //   for (let x in names) {
        //     cy.log(names[x]);
        //   }
         names.forEach(name => {
            cy.log(name);
         })
        } else {
          cy.log("Invalid response body format or no data available.");
        }
      });
    });
  });
  