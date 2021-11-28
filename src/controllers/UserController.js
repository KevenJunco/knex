const  knex  = require('../database');


module.exports = {

    async index(req, res) {
        
          const users = await knex('users').where('deleted_at', null)

          return res.json(users);
        
    },

    async create(req, res, next) {

        
        try {
            const {username} = req.body;

            const users = await knex('users').insert({username})
    
            return res.status(201).json(users);

        } catch (error) {
            next(error)
        }
      
    },

    async delete(req, res) {
        
        try {
            const {id} = req.params;


            await knex('users').where({id}).update('deleted_at', new Date())

            return res.send();
        }  catch (error) {
            next(error)
        }
  
    },

    async update(req, res, next) {

        try {
            const {username} = req.body;
            const {id} = req.params;


            await  knex('users').update({username}).where({id})

            return res.send();
        }  catch (error) {
            next(error)
        }
        

      
  }

}