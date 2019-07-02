let discordServerEndpoint = 'https://canary.discordapp.com/api/guilds/592923992151556099/widget.json';

$.getJSON(discordServerEndpoint, function(response) {
    let userCount = 0;
    let serverCount = 0;
    let dragonCount = 0;
    let status = 'offline';

    response.channels.forEach((channel) => {
        if(channel.id == '595395054370291712') {
            serverCount = channel.name.replace('!!','');
        };
        if(channel.id == '595394938154516510') {
            userCount = channel.name.replace('!!','');
        };
        if(channel.id == '595421472911261716') {
            dragonCount = channel.name.replace('!!','');
        }
    })

    response.members.forEach((user) => {
        if(user.id == '592907786526916608') {
            status = user.status;
        }
    })

    $('.status').addClass(`status-${status}`);
    $('#userCount').html(`${userCount.toLocaleString()} active Rider(s)!`);
    $('#serverCount').html(`${serverCount.toLocaleString()} active Server(s)!`);
    $('#dragonCount').html(`${dragonCount.toLocaleString()} currently tamed Dragons!`);
})