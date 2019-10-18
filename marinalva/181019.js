 // DATABASE DE SCORE DO TRAVA-DEDOS
 // Code by: Wh1t3W0lf#2613, Stark, ou seja lá como você me chama.
 // "random" refere-se ao número aleatório gerado do array de falas aleatórias do bot
 // "db" refere-se à uma database em quick.db que eu havia criado
      
      if(message.guild.id === "587427294298243092"){
      
        if(random >2 && random <8){ //inicio **
          let scoreMari = db.fetch(`travadedos_${message.guild.id}_${message.author.id}`);
message.channel.send(`Score de ${message.author.username}: ${scoreMari}`);

            if(random === "3"){ //inicio random 3
              const collector = message.channel.createMessageCollector({max:1, time: 20000});
message.channel.send("cheguei na condição 3");

              collector.on('collect', m => {
                if(m.includes("três pratos de trigo para três tigres tristes")){
message.channel.send("De dentro do colector: " +message.content);              
                  m.react("👏");
                  m.react("🎉");
                  
                  db.add(`travadedos_${message.guild.id}_${message.author.id}`, 1);  
                  message.channel.send(message.content);

                message.channel.send(new Discord.RichEmbed() .setColor("#bf0303") .setAuthor(`<@{m.author.id}> recitou o trava-dedos corretamente.`, m.author.displayAvatarURL));
                return;
                }
                
              });

              collector.on('end', collected => {

                      message.channel.send(new Discord.RichEmbed() .setColor("#bf0303") .addField(`MAAARINALVA GANHOU UMA, MARINALVA GANHOU MILHAREEES!!!!! :bird: :notes:`, `Ninguém conseguiu repetir o trava-dedos corretamente.`));

                  return;

              });
            } //fim random 3


        } //fim **
