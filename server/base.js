const { createServer } = require('http'),
  { parse } = require('url'),
  next = require('next'),
  child_process = require('child_process'),
  path = require('path');

module.exports.start = conf => {
  const { port, dev } = conf || {}
  const app = next({ dev });
  const handle = app.getRequestHandler();
  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // 执行自动化部署脚本
      if (pathname === '/deploy' && req.method === 'POST') {
        const exec = `sh ${path.join(process.cwd(), './shell/zeus-doc-ssr.sh')}`
        console.log('执行 ' + exec);
        child_process.exec(
          exec,
          (error, stdout, stderr) => {
            if (error) {
              console.log('部署出错');
            } else {
              if (stderr) {
                console.log(stderr);
              }
              console.log(stdout);
            }
          }
        )
        return res.end('正在部署');
      }

      if (pathname === '/') {
        app.render(req, res, '/home', query);
      } else {
        handle(req, res, parsedUrl);
      }
    }).listen(port || 3000, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port || 3000}`);
    })
  })
}