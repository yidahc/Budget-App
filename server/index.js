const app = require('./config.js');
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('listening on port 3000!');
});
