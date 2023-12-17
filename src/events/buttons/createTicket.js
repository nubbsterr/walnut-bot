const { Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton() || interaction.customId !== 'ticket') return;

        const ticketModal = new ModalBuilder()
            .setCustomId('ticketModal')
            .setTitle('Contact staff team')

        const titleInput = new TextInputBuilder()
            .setCustomId('titTicketleInput')
            .setLabel('Please enter ticket name')
            .setStyle(TextInputStyle.Short);

        const dscInput = new TextInputBuilder()
            .setCustomId('dscTicketInput')
            .setLabel('Please enter further context')
            .setStyle(TextInputStyle.Paragraph);

        const titleInputRow = new ActionRowBuilder().addComponents(titleInput);
        const dscInputnRow = new ActionRowBuilder().addComponents(dscInput);

        ticketModal.addComponents(titleInputRow, dscInputnRow);
        await interaction.showModal(ticketModal);
    }
}