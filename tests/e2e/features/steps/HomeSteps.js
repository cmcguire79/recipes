/* global require, browser, element, by, module */
(function(){
  'use strict';

  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);

  var expect = chai.expect;
  module.exports = function() {

    this.Given(/^I navigate to the home page$/, function (callback) {
      browser.get('http://localhost:8080').then(callback);
    });

    this.Then(/^The home page message is displayed$/, function(callback) {
      element.all(by.css('h1')).first().getText().then(function(text){
        expect(text).to.equal('Home');
        callback();
      });
    });

  };
}());
