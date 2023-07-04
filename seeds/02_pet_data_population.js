/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Bill', pet_type_id: 2},
    {id: 2, name: 'Dave', pet_type_id: 1},
    {id: 3, name: 'Doug', pet_type_id: 4},
    {id: 4, name: 'Jason', pet_type_id: 3}
  ]);
};
