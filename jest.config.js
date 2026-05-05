
const dbType = process.env.DB_TYPE || 'unknown';

module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: `./reports/${dbType}`,
        filename: 'report.html',
        expand: true
      }
    ],
    [
      'jest-junit',
      {
        outputDirectory: `./reports/${dbType}`,
        outputName: 'junit.xml'
      }
    ]
  ]
};