describe('API Testing - Emissions API', () => {
    it('should retrieve the statistics for the first product', () => {
      let firstName;
      let firstValue;
      let lastValue;
    
      //Get the list of available products from the relevant endpoint
      cy.request('GET', 'https://api.v2.emissions-api.org/api/v2/products.json')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array');
          expect(response.body).to.have.length.greaterThan(0);
        
          // Select a random product and use it to get the range of data available
          const products = response.body;
          firstName = products[0].name;
          cy.log('First Name:', firstName);
            // getting data range
          return cy.request('GET', `https://api.v2.emissions-api.org/api/v2/${firstName}/data-range.json`);
        })
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('first');
          expect(response.body).to.have.property('last');
  
          firstValue = response.body.first;
          lastValue = response.body.last;
          cy.log('First Value:', firstValue);
          cy.log('Last Value:', lastValue);
            // Using that product and the time range you got from the 2nd step, get all the
            //available statistics
          const url = `https://api.v2.emissions-api.org/api/v2/${firstName}/statistics.json?polygon=30&polygon=10&polygon=40&polygon=40&polygon=20&polygon=40&polygon=10&polygon=20&polygon=30&polygon=10&interval=day&begin=${firstValue}&end=${lastValue}&limit=100&offset=0`;
          return cy.request('GET', url);
        })
        .then((response) => {
          expect(response.status).to.equal(200);
          const statistics = response.body;
          cy.log('Statistics Response:');
          statistics.forEach((statistic, index) => {
            const value = statistic.value;
            //Check that all the properties of the value object are numbers
            cy.log(`Value ${index + 1}:`, value);
            for (const prop in value) {
              expect(Number.isFinite(value[prop])).to.be.true;
            }
          });
        });
    });
  });
  