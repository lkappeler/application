(function() {
	'use strict';



	const distributed 		= require('distributed-prototype');
	const Website 			= require('frontend');
	const InfectService 	= require('infect-service');



	module.exports = class Application {


		constructor() {

			// service host
			this.services = new distributed.ServiceManager();


			// api gateway
			this.services.registerService(new distributed.APIGatewayService({
				  port: 8000
				, name: 'api-gateway'
			}));


			// website
			this.services.registerService(new Website({
				  port: 9000
				, name: 'frontend'
			}));


			// datasource
			this.services.registerService(new InfectService());


			// go
			this.services.load().then(() => {
				console.log('INFECT is running!'.blue.bold);
			}).catch(log);
		}
	};
})();
