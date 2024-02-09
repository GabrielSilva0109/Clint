module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
  };
  