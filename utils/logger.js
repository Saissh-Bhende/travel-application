//The following code logs the messages in the console/terminal from which the application is started
const winston = require('winston');

const logger = winston.createLogger
({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: {service: 'travel-app'},
    transports: [
    ],
});

if(process.env.NODE_ENV !== 'production')
{
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
module.exports = logger;