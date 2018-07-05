const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(**
  يا هلا ومسهلا تعال ي عمري لا تحرمنا من صوتك
                          https://discord.gg/Q9zhaHS
الدعووة خاصة لك يا  [ ${member}  ]
**) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(** 
  يا هلا ومسهلا تعال ي عمري لا تحرمنا من صوتك
                          https://discord.gg/Q9zhaHS
                 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**) 
}).catch(console.error)
})
client.login('NDYyMjEzMTU4MzYzMzMyNjE4.Dhewuw._0RIhdhksE5PtzL2HENRpUYZnsk');
