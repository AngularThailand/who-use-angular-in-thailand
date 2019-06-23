module.exports = {
  name: 'who-use-angular-in-thailand',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/who-use-angular-in-thailand',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
