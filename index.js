const Telegraf = require('telegraf')
const token = '719010870:AAFUfj3ic-azFfzQRWrhDh9aQN4kC7VAz9w'
const bot = new Telegraf(token, {polling: true})
bot.start((ctx) => {
    console.log('Id пользователя:', ctx.from.id);
    return ctx.reply('Добро пожаловать!');
  });