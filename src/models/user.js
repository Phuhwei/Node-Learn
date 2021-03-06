'use strict';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

module.exports = function(done){

  const Schema = mongoose.Schema;
  const ObjectID = Schema.ObjectId;

  const User = new Schema({
    name:{type: String, unique:true},
    email: {type: String, unique:true},
    password: {type: String},
    nickname: {type: String},
    about: {type: String},
  });
  $.mongodb.model('User', User);
  $.model.User = $.mongodb.model('User');

  done();
}
