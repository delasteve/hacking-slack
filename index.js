var SlackBot = require('slackbotjs').SlackBot;

var SLACK_TOKEN = '___PASTE_TOKEN_HERE___';

var slackbot = new SlackBot(SLACK_TOKEN);

slackbot.start();
