import 'dotenv/config'
import {Telegraf, Markup} from 'telegraf'

const bot = new Telegraf(process.env.token)



const start = () => {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

start()