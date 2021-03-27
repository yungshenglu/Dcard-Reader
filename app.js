const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: ['http://localhost:9528'],
}));

// GET: 取得熱門文章列表
app.get('/api/posts&before=:before', (req, res) => {
  const before = req.params.before;
  const apiUrl = before !== '0'
    ? `https://www.dcard.tw/v2/posts?before=${before}`
    : `https://www.dcard.tw/v2/posts?popular=true`

  return axios.get(apiUrl)
    .then(({ status, statusText, headers, data }) => {
      if (status === 200) {
        return res.json(data);
      } else {
        return '';
      }
    }).catch((err) => {
      res.send(err);
    });
});

// GET: 取得該篇文章內容
app.get('/api/post&id=:id', (req, res) => {
  const id = req.params.id;
  const apiUrl = `https://www.dcard.tw/v2/posts/${id}`

  return axios.get(apiUrl)
    .then(({ status, statusText, headers, data }) => {
      if (status === 200) {
        return res.json(data);
      } else {
        return '';
      }
    }).catch((err) => {
      res.send(id);
    });
});

app.listen(9527, () => {
    console.log('CORS-enabled web server listening on port 9527');
});