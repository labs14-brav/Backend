'use strict'

exports.seed = function(knex) {
  return knex('invoices').del()
    .then(function () {
      return knex('invoices').insert([
        {case_id: 1, mediator_id: 3, amount: 150, hours: 2,},
        {case_id: 1, mediator_id: 3, amount: 200, hours: 4,},
        {case_id: 1, mediator_id: 3, amount: 500, hours: 6,},
        {case_id: 2, mediator_id: 3, amount: 150, hours: 2,},
        {case_id: 2, mediator_id: 3, amount: 200, hours: 3,},
        {case_id: 2, mediator_id: 3, amount: 400, hours: 4,},
        {case_id: 3, mediator_id: 3, amount: 175, hours: 2,},
        {case_id: 3, mediator_id: 3, amount: 200, hours: 2,},
        {case_id: 3, mediator_id: 3, amount: 150, hours: 2,},
        {case_id: 4, mediator_id: 3, amount: 300, hours: 2,},
        {case_id: 4, mediator_id: 3, amount: 500, hours: 2,},
        {case_id: 4, mediator_id: 3, amount: 80, hours: 2,},
        {case_id: 5, mediator_id: 3, amount: 75, hours: 2,},
        {case_id: 5, mediator_id: 3, amount: 199, hours: 2,},
        {case_id: 5, mediator_id: 3, amount: 200, hours: 2,},
        {case_id: 6, mediator_id: 4, amount: 175, hours: 2,},
        {case_id: 6, mediator_id: 4, amount: 140, hours: 2,},
        {case_id: 6, mediator_id: 4, amount: 250, hours: 2,},
        {case_id: 7, mediator_id: 4, amount: 85, hours: 2,},
        {case_id: 7, mediator_id: 4, amount: 100, hours: 2,},
        {case_id: 7, mediator_id: 4, amount: 215, hours: 2,},
        {case_id: 8, mediator_id: 4, amount: 75, hours: 2,},
        {case_id: 8, mediator_id: 4, amount: 90, hours: 2,},
        {case_id: 8, mediator_id: 4, amount: 150, hours: 2,},
        {case_id: 9, mediator_id: 4, amount: 120, hours: 2,},
        {case_id: 9, mediator_id: 4, amount: 400, hours: 2,},
        {case_id: 9, mediator_id: 4, amount: 250, hours: 2,},
        {case_id: 10, mediator_id: 4, amount: 130, hours: 2,},
        {case_id: 10, mediator_id: 4, amount: 100, hours: 2,},
        {case_id: 10, mediator_id: 4, amount: 150, hours: 2,},
        
      ]);
    });
};

