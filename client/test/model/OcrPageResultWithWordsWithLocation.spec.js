/**
 * ocrapi
 * The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveOcrApiClientAsync);
  }
}(this, function(expect, CloudmersiveOcrApiClientAsync) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveOcrApiClientAsync.OcrPageResultWithWordsWithLocation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OcrPageResultWithWordsWithLocation', function() {
    it('should create an instance of OcrPageResultWithWordsWithLocation', function() {
      // uncomment below and update the code to test OcrPageResultWithWordsWithLocation
      //var instane = new CloudmersiveOcrApiClientAsync.OcrPageResultWithWordsWithLocation();
      //expect(instance).to.be.a(CloudmersiveOcrApiClientAsync.OcrPageResultWithWordsWithLocation);
    });

    it('should have the property pageNumber (base name: "PageNumber")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instane = new CloudmersiveOcrApiClientAsync.OcrPageResultWithWordsWithLocation();
      //expect(instance).to.be();
    });

    it('should have the property successful (base name: "Successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instane = new CloudmersiveOcrApiClientAsync.OcrPageResultWithWordsWithLocation();
      //expect(instance).to.be();
    });

    it('should have the property words (base name: "Words")', function() {
      // uncomment below and update the code to test the property words
      //var instane = new CloudmersiveOcrApiClientAsync.OcrPageResultWithWordsWithLocation();
      //expect(instance).to.be();
    });

  });

}));
