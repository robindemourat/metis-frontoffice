const express = require('express')
const cors = require('cors')

const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3002
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const bodyParser = require('body-parser')

const getConfig = require('./utils/config');
const {comparePwd} = require('./utils/crypto');
const updateData = require('./utils/update-data');
const {
  secret
} = getConfig();



app.prepare()
.then(() => {
  const server = express()

  server.use(cors())
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.use(cors())


  server.get('/', (req, res) => {
    return app.render(req, res, '/index')
  })


  server.get('/composition/:id', (req, res) => {
    return app.render(req, res, '/composition', { id: req.params.id })
  });

  server.post('/update', (req, res) => {
    /**
     * @todo verify data form
     */
    const {pwd, data /*, diffusion */} = req.body;
    comparePwd(secret, pwd)
      .then(() => {
        res.status(200).json({ok: true});
        updateData(data);
      })
      .catch(e => res.status(403).send('wrong password'))
  })

  server.get('*', (req, res) => {
      return handle(req, res);
    });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})