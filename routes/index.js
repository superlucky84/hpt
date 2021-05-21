const express = require('express');
const hbs = require('handlebars');
const path = require('path');
// eslint-disable-next-line
const router = express.Router();

function readTemplateFile(target, compiler) {
  return new Promise((resolve, reject) => {
    compiler.outputFileSystem.readFile(target, (err, result) => {
      if (err) {
        reject(new Error(err));
      }
      resolve(result.toString());
    });
  });
}

module.exports = (compiler) => {
  router.get('/', async function (req, res, next) {
    const targetTemplate = path.join(compiler.outputPath, '/views/index.hbs');
    const layoutTemplate = path.join(compiler.outputPath, '/views/layout.hbs');
    const targetHTMLString = await readTemplateFile(targetTemplate, compiler);
    const layoutHTMLString = await readTemplateFile(layoutTemplate, compiler);

    const template = hbs.compile(layoutHTMLString);
    const template2 = hbs.compile(targetHTMLString);

    const result = template({body: template2({title: 'kkkKKkk!!!'})});

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });

  return router;
};
