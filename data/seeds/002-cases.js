'use strict'

exports.seed = function(knex) {
  return knex('cases').del()
    .then(function () {
      return knex('cases').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
