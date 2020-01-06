const Guild = require('../guild');
const CommandCategory = require('../command-category');

/**
 * @param {Message} message
 */
module.exports = {
    aliases: ['getmemberid', 'getuserid', 'memberid', 'userid', 'gmid', 'guid'],
    category: CommandCategory.MODERATION,
    process: async (message) => {
        const member = await Guild.getMemberFromMessage(message);

        if (Guild.isMemberMod(member)) {
            const result = Guild.findDesignatedMemberInMessage(message);

            if (result.foundMembers.length > 0) {
            	message.channel.send(result.foundMembers[0].toString());
            	message.channel.send(result.foundMembers[0].id);
        	} else {
        		message.reply(trans('model.command.getMemberId.notFound', [], 'en'));
			}
        }
    }
};
