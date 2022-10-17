// Initializes the `template` service on path `/template`
const { Template } = require('./template.class');
const createModel = require('../../models/template.model');
const hooks = require('./template.hooks');
const mongoose = require('mongoose');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false,

   // multi : true
  };

  // Initialize our service with any options it requires
  app.use('/template', new Template(options, app));

  app.post('/templateCreate',async(req,res)=>{
    let data = req.body


    try {
      for await(const key of data) {
        var name = key.name
        if(key._id){
         _id =  mongoose.Types.ObjectId(key._id)
         await app.service('template').Model.updateOne(
          { _id : _id },
          { $set : { name : name }},
          { upsert : true}
        )
        }else {
          await app.service('template').Model.create({name : name})
        }
      }


      return res.status(200).send("success")
    } catch (error) {
      console.log(error);
      return res.status(400).send(error)
    }






  })

  // Get our initialized service so that we can register hooks
  const service = app.service('template');

  service.hooks(hooks);
};
