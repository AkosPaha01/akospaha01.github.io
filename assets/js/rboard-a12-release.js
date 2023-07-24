$.getJSON('https://github.com/DerTyp7214/RboardThemeManagerV3/releases/download/latest-release/output-metadata.json', function(data) {
        var content = data.elements[0].versionName;
        $("#rboardversion-a12-release").append(content);
   });