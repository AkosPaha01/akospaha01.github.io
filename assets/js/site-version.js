$.getJSON('/package.json', function(data) {
        var version = data.elements[0].version;
        $("#site-version").append(version);
   });
