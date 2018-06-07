var models = {};

models.User = Backbone.Model.extend({
	
	validate: function() {
		if(typeof this.get("name") !== 'string') {
			return "please provide name";
		}
		if(typeof this.get("surname") !== 'string') {
			return "please provide name";
		}
	},
	initialize: function() {
		console.log("user was created");
	}
});



models.People = Backbone.Collection.extend({
	model: models.User
});