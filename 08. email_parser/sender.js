"use strict";

//Sender.sendEmail(from, to, body)
// - from: object {name: string, address: string}
// - to: object {name: string, address: string}
// - body: string

var Sender = {
    template: '<div class="email">' +
        '<div class="from">from: {from_name} (<span class="address">{from_address}</span>)</div>' +
        '<div class="to">to: {to_name} (<span class="address">{to_address}</span>)</div>' +
        '<div class="content">{body}</div>' +
    '</div>',

    emails: [],

    sendEmail: function (from, to, body) {
        this.emails.push({
            from, to, body
        })
    },

    run: function () {
        var html = '';

        this.emails.forEach((e) => {
            html += this.template
                .replace('{from_name}', e.from.name)
                .replace('{from_address}', e.from.address)
                .replace('{to_name}', e.to.name)
                .replace('{to_address}', e.to.address)
                .replace('{body}', e.body)
        });

        document.getElementById('result').innerHTML = html;
    }
};

window.addEventListener('load', () => Sender.run(), false);