const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () =>{
    it('should generate the correct message object', () =>{
        var from = 'oswaldo';
        var text = 'some text';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
        
    });
});

describe('generateLocationMessage', () =>{
    it('shouls generate correct location object', () => {
        var from = 'admin';
        var lat =15;
        var lng = 30;
        var locationMessage = generateLocationMessage(from,lat,lng);
        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({
            from,
            url: `https://www.google.com/maps?q=${lat},${lng}`
        });
    });
});