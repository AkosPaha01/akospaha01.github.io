$.getJSON('/release-output-metadata.json', function(data) {
        var content = data.elements[0].versionName;
        $("#rboardversion-a6-release").append(content);
   });