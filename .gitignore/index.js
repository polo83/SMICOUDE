const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('!SMICOUKICK')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member.kick('dire pourquoi il à été kick est pas obligatoire').then(() => {

          message.reply(`${user.tag} à été kick avec succés`);
        }).catch(err => {

          message.reply('je ne peux pas le kick');

          console.error(err);
        });
      } else {

        message.reply('That user isn\'t in this guild!');
      }

    } else {
      message.reply('mentionne la personne a kick');
    }
  }
});

client.login('NjA5MzI3ODUzNjQwNjEzODk4.XU1G7A.9F4C12joV273bktRJDIi2xfgwTE');

client.on('message', message => {
    if (message.content === 'Salut') {
      message.channel.send('salut');
    }
  });

  client.on('message', message => {
    if (message.content === 'salut') {
      message.channel.send('salut');
    }
  });

  client.on('message', message => {
    if (message.content === 'GG') {
      message.channel.send('GG');
    }
  });

  client.on('message', message => {
    if (message.content === 'gg') {
      message.channel.send('gg');
    }
  });

  client.on('message', message => {
    if (message.content === 'Gg') {
      message.channel.send('Gg');
    }
  });

  client.on('message', message => {
    if (message.content === 'link') {
      message.channel.send('https://amriiyed410.wixsite.com/smicou');
    }
  });

  client.on('message', message => {
    if (message.content === 'allez') {
      message.channel.send('allez');
    }
  });

