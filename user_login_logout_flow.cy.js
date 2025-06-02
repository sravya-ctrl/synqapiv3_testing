describe('Login & Logout user flow testcases', () => {
 it('Login with admin user', () => { 
   const requestbodyOfAdmin = {
      email: 'admin@sales-people.com',
      password: '123'
   };
   cy.request ({  
              method: 'POST',
              url: 'https://synq.atforte.com/api/login',
              body: requestbodyOfAdmin,
              failOnStatusCode: false
   }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.status).to.eq('success');
    expect(response.body.message).to.eq('Login successful');
    expect(response.body.data.user_id).to.eq(1);
    expect(response.body.data.user_role).to.eq('ADMIN');
    expect(response.body.data.user_email).to.eq('admin@sales-people.com');
    expect(response.body.data.user_fullname).to.eq('admin salespeople');
   })
})


it('Login with Project Manager user', () => {
    const requestBodyOfPM = {
        email : "pm@sales-people.com",
        password : "123"
    };
    cy.request ({
        method : 'POST',
        url: 'https://synq.atforte.com/api/login',
              body: requestBodyOfPM,
              failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq('Login successful');
        expect(response.body.data.user_id).to.eq(2);
        expect(response.body.data.user_role).to.eq('MANAGER');
        expect(response.body.data.user_email).to.eq('pm@sales-people.com');
        expect(response.body.data.user_fullname).to.eq('project manager');
    })
})
   it('Login with Agent User', () => {
    const requestBodyOfAgent = {
        email : "agent@sales-people.com",
        password : "123"
    };
    cy.request ({
        method : 'POST',
        url: 'https://synq.atforte.com/api/login',
              body: requestBodyOfAgent,
              failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Login successful');
        expect(response.body.data.user_id).to.eq(4);
        expect(response.body.data.user_role).to.eq('AGENT');
        expect(response.body.data.user_email).to.eq('agent@sales-people.com');
        expect(response.body.data.user_fullname).to.eq('sales agent');
    })
   })

   it('Login with Client user', () => {
       const requestBodyOfClient = {
        email : "kunde@sales-people.com",
        password : "123"
       };
       cy.request ({
            method : 'POST',
            url: 'https://synq.atforte.com/api/login',
            body: requestBodyOfClient,
            failOnStatusCode: false
       }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Login successful');
        expect(response.body.data.user_id).to.eq(5);
        expect(response.body.data.user_role).to.eq('CLIENT');
        expect(response.body.data.user_email).to.eq('kunde@sales-people.com');
        expect(response.body.data.user_fullname).to.eq('web user');
       })
   })

    it('Login with Mailing Operator', () => {
        const requestBodyOfQM = {
            email : "qm@sales-people.com",
            password : "123"
        };
        cy.request ({
            method : 'POST',
            url: 'https://synq.atforte.com/api/login',
            body: requestBodyOfQM,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Login successful');
            expect(response.body.data.user_id).to.eq(3);
            expect(response.body.data.user_role).to.eq('MAILINGOPERATOR');
            expect(response.body.data.user_email).to.eq('qm@sales-people.com');
            expect(response.body.data.user_fullname).to.eq('Quality Manager');
        })
    })


 })
