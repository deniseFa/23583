const path = require('path');

exports.getFooter = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'footer.html'));
};
