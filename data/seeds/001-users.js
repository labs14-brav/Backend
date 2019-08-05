'use strict'

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {type: 'user', email: 'labs14brav-user@gmail.com', uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', mediator_declined_at: null}, // password: secret
        {type: 'admin', email: 'labs14brav-admin@gmail.com', uid: 'rkYJqWNwHVb06XFszYhQOkuU5h42', mediator_declined_at: null}, // password: secret
        {type: 'mediator', email: 'labs14brav-mediator@gmail.com', uid: '3VhJYYOASWPcC499nsrjWM1SCxF3', mediator_declined_at: null, name: 'Bill Gates', price: 20, professional_bio: 'I like to help people solve conflict', experience: '>5 years', specialization: 'Domestic', language: 'English', license: 'MD'}, // password: secret
        {type: 'mediator', email: 'labs14brav@gmail.com', uid: 'PHl15FQAA7T0PrB3YT3lTWFZ5Vx2', mediator_declined_at: null, name: 'Warren Buffet', price: 80, professional_bio: "Conflict isn't efficient", experience: '<2 years', specialization: 'Workplace', language: 'Chinese', license: 'JD'}, // password: secret
      ]);
    });
};
