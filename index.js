var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "I'm also selling my coding!!",
			assets : {
				large_image : "small",
				large_text : "Hi, I am large_text"
			},
			buttons : [{label : "DM Me" , url : "https://discord.com/channels/@me/756054379983011933"}]
		}
	})
})
client.login({ clientId : "780459446480011274" }).catch(console.error);
