var views = {};

views.UserItemView = Backbone.View.extend({
    tagName: 'tr',
    events: {
      'click' : 'removeUser' 
    },
    removeUser: function() {
       this.model.destroy();
    },
    initialize: function(attributes) {
        _.bindAll(this, "render");
        this.model.bind("change", this.render);
    },
    render: function() {
    	console.log("UserItemView >>> render");
    	jQuery(this.el).empty();
    	jQuery(this.el).append(jQuery("<td>" + this.model.get("name") + "</td>"));
    	jQuery(this.el).append(jQuery("<td>" + this.model.get("surname") + "</td>"));
    	return this;
    }
});

views.PeopleView = Backbone.View.extend({
     el: 'tbody',
     collection: null,
     initialize: function(atrributes){
        _.bindAll(this, "render");
        this.collection.bind("add", this.render);
        this.collection.bind("remove", this.render);
     },
     render: function() {
        jQuery(this.el).empty();
        var element = jQuery(this.el);

        this.collection.forEach(function(item){
             var viewItem = new views.UserItemView({model: item});
             element.append(viewItem.render().el);
         });
        return this;
     }

});

