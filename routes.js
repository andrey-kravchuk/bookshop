Route = Backbone.Router.extend({
	routes: {
		'':'index'
	},
	index: function() {
		var people = new models.People([
                {
                  "name":"name1",
                  "surname":"surname1"
                },
                {
                   "name":"name2",
                   "surname":"surname2" 
                }
			]);


		var peopleView = new views.PeopleView({
			collection: people
		});
		peopleView.render();


		jQuery("#saveUserId").click(function(event){     
            var name = jQuery("#nameId").val();
            var surname = jQuery("#surnameId").val();


            var newUser = new models.User({
            	"name": name,
            	"surname": surname
            });
            people.add(newUser);

		});
	}

});

jQuery(document).ready(function() {
	new Route();
	Backbone.history.start();
})