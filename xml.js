const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
     
  console.log(`Logged in as ${client.user.tag}!`);

  console.log('G3G11')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




 client.on('message', message => {
  if (message.content === '1-fa') {   
      if (message.author.id !== '447179855898083338')
 return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '2-fa') {   
      if (message.author.id !== '447179855898083338')
 return message.react('🤦🏻‍♂️')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});


   
client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'w')) {
             if (message.author.id !== '383394687349948426')
 return message.react('⚠')
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createWebhook(message.author.username, message.author.avatarURL) 
    .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});
var replays = {
   slam: [
"**Welcome** To 3rb **Network**",
"**Welcome** Too 3rb **Network**",
"**Welcome** ToOo 3rb **Network**"
]
}
client.on('message', msg => {
      if ( msg.content.includes("Invited ")) {
    var replay = replays.slam[(Math.floor(Math.random()*3))];
message.channel.send(replay);
}
});
client.login(process.env.BOT_TOKEN);
