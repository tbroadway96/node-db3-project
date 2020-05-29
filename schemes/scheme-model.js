const db = require('../data/db-config');

const find = () => {
    return db('schemes');
}

const findById = (id) => {
    return db('schemes').where({ id });
}

const findSteps = (id) => {
    return db( 'steps as w')
    .join('schemes as s', 's.id', 'w.scheme_id',)
    .select('s.scheme_name', 'w.step_number', 'w.instructions', )
    .where({ scheme_id: id });
}

const add = (data) => {
    return db('schemes').insert(data);
}

const addStep = (data) => {
    return db('steps','schemes').insert(data);
}

const update = (changes, id) => {
    return db('schemes').where({ id }).update(changes);
}

const remove = (id) => {
    return db('schemes').where({ id }).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}
