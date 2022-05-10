import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageReporters: ['text', 'json-summary', 'lcov'],
};
export default config;
