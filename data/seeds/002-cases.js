'use strict'

exports.seed = function(knex) {
  return knex('cases').del()
    .then(function () {
      return knex('cases').insert([
        {user_email: 'labs14brav@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Seeking reparations for property damages.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14brav@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Conflict with client contract.', dispute_category: 'Workplace', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14brav@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Seeking reparations for property damages.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14brav-user@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Confict with co-worker.', dispute_category: 'Workplace', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14brav-user@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: 'Seeking refund with used car.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14bravmediator@gmail.com', user_uid: '3fV324Vr3vPmoDz0z4jhjvEzmcj2', description: 'Harassment claim with Boss.', dispute_category: 'Workplace', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14bravmediator@gmail.com', user_uid: '3fV324Vr3vPmoDz0z4jhjvEzmcj2', description: 'Seeking contract termination.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14bravmediator@gmail.com', user_uid: '3fV324Vr3vPmoDz0z4jhjvEzmcj2', description: 'Gradmother is receiving negligent service at nursing home.', dispute_category: 'Eldercare', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14bravmediator@gmail.com', user_uid: '3fV324Vr3vPmoDz0z4jhjvEzmcj2', description: 'Client wants to pay less than contracted amount.', dispute_category: 'Commercial', parties_involved: 'labs14brav@gmail.com'},
        {user_email: 'labs14bravmediator@gmail.com', user_uid: '3fV324Vr3vPmoDz0z4jhjvEzmcj2', description: 'Problem with owed benefits.', dispute_category: 'Workplace', parties_involved: 'labs14brav@gmail.com'},

      ]);
    });
};
