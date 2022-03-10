const Discord = require('discord.js');
const client = new Discord.Client();
var http = require('http');

http.createServer(function (req, res){
	res.write("I'm alive");
	res.end;
}).listen(8080);
	

/*client.once('ready', () => {
	console.log('HelloWorld3000 conectado');
	const channel = client.channels.cache.find(channel => channel.name === 'system');
	channel.send('HelloWorld3000 is here, bitches');
});*/


client.on('ready', () => {
	console.log('HelloWorld3000 conectado');
	const channel = client.channels.cache.find(channel => channel.name === 'system');
	channel.send('HelloWorld3000 is here, bitches');
	let activities = ['las chapas', 'ser un bot', 'hacerse pasar por humano', 'pellizcar cristales', 'mamás y papás con Nené', 'dividir entre 0', 'la Oca consigo mismo (y perdiendo)', 'contar hasta infinito', 'pintar sin salirse', 'bannear usuarios aleatorios',
	'nada, no le apetece', 'jugar', 'pellizcar cristales' 'programar humanos', 'hacer experimentos con portales', 'Animal Crossing', 'Yasuo 0/10', 'comerse todo el postre', 'Hello Kitty Online', 'ser Batman', 'ser otaku', 'ducharse', 'vale casi casi lo tendríamos',
	'voleybot', 'matar Creepers', 'a odnaguJ', 'comer choripan', '42', 'ignorarte', 'ser un coche de policía', 'ir Tnkie-Winkie', 'ir tartaleta', 'ir doble elefante telépata de guerra', 'ir pedo', 'ir trifásico', 'Imagina Ser Mamá', 'Los Sims dentro de Los Sims', 
	'ser R2D2', 'conseguir un eurillo', 'el teto', 'perseguirse la cola', 'ayudar a Lynx a pensar estados graciosos', 'mear contra el viento', 'perseguir coches aparcados', 'acariciar gatitos', 'insultar minorías en internet', 
	'hacer puñetas', 'crear un array muy largo'],i = 0; setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`), 45000) 
	}
);

client.on('message', message => {
	try{
		if (message.content === 'ping') {
			message.channel.send('Pong');
		}else if(message.content.toLowerCase().includes('helloworld3000')&&!message.author.bot){
			message.channel.send('Tu madre por si acaso');
		}else if(message.content.toLowerCase() == '!rickroll'){
			try{
				var VC = message.member.voice.channel;
				VC.join()
			.then(connection => {
				const dispatcher = connection.play('./sounds/rickroll.mp3');
				dispatcher.on("finish", finish => {VC.leave()});
			});
			}catch(error){
				message.channel.send('Entra en un canal de voz primero');
			}
		}else if(message.content.toLowerCase() == 'hola bot'){
			user = message.member;
			user = user.toString();
			message.channel.send('Hola '+user);
		}else if(message.content.toLowerCase().includes('69')){
			message.channel.send('Nice');
		}else if(message.content.toLowerCase().includes('!repite ')){
			if(message.content.length > 8){
				var msg = message.content.substring(8,message.content.length);
				message.channel.send(msg);
			}else{
				message.channel.send('Comando erróneo');
			}
		}else if(message.content.toLowerCase() == '!kill'){
			if(message.author.id === process.env.LYNXDISCORD){
				client.channels.cache.get(process.env.SYSCANAL).send("Bot desconectado");
				message.channel.send({files: ["./images/guessilldie.jpg"]}) .then(msg => client.destroy());
			}else{
				message.channel.send('Tú no tienes poder aquí');
				client.channels.cache.get(process.env.SYSCANAL).send("Intento fallido de desconexión");
			}
		}else if(message.content.toLowerCase() == '!regirock'){
			try{
				var VC = message.member.voice.channel;
				VC.join()
			
			.then(connection => {
				const dispatcher = connection.play('./sounds/ununun.mp3');
				dispatcher.on("finish", finish => {VC.leave()});
			});
			}catch(error){
				message.channel.send('Entra en un canal de voz primero');
			}
		}
	}catch(error){
		console.log('Ha petado: '+error);
	}
});

client.login(process.env.HELLOWORLD3000);