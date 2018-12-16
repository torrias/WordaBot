"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const telegraf = require('telegraf');
class word {
    getInfo() {
        return "Слово " + this.original + "переводится как " + this.translate;
    }
}
dotenv.config({ path: `${__dirname}/../.env` });
const bot = new telegraf(process.env.TOKEN);
bot.start((ctx) => {
    ctx.reply('Добро пожаловать в бот-словарик');
    ctx.reply('Введи addword для добавления слова в словарь');
});
bot.command('/addword', ctx => {
    ctx.reply('Введите слово, перевод которого хотите запомнить:');
});
let dictionary = new word();
bot.on('text', (ctx) => {
    dictionary.original = ctx.message.from.username;
});
bot.on('text', ctx => {
    ctx.reply('Введите перевод для этого слова:');
});
bot.on('text', (ctx) => {
    dictionary.translate = ctx.message.from.username;
});
bot.command('/listword', ctx => {
    ctx.reply(dictionary.original + dictionary.translate);
});
bot.startPolling();
console.log(process.env.TOKEN);
//# sourceMappingURL=index.js.map