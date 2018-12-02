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
var space = ' '
bot.on('text', (ctx) => {
    var temp_text = ctx.message.from.username
    var splits = temp_text.split(space)
    ctx.reply('Занесено ' + (splits.length/2))
})
bot.startPolling()