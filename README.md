# Hacking Slack

A slackbot seed for The Forge Ann Arbor's May PluggedIn event.

## Usage

- Create a new Slack bot
  * Use [this link](https://my.slack.com/services/new/bot) to create a new Slack bot. Make sure you're signed into the right team (upper right corner).
  * Once you've created the integration, you'll see the Slack token you will use for `SLACK_TOKEN` \(we'll talk about this shortly)\. This is what you will use for the rest of the project.
  * \* NOTE \* you will probably want to create a private channel for this exercise to test your bot to avoid unnecessary spamming of public channels.
- Install Node.js - `brew install node`
- Clone this repository `git clone https://github.com/delasteve/hacking-slack.git`
- Type `npm install` in the created folder
- Edit the `index.js`'s `SLACK_TOKEN` variable with the provided SlackBot token
- Hack away and have fun!
:shipit:

## TIPS
- To stop the node server from running use `ctrl-c` in Terminal
