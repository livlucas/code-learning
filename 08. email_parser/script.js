"use strict";


function splitEmails(emailText) {
	var i, j, k,
		emails = [],
		message = '';

	for (i = 0; i < emailText.length; i += 1) {
		if (emailText[i] === '\n') {
			for (j = i + 1; emailText[j] === '_'; j += 1) {}

			for (k = j; emailText[k] === '\n'; k += 1) {}

			if (((j - i) === 6) && ((k - j) === 1) ) {
				emails.push(message);
				message = '';
				i = k;
			}
		}

		message += emailText[i];
	}

	return emails;
}

function parseBody(email) {
	var i,
		message = '';

	for (i = 0; i < email.length; i += 1) {
		if (email[i] === '\n') {
			if (email[i + 1] === '\n') {
				for (i += 2; i < email.length; i += 1) {
					message += email[i];
				}
			}
		}
	}

	return message;
}

function parseHeader(email) {
	var i;

	for (i = 0; i < emails.length; i += 1) {
		
	}


}

function parseEmails(emailsText) {
	var emails = splitEmails(emailsText),
		body;

	for (var i = 0; i < emails.length; i += 1) {
		//parseHeader(emails[i]);
		body = parseBody(emails[i]);
	}
}

//test area
var emails = parseEmails(EMAILS_TEXT);

//enviar os emails usando aquele metdo ali embaixo!

//parseBody(email)
// email format:
//  from_name<email_address>:to_name<email_address>
//
//  body
//  _____
//
// entre o from e o to existe um :
// entre o header e o body sempre serão dois enters (\n)
// o que termina um email são 5 underscores seguidos de um enter
// _____\n

// para testar a interface do sender, descomente as linhas abaixo
// Sender.sendEmail({
//         name: 'Kevin Bacon',
//         address: 'kevin@history.com' 
//     }, {
//         name: 'Mirna Boil',
//         address: 'mboil@yahoo.com'
//     }, 
//     'Hey Mirna, \n\nis everything good for tonight?'
// );
