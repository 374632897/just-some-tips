function getGlobal () {
  const str = `
<link href = 'app.global.css'>
<link href = 'fjasfkladsfjkallak.global.css'>
<link href = 'jasklj1kfajsk23424jkj1j312j123.global.css'>
<script src = 'jfasdk.global.js'>
fsdjlfkajklfjasf.fasdjflksafj.fjadslfjaskljflak
<script src = 'jfasdk.global.js'>
`;

console.log(str.match(/(['"])[\s\S]*?\.global\.(css|js)\1/g).map(item => item.replace(/'/g, '')))
}
getGlobal()
