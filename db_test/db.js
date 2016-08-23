var mongoose = require( 'mongoose' );

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demo');

var userSchema = new mongoose.Schema({
    name:        { type: String},
	age:        { type: Number}
});

mongoose.model('User', userSchema);

var UserModel = mongoose.model('User');


var mUser = 'jason'; 
var userEntity = new UserModel({name:mUser,age:20});

console.log(userEntity.name);

userEntity.save(function(error){
	if(error){
		console.log('save fail!');
	}else{
		console.log('save success!');
		UserModel.find(function(err,users){
		  //查詢到的所有user
		  if(err){
			  console.log("查詢到所有user err!\n")
		  }
		  console.log("查詢到所有user");
		  console.log(users+"\n");
		});

		UserModel.find({ name: mUser }, function(err,users){
		  //查詢到的所有user
		  if(err){
			  console.log("查詢到user "+mUser+" err!")
		  }
		  console.log("查詢到user "+mUser+" : "+users);
		});
	}		
});


	
	
	
