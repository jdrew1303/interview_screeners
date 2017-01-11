'use strict';

var IndexPage = function () {
  browser.get('/');
};

IndexPage.prototype = Object.create({}, {
  numberText: { get: function () { return element(by.css('.number-example')); }},

  // OTHER EXAMPLE TYPES
  // Another item that these can be broken down further into is FORM OBJECTS.
  // Form objects take a factory as an input and fill out forms with their
  // respective fields. Page objects may contain form objects. Form objects
  // should be in their own files.
  //
  // Using getters allows for the field to be referenced instead of calling a
  // function. This is similar to computed properties.
  // =====================================================================================
  //addButton:  { get: function () { return element(by.css('[value="add"]')); }},
  //yourName:   { get: function () { return element(by.model('yourName')); }},
  //greeting:   { get: function () { return element(by.binding('yourName')).getText(); }},
  //todoList:   { get: function () { return element.all(by.repeater('todo in todos')); }},
  //typeName:   { value: function (keys) { return this.yourName.sendKeys(keys); }},
  //todoAt:     { value: function (idx)  { return this.todoList.get(idx).getText(); }},
  //addTodo:    { value: function (todo) {
  //  this.todoText.sendKeys(todo);
  //  this.addButton.click();
  //}}
});

module.exports = IndexPage;
