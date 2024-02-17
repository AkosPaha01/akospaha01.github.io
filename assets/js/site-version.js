$.getJSON('/package.json', function(data) {
var version = data.version;
        $("#site-version").append(version);
   });
