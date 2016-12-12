const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', (data) => {
  console.log('stdin => ');
  console.log('data', data);
});
stdin.on('end', () => {
  console.log('end');
});
