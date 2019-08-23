
exports.up = function(knex) {
    return knex.schema.createTable('documents', table => {
        table.increments();
        table.integer("case_id");
        table.text("file_name");
})
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('documents');
};
