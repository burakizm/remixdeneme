import { Composer } from 'grammy';

const composer = new Composer();

export default composer;

composer.command('start', (ctx) => ctx.reply('merhaba deneme'));
