$.getJSON('/debug-output-metadata.json', function(data) {
        var content = data.elements[0].versionName;
        $("#rboardversion-a6-debug").append(content);
   });