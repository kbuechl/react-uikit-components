import glob from 'glob';

const processDir = process.cwd();

const config = {
  base: processDir,
  folder : `${processDir}/__tests__/**/*-test.js`,
  options : {
    ignore: `${processDir}/node_modules/**`
  }
};

const requireFiles = (config) => {
  return glob(config.folder, config.options, (err, files) => {
    if (err) {
      return err;
    }

    files.forEach(f => {
      require(`${f}`); // nAry1 func would be useful here Q_Q.
    });
  });
};

export default requireFiles(config);
