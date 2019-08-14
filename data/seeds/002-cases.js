'use strict'

exports.seed = function(knex) {
  return knex('cases').del()
    .then(function () {
      return knex('cases').insert([
        {user_email: 'labs14brav@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Seeking reparations for property damages.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14brav@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Conflict with client contract.', dispute_category: 'Workplace', parties_involved: 'labs14brav@gmail.com'},
      ]);
    });
};
