var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'us-city',
  'description': 'A city in the U.S.A.',
  'schema': "string"
});
