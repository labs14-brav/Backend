'use strict'

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {type: 'user', email: 'labs14brav-user@gmail.com', uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', mediator_declined_at: null}, // password: secret
        {type: 'admin', email: 'labs14brav-admin@gmail.com', uid: 'rkYJqWNwHVb06XFszYhQOkuU5h42', mediator_declined_at: null}, // password: secret
        {type: 'mediator', email: 'labs14bravmediator@gmail.com', uid: '3VhJYYOASWPcC499nsrjWM1SCxF3', mediator_declined_at: null, name: 'Bill Gates', price: 20, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Domestic', language: 'English', license: 'MD'}, // password: secret
        {type: 'mediator', email: 'labs14brav@gmail.com', uid: 'PHl15FQAA7T0PrB3YT3lTWFZ5Vx2', mediator_declined_at: null, name: 'Warren Buffet', price: 80, professional_bio: "Conflict isn't efficient", experience: '<2 years', specialization: 'Workplace', language: 'Chinese', license: 'JD'}, // password: secret
        {type: 'mediator', email: 'fake1@gmail.com', uid: '1234562347890110', mediator_declined_at: null, name: 'Susan', price: 10, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Domestic,Eldercare', language: 'English,Spanish', license: 'MD'},
        {type: 'mediator', email: 'fake2@gmail.com', uid: '12345234673489010', mediator_declined_at: null, name: 'Tom O`Malley', price: 15, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Domestic', language: 'Chinese', license: 'MD'},
        {type: 'mediator', email: 'fake3@gmail.com', uid: '1234562347890610', mediator_declined_at: null, name: 'Frankenstein', price: 20, professional_bio: 'I like to help people solve conflict', experience: '2-5 years', specialization: 'Eldercare', language: 'Spanish', license: 'JD'},
        {type: 'mediator', email: 'fake4@gmail.com', uid: '12345243607789010', mediator_declined_at: null, name: 'Godzilla', price: 25, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Commercial', language: 'English', license: 'MD'},
        {type: 'mediator', email: 'fake5@gmail.com', uid: '1234539426789010', mediator_declined_at: null, name: 'Tom Brady', price: 30, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Workplace', language: 'English', license: 'JD'},
        {type: 'mediator', email: 'fake6@gmail.com', uid: '12345223436789010', mediator_declined_at: null, name: 'Lebron James', price: 35, professional_bio: 'I like to help people solve conflict', experience: '2-5 years', specialization: 'Penal,Workplace', language: 'English', license: 'MD'},
        {type: 'mediator', email: 'fake7@gmail.com', uid: '12345284346789010', mediator_declined_at: null, name: 'Britney Spears', price: 40, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Other', language: 'Chinese', license: 'MD'},
        {type: 'mediator', email: 'fake8@gmail.com', uid: '123452956346789410', mediator_declined_at: null, name: 'Christina Aguilera', price: 45, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Landlord/Tenant"', language: 'Chinese', license: 'JD'},
        {type: 'mediator', email: 'fake9@gmail.com', uid: '12345245346789010', mediator_declined_at: null, name: 'Madonna', price: 50, professional_bio: 'I like to help people solve conflict', experience: '2-5 years', specialization: 'Domestic,Workplace', language: 'English,Chinese', license: 'MD'},
        {type: 'mediator', email: 'fake10@gmail.com', uid: '1234236567839010', mediator_declined_at: null, name: 'Elton John', price: 55, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Domestic', language: 'English,Spanish', license: 'MD'},
        {type: 'mediator', email: 'fake11@gmail.com', uid: '123476556789010', mediator_declined_at: null, name: 'Bob Dylan', price: 60, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Domestic', language: 'Spanish', license: 'JD'},
        {type: 'mediator', email: 'fake12@gmail.com', uid: '123452367890810', mediator_declined_at: null, name: 'Jimmy Dean', price: 65, professional_bio: 'I like to help people solve conflict', experience: '2-5 years', specialization: 'Workplace', language: 'English', license: 'MD'},
        {type: 'mediator', email: 'fake13@gmail.com', uid: '123457653246789010', mediator_declined_at: null, name: 'Marlon Brando', price: 70, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Eldercare', language: 'English,Spanish', license: 'MD'},
        {type: 'mediator', email: 'fake14@gmail.com', uid: '12345376789010', mediator_declined_at: null, name: 'Laurence Olivier', price: 75, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Commercial', language: 'English', license: 'MD'},
        {type: 'mediator', email: 'fake15@gmail.com', uid: '12345643789010', mediator_declined_at: null, name: 'Charles Chaplin', price: 80, professional_bio: 'I like to help people solve conflict', experience: '2-5 years', specialization: 'Workplace', language: 'Spanish', license: 'MD'},
        {type: 'mediator', email: 'fake16@gmail.com', uid: '12345236789010', mediator_declined_at: null, name: 'Lucille Ball', price: 85, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Domestic', language: 'English', license: 'MD'},
        {type: 'mediator', email: 'fake17@gmail.com', uid: '12345678908610', mediator_declined_at: null, name: 'Marilyn Monroe', price: 90, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Domestic', language: 'English,Spanish', license: 'MD'},
        {type: 'mediator', email: 'fake18@gmail.com', uid: '12345456789010', mediator_declined_at: null, name: 'Audrey Hepburn', price: 95, professional_bio: 'I like to help people solve conflict', experience: '2-5 years', specialization: 'Workplace', language: 'English', license: 'MD'},
        {type: 'mediator', email: 'fake19@gmail.com', uid: '1234586536789010', mediator_declined_at: null, name: 'Bette Davis', price: 100, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Eldercare', language: 'Chinese', license: 'MD'},
        {type: 'mediator', email: 'fake20@gmail.com', uid: '123451346789010', mediator_declined_at: null, name: 'Greta Garbo', price: 105, professional_bio: 'I like to help people solve conflict', experience: '<2 years', specialization: 'Commercial', language: 'Spanish', license: 'MD'}, // password: secret
      ]);
    });
};
