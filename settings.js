// Change the url to the domain of your app
exports.url = 'https://sendgridintegration.herokuapp.com/';

exports.senderEmail = "ciro@construirbarato.com.br";
exports.senderName = "Ciro Miranda";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = null;

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;

// receive an email when a new signup is confirmed
exports.sendNotification = false;
exports.notificationEmail = "admin@example.com";
