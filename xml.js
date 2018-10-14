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
client.on('message', msg => {
      if ( msg.content.includes("Invited by")) {
    msg.channel.send(' **Welcome** To 3rb **Network**   ');

}
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
if ( msg.content.includes("Invited")) { 
        var msg1 = Array(3);
        msg1[1] = "عليكم السلام هلا والله";
        msg1[2] = "ارحب منور والله";
        msg1[3] = "هلا اخووووووي"
        var x = getRandomInt(0, 9);
        if (x < 6){
         if (x < 3){
            msg.channel.sendMessage(msg1[1]);
        }
        else{
               msg.channel.sendMessage(msg1[3]);
        }
        }
        else{ 
            msg.channel.sendMessage(msg1[2]);
        }

client.login(process.env.BOT_TOKEN);
