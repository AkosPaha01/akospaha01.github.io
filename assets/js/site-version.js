$.getJSON('/package.json', function(data) {
        var version = data[0].version;
        $("#site-version").append(version);
   });
