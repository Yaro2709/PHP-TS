import type {Config} from 'jest';

const config: Config = {
  coveragePathIgnorePatterns: [  //игнорируем node_modules
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [  //расширения файлов для модулей
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [  //директории модулей
    'node_modules',
  ]
};

export default config;
