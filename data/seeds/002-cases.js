'use strict'

exports.seed = function(knex) {
  return knex('cases').del()
    .then(function () {
      return knex('cases').insert([
        {id: 1, user_email: 'labs14brav-user@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Seeking reparations for property damages.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {id: 2, user_email: 'labs14brav-user@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Conflict with client contract.', dispute_category: 'Workplace', parties_involved: 'labs14brav@gmail.com'},
      ]);
    });
};
