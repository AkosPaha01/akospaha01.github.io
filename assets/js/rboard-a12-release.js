$.getJSON('/release-output-metadata.json', function(data) {
        var content = data.elements[0].versionName;
        $("#rboardversion-a12-release").append(content);
   });