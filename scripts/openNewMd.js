var spawn = require('child_process').exec;


hexo.on('new', function(data){
  spawn('start  "E:\Notepad++\notepad++.exe" ' + data.path);
});