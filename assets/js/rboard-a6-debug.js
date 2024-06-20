$.getJSON('../../assets/json/debug-output-metadata-r.json', function(data) {
        var versionName = data.elements[0].versionName;
        var versionCode = data.elements[0].versionCode;
        $("#rboardversion-a6-debug-name").append(versionName);
        $("#rboardversion-a6-debug-code").append(versionCode);
   });