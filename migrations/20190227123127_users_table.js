
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();   

    tbl.string('username', 155).notNullable();
    tbl.string('password', 155).notNullable();
    tbl.string('department',).notNullable();
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('users');
};
