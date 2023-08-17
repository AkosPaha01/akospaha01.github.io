$.getJSON('/release-output-metadata.json', function(data) {
        var versionName = data.elements[0].versionName;
        var versionCode = data.elements[0].versionCode;
        $("#rboardversion-a12-release-name").append(versionName);
        $("#rboardversion-a12-release-code").append(versionCode);
   });