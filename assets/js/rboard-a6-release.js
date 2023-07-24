$.getJSON('https://github.com/DerTyp7214/RboardThemeManagerV3/releases/download/latest-rCompatible/output-metadata.json', function(data) {
        var content = data.elements[0].versionName;
        $("#rboardversion-a6-release").append(content);
   });