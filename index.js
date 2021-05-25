var loaderUtils = require('loader-utils')
var properties = require('properties')
var schemaUtils = require('schema-utils')
var schema = require('./schema.json')

function propertiesLoader(source) {
  var callback = this.async()
  var options = loaderUtils.getOptions(this)

  schemaUtils.validate(schema, options, {
    name: '@lyracom/properties-loader',
    baseDataPath: 'options',
  })

  properties.parse(source, options, function (err, result) {
    if (err) {
      return callback(err)
    }

    var json = JSON.stringify(result || {})
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')

    return callback(null, 'export default ' + json)
  })
}

module.exports = propertiesLoader
