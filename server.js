
const _ = require('lodash');
const Countdown = require('./modules/Countdown');

const line = require('@line/bot-sdk');
const express = require('express')
const path = require('path');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const app = express();
const port = process.env.PORT || 3000;

const lineConfig = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN
  
}

const client = new line.Client(lineConfig);

app.post('/webhook', line.middleware(lineConfig), async (req, res) => {
  try {
    const events = req.body.events;    
    return events.length > 0 ? await events.map(item => handleEvent(item)) : res.status(200).send('OK');
  } catch (error) {
    res.status(500).end();
  }
});

const handleEvent = async (event) => {
  console.log(event);
  if (event.type !== 'message' && event.message && event.message.type !== 'text') {
    return null;
  } else if (event.type === 'message') {
    const messageText = event.message.text;
    console.log(messageText);
    if (_.startsWith(messageText, 'อยากไปญี')) {
      const countdown = new Countdown();
      return client.replyMessage(event.replyToken, {type: 'text', text: countdown.getDistance()});
    }
  }
}

app.listen(port, () => {
  console.log(`Start server at port ${port}.`);
})