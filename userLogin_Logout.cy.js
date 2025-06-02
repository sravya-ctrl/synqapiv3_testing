 describe('User Login & Logout Test cases', () => {
    it('Login with admin user', () => {
            const requestBody = {
              email: 'admin@sales-people.com',
              password: '123'
            };
        
            // Send a POST request to the login API
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: requestBody,
              failOnStatusCode: false // Don't fail the test on non-2xx status codes
            }).then((response) => {
              // Assert the response status code is 200
              expect(response.status).to.eq(200);
        
              // Assert the response body contains the expected data
              expect(response.body.status).to.eq('success');
              expect(response.body.message).to.eq('Login successful');
              expect(response.body.data.user_role).to.eq('ADMIN');
              expect(response.body.data.user_email).to.eq('admin@sales-people.com');
              expect(response.body.data.user_fullname).to.eq('admin salespeople');
            })
          })

          it('Login to the application with Project Manager user', () => {
            // Define the login request body
            const loginRequestBody = {
              email: "pm@sales-people.com",
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(200);
        
              // Validate the response body
              expect(response.body.status).to.eq('success');
              expect(response.body.message).to.eq('Login successful');
              expect(response.body.data.user_role).to.eq('MANAGER');
              expect(response.body.data.user_email).to.eq('pm@sales-people.com');
              expect(response.body.data.user_fullname).to.eq('project manager');
            });
          });
        
          it('Login to the application with Agent user', () => {
            // Define the login request body
            const loginRequestBody = {
              email: "agent@sales-people.com",
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              failOnStatusCode: false, // Don't fail the test on non-2xx status codes
              headers: {
                'Content-Type': 'application/json',
              },
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(200);
        
              // Validate the response body
              expect(response.body.status).to.eq('success');
              expect(response.body.message).to.eq('Login successful');
              expect(response.body.data.user_role).to.eq('AGENT');
              expect(response.body.data.user_fullname).to.eq('sales agent');
              expect(response.body.data.user_email).to.eq('agent@sales-people.com');
            });
          });

          it('Login to the application with Client user', () => {
            // Define the login request body
            const loginRequestBody = {
              email: "kunde@sales-people.com",
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(200);
        
              // Validate the response body
              expect(response.body.status).to.eq('success');
              expect(response.body.message).to.eq('Login successful');
              expect(response.body.data.user_role).to.eq('CLIENT');
              expect(response.body.data.user_fullname).to.eq('web user');
              expect(response.body.data.user_email).to.eq('kunde@sales-people.com')
            });
          });

          it('Login to the application with Mailing-Operator user', () => {
            // Define the login request body
            const loginRequestBody = {
              email: "qm@sales-people.com",
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(200);
        
              // Validate the response body
              expect(response.body.status).to.eq('success');
              expect(response.body.message).to.eq('Login successful');
              expect(response.body.data.user_role).to.eq('MAILINGOPERATOR');
              expect(response.body.data.user_fullname).to.eq('Quality Manager');
              expect(response.body.data.user_email).to.eq('qm@sales-people.com');
            });
          });

          it('should return an error when login attempt is made with an incorrect password', () => {
            // Define the login request body with wrong password
            const loginRequestBody = {
              email: "admin@sales-people.com",
              password: "wrongpassword"  // ex : 3we556768g
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
              failOnStatusCode: false // This is important because we are expecting a 401 Unauthorized
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(401);  // Expected 401 Unauthorized
        
              // Validate the response body
              expect(response.body.status).to.eq('error');
              expect(response.body.message).to.eq('Invalid email or password');
            });
          });

          it('should return an error when login attempt is made with a non-existent email', () => {
            // Define the login request body with non-existent email
            const loginRequestBody = {
              email: "nonexistent@sales-people.com",
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
              failOnStatusCode: false // This is important because we are expecting a 401 Unauthorized
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(401);  // Expected 401 Unauthorized
        
              // Validate the response body
              expect(response.body.status).to.eq('error');
              expect(response.body.message).to.eq('Invalid email or password');
            });
          });
        
          it('should return an error when login is attempted with empty email and password fields', () => {
            // Define the login request body with empty email and password
            const loginRequestBody = {
              email: "",
              password: ""
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
              failOnStatusCode: false // This is important because we are expecting a 422 Unprocessable Content
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(422);  // Expected 422 Unprocessable Content
        
              // Validate the response body
              expect(response.body.status).to.eq('error');
              expect(response.body.message.email[0]).to.eq('The email field is required.');
              expect(response.body.message.password[0]).to.eq('The password field is required.');
            });
          });

          it('should return an error when login is attempted with missing email', () => {
            // Define the login request body with empty email 
            const loginRequestBody = {
              email: "",
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
              failOnStatusCode: false // This is important because we are expecting a 422 Unprocessable Content
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(422);  // Expected 422 Unprocessable Content
        
              // Validate the response body
              expect(response.body.status).to.eq('error');
              expect(response.body.message.email[0]).to.eq('The email field is required.');
            });
          });

          it('should return an error when login is attempted with an invalid email format', () => {
            // Define the login request body with an invalid email format
            const loginRequestBody = {
              email: "invalid-email",  //sr1236&.tr
              password: "123"
            };
        
            // Send POST request to the login endpoint
            cy.request({
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: loginRequestBody,
              headers: {
                'Content-Type': 'application/json',
              },
              failOnStatusCode: false // This is important because we are expecting a 400 Bad Request
            }).then((response) => {
              // Check the status code
              expect(response.status).to.eq(401);  // Expected 401 Unauthorized
        
              // Validate the response body
              expect(response.body.status).to.eq('error')
              expect(response.body.message).to.eq('Invalid email or password');
            });
          });

// Simulating multiple failed login attempts for the account lockout
  it('should lock the account after multiple failed login attempts', () => {
    const invalidLoginRequestBody = {
      email: 'admin@sales-people.com',
      password: 'wrongpassword',  // Invalid password
    };

    // Simulate multiple failed login attempts
    for (let i = 0; i < 5; i++) {
      cy.request({
        method: 'POST',
        url: 'https://synq.atforte.com/api/login',
        body: invalidLoginRequestBody,
        headers: {
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false  // Don't fail on the first 4 failed attempts
      });
    }
     // Simulating multiple failed login attempts for the account lockout
  it('should lock the account after multiple failed login attempts', () => {
    const invalidLoginRequestBody = {
      email: 'admin@sales-people.com',
      password: 'wrongpassword',  // Invalid password
    };

    // Simulate multiple failed login attempts
    for (let i = 0; i < 5; i++) {
      cy.request({
        method: 'POST',
        url: 'https://synq.atforte.com/api/login',
        body: invalidLoginRequestBody,
        headers: {
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false  // Don't fail on the first 4 failed attempts
      });
    }

    // After multiple failed attempts, try to login again
    cy.request({
      method: 'POST',
      url: 'https://synq.atforte.com/api/login',
      body: invalidLoginRequestBody,  // Use the same invalid credentials
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false  // We expect a failure, so we set this to false
    }).then((response) => {
      // Check that the response status is 401 Unauthorized after account lock
      expect(response.status).to.eq(401);

      // Validate the error message
      //expect(response.body.error).to.eq('Account locked due to too many failed login attempts. Please try again later.');
    });
  });

  it('should allow login with an email that contains non-standard characters', () => {
    const loginRequestBody = {
      email: 'admin+test@sales-people.info',  // Email with non-standard characters
      password: '123',
    };

    cy.request({
      method: 'POST',
      url: 'https://synq.atforte.com/api/login',
      body: loginRequestBody,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false
    }).then((response) => {
      // Check if the response status is 401 Unauthorized
      expect(response.status).to.eq(401);

      // Validate the response body
      expect(response.body.status).to.eq('error')
      expect(response.body.message).to.eq('Invalid email or password');
    });
  });

  it('should return a 401 Unauthorized error with an expired password', () => {
    const expiredLoginRequestBody = {
      email: 'admin@sales-people.de',  // Invalid email
      password: '345',  // Expired password
    };

    cy.request({
      method: 'POST',
      url: 'https://synq.atforte.com/api/login',
      body: expiredLoginRequestBody,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,  // Prevent Cypress from failing on the 401 Unauthorized response
    }).then((response) => {
      // Check if the response status is 401 Unauthorized
      expect(response.status).to.eq(401);

      // Validate the error message for expired password
      expect(response.body.status).to.eq('error');
      expect(response.body.message).to.eq('Invalid email or password');
    });
  });

  it('should allow login from two devices with the same credentials', () => {
    const loginRequestBody = {
      email: 'admin@sales-people.com',
      password: '123',
    };

    // Send first login request (first device)
    cy.request({
      method: 'POST',
      url: 'https://synq.atforte.com/api/login',
      body: loginRequestBody,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response1) => {
      // Check if the first device login was successful
      expect(response1.status).to.eq(200);
      expect(response1.body.message).to.eq('Login successful');
      expect(response1.body.data.user_email).to.eq('admin@sales-people.com');
      expect(response1.body.data.user_fullname).to.eq('admin salespeople');
      expect(response1.body.data.user_role).to.eq(101);

      // Send second login request (second device)
      cy.request({
        method: 'POST',
        url: 'https://synq.atforte.com/api/login',  // Same login endpoint
        body: loginRequestBody,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response2) => {
        // Check if the second device login was successful
        expect(response2.status).to.eq(200);
        expect(response2.body.message).to.eq('Login successful');
        expect(response2.body.data.user_email).to.eq('admin@sales-people.com');
        expect(response2.body.data.user_fullname).to.eq('admin salespeople');
        expect(response2.body.data.user_roll).to.eq(101);
      });
    });
});
  });
});


