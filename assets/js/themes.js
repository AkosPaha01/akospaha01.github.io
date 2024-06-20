$.getJSON('../../assets/json/themes.json', 
   $.each(function(data) {
   $('#material-3-link').attr('href', data.config.themes[0].link); 
   $('#dynamic-d-link').attr('href', data.config.themes[1].link);
   $('#dynamic-l-link').attr('href', data.config.themes[2].link);
   var description_md3 = data.config.themes[0].description;
   var file_size_md3 = data.config.themes[0].file_size;
   var file_name_md3 = data.config.themes[0].file_name;
   var name_dynamic_d = data.config.themes[1].name;
   var file_size_dynamic_d = data.config.themes[1].file_size;
   var file_name_dynamic_d = data.config.themes[1].file_name;
   var description_dynamic_d_l = data.config.themes[2].description;
   var name_dynamic_l = data.config.themes[2].name;
   var file_size_dynamic_l = data.config.themes[2].file_size;
   var file_name_dynamic_l = data.config.themes[2].file_name;
   $("#material-3-desc").append(description_md3);
   $("#material-3-file_size").append(file_size_md3);
   $("#material-3-file_name").append(file_name_md3);
   $("#dynamic-d-l-desc").append(description_dynamic_d_l);
   $("#dynamic-d-file_size").append(file_size_dynamic_d);
   $("#dynamic-d-file_name").append(file_name_dynamic_d);
   $("#dynamic-d-name").append(name_dynamic_d);
   $("#dynamic-l-name").append(name_dynamic_l);
   $("#dynamic-l-file_size").append(file_size_dynamic_l);
   $("#dynamic-l-file_name").append(file_name_dynamic_l);
   }));