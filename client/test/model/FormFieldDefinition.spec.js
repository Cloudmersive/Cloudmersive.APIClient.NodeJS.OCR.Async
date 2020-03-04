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
    instance = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
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

  describe('FormFieldDefinition', function() {
    it('should create an instance of FormFieldDefinition', function() {
      // uncomment below and update the code to test FormFieldDefinition
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be.a(CloudmersiveOcrApiClientAsync.FormFieldDefinition);
    });

    it('should have the property fieldID (base name: "FieldID")', function() {
      // uncomment below and update the code to test the property fieldID
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property leftAnchor (base name: "LeftAnchor")', function() {
      // uncomment below and update the code to test the property leftAnchor
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property topAnchor (base name: "TopAnchor")', function() {
      // uncomment below and update the code to test the property topAnchor
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property bottomAnchor (base name: "BottomAnchor")', function() {
      // uncomment below and update the code to test the property bottomAnchor
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property alternateAnchor (base name: "AlternateAnchor")', function() {
      // uncomment below and update the code to test the property alternateAnchor
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property anchorMode (base name: "AnchorMode")', function() {
      // uncomment below and update the code to test the property anchorMode
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "DataType")', function() {
      // uncomment below and update the code to test the property dataType
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property targetDigitCount (base name: "TargetDigitCount")', function() {
      // uncomment below and update the code to test the property targetDigitCount
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property minimumCharacterCount (base name: "MinimumCharacterCount")', function() {
      // uncomment below and update the code to test the property minimumCharacterCount
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property allowNumericDigits (base name: "AllowNumericDigits")', function() {
      // uncomment below and update the code to test the property allowNumericDigits
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property verticalAlignmentType (base name: "VerticalAlignmentType")', function() {
      // uncomment below and update the code to test the property verticalAlignmentType
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property horizontalAlignmentType (base name: "HorizontalAlignmentType")', function() {
      // uncomment below and update the code to test the property horizontalAlignmentType
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property targetFieldWidthRelative (base name: "TargetFieldWidth_Relative")', function() {
      // uncomment below and update the code to test the property targetFieldWidthRelative
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property targetFieldHeightRelative (base name: "TargetFieldHeight_Relative")', function() {
      // uncomment below and update the code to test the property targetFieldHeightRelative
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property targetFieldHorizontalAdjustment (base name: "TargetFieldHorizontalAdjustment")', function() {
      // uncomment below and update the code to test the property targetFieldHorizontalAdjustment
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property targetFieldVerticalAdjustment (base name: "TargetFieldVerticalAdjustment")', function() {
      // uncomment below and update the code to test the property targetFieldVerticalAdjustment
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property ignore (base name: "Ignore")', function() {
      // uncomment below and update the code to test the property ignore
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "Options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new CloudmersiveOcrApiClientAsync.FormFieldDefinition();
      //expect(instance).to.be();
    });

  });

}));
