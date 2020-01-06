const Config = require('../../config.json');
const CommandCategory = require('../command-category');

/**
 * @param {Message} message
 */
module.exports = {
    aliases: ['tuteur', 'tuteurs', 'tutor'],
    category: CommandCategory.INFO,
    process: async (message) => {
        let list = message.guild.members.filter(
            member => member.roles.has(Config.roles.tutor)
        ).map(
            member => (member.nickname !== null ? member.nickname : member.user.username) + '#' + member.user.discriminator
        );

        message.reply(`${trans('model.command.tutors.answer', [list.length])}\n\n${list.join('\n')}`);
    }
};
