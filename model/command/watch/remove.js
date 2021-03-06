const Logger = require('@lilywonhalf/pretty-logger');
const WatchedMember = require('../../watched-member');

/**
 * @param {Message} message
 * @param {Array} args
 * @param {Object} target
 */
module.exports = async (message, args, target) => {
    WatchedMember.remove(target.id).then(() => {
        message.reply(trans(
            'model.command.watch.remove.success',
            [target.label],
            'en'
        ));
    }).catch((error) => {
        Logger.error(error.message);
    });
};
