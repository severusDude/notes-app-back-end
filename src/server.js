const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
	const server = Hapi.server({
		host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
		port: 5000,
		routes: {
			cors: {
				origin: ["*"], // this things only allowed if the the service that access is secure (https), to bypass this restriction, insecure-origin policy flags in browser need to be filled with given link
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
