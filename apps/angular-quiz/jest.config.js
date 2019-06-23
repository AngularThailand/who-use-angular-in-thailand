module.exports = {
  name: 'angular-quiz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-quiz',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
