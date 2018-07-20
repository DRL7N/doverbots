const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log('GG11')
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

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
بعض الاشخاص يبحثون عن مكان جميل 
 والبعض يجعل المكان جميلا :black_heart: . 
نورنا ي قشطه:heart_eyes:  
https://media.discordapp.net/attachments/468037906724945920/468517988165746699/CV11.png
https://discord.gg/hje7Aqx
الدعووة خاصة لك يا  [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
   return channel.send(` 
**
بعض الاشخاص يبحثون عن مكان جميل 
 والبعض يجعل المكان جميلا :black_heart: . 
نورنا ي قشطه:heart_eyes:  
https://media.discordapp.net/attachments/468037906724945920/468517988165746699/CV11.png
https://discord.gg/hje7Aqx
الدعووة خاصة لك يا  [ ${member}  ]
**`) 
}).catch(console.error)

})






client.login(process.env.BOT_TOKEN);
