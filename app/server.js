const express = require('express');
const bodyParser = require('body-parser');
const main = express();



main.use(bodyParser.urlencoded({ extended: false }));
main.use(bodyParser.json());

main.use(express.urlencoded({ extended: true }));
main.set('view engine', 'html');
main.use(express.static(__dirname + '/'));

// main.post('/submit', (req, res) => {
//     // console.log('req.body', req.body);
//     let contactForm = `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nSubject:${req.body.subject}\nMessage: ${req.body.messagetext}`
//     bot.sendMessage(chatId,contactForm)
//     .then((resolvedValue) => {
//     return res.status(200).end();
// }) 
//     .catch((error) => {
//      return res.status(404).end();
// });

// });
    

main.listen(3000,() =>console.log('Server started...'));


