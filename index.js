const Telegraf = require('telegraf')
const config = require('./config.json')
const bot = new Telegraf(config.token, {polling: true})

bot.use((ctx, next) => {
  const start = new Date()
  return next(ctx).then(() => {
    const ms = new Date() - start
    console.log('Response time %sms', ms)
  })
})

bot.on('text', (ctx) => ctx.reply('Hello World'))
bot.startPolling()