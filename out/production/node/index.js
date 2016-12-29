const exec = require('child_process').exec;
exec('node -v', (err, data) => {
  if (err) return console.err(err)
  console.log(data);
});
