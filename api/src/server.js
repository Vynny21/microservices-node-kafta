import express from 'express';
import kafka from 'kafkajs';

const app = express()

app.post('/certifications', (res, req) => { 
  //chamar o microserviço 
  return res.json({ ok: true })
})

app.listen(3333)