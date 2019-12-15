module.exports = {
  name: 'wishlist',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/wishlist',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
