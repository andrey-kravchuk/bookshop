<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Hello World in Backbone.js</title>
</head>
<body>
<!-- ========= -->
<!-- Libraries -->
<!-- ========= -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"
        type="text/javascript"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js" type="text/javascript"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js"
        type="text/javascript"></script>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="http://underscorejs.org/underscore.js"></script>
<script src="http://backbonejs.org/backbone.js"></script>

<script>

    var User = Backbone.Model.extend({
      url: "http://localhost:8888/abc/users/",
        defaults: {
          "username":"default username",
          "password":"123"
        }
    });

    var user = new User();
    var user2 = new User({"username":"username2","password":"password2"});
    console.log(JSON.stringify(user));
    user.save();
    user.fetch({
      complete: function (data) {
        console.log(data);
      }
    });

    var UserCollection = Backbone.Collection.extend({
        model: User,
        initialize: function () {
          console.log("collection was created");
        }
    });
    var usersList = new UserCollection();
    usersList.add(user);
    usersList.add(user2);
    console.log(JSON.stringify(usersList));

</script>

</body>
</html>