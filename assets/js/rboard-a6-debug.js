$.getJSON('https://github.com/DerTyp7214/RboardThemeManagerV3/releases/download/latest-rCompatible-debug/output-metadata.json', function(data) {
        var content = data.elements[0].versionName;
        $("#rboardversion-a6-debug").append(content);
   });