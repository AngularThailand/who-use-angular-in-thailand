module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  roots: ['<rootDir>/projects', '<rootDir>/src'],
};
