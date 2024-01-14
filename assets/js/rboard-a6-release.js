$.getJSON('/release-output-metadata-r.json', function(data) {
        var versionName = data.elements[0].versionName;
        var versionCode = data.elements[0].versionCode;
        $("#rboardversion-a6-release-name").append(versionName);
        $("#rboardversion-a6-release-code").append(versionCode);
   });