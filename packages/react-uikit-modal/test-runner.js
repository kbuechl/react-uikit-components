'use strict';
import glob from 'glob';
import path from 'path';


const config = {
  base: './',
  folder : './__tests__/**/*-test.js',
  options : {
    ignore: './node_modules/**'
  }
};

const resolveBase = (base, filePath) => {
  return path.resolve(__dirname, `${base}${filePath}`);
};


const requireFiles = (config) => {
  return glob(config.folder, config.options, (err, files) => {
    if (err) {
      return err;
    }

    files.forEach(f => {
      const tests = resolveBase(config.base, f);
      require(`${tests}`);
    });
  });
};

export default requireFiles(config);
