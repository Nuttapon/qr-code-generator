const QRCode = require('qrcode');

const text = `|xxx
ref1
ref2
1000`;

QRCode.toFile('out.png', text, {
    color: {
        black: '#000000',
        white: '#ffffff',
    },
}, function (err) {
    if (err) {
        console.error(err);
    }
    console.log('success!');
});

