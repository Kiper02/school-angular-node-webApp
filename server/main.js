import 'dotenv/config'
import {Telegraf, Markup} from 'telegraf'

const bot = new Telegraf(process.env.token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, что бы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                process.env.webAppUrl
            )
        ])
    )
})

bot.launch()