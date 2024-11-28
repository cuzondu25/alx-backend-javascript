// Basic integration testing
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('returns correct status code', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('returns correct results', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  });
});

describe('GET /not-found', () => {
  const url = 'http://localhost:7865/not-found';

  it('returns correct status code', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('returns the correct cart id', (done) => {
    const validId = 12;
    request(`${baseUrl}/${validId}`, (err, res, body) => {
      expect(body).to.equal(`Payment methods for cart ${validId}`);
      done();
    })
  });

  it('correct path/id not provided', (done) => {
    const invalidId = 'hello';
    request(`${baseUrl}/${invalidId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  })
});

describe('Login page', () => {
  const baseUrl = 'http://localhost:7865';
  it('responds with welcome message for valid user', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'jane_doe' }
    };

    request(options, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome jane_doe');
      done();
    });
  });

  it('responds with default message for empty userName', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true
      // No body sent intentionally to test default behavior
    };

    request(options, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome '); // Should handle empty userName gracefully
      done();
    });
  });
});

describe('Available payments page', () => {
  const baseUrl = 'http://localhost:7865';
  it('responds with available payment methods', (done) => {
    const options = {
      url: `${baseUrl}/available_payments`,
      method: 'GET',
      json: true
    };

    request(options, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

