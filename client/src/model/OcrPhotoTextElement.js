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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Point'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Point'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClientAsync) {
      root.CloudmersiveOcrApiClientAsync = {};
    }
    root.CloudmersiveOcrApiClientAsync.OcrPhotoTextElement = factory(root.CloudmersiveOcrApiClientAsync.ApiClient, root.CloudmersiveOcrApiClientAsync.Point);
  }
}(this, function(ApiClient, Point) {
  'use strict';




  /**
   * The OcrPhotoTextElement model module.
   * @module model/OcrPhotoTextElement
   * @version 1.3.3
   */

  /**
   * Constructs a new <code>OcrPhotoTextElement</code>.
   * A single text in an OCR document
   * @alias module:model/OcrPhotoTextElement
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>OcrPhotoTextElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OcrPhotoTextElement} obj Optional instance to populate.
   * @return {module:model/OcrPhotoTextElement} The populated <code>OcrPhotoTextElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
      if (data.hasOwnProperty('XLeft')) {
        obj['XLeft'] = ApiClient.convertToType(data['XLeft'], 'Number');
      }
      if (data.hasOwnProperty('YTop')) {
        obj['YTop'] = ApiClient.convertToType(data['YTop'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('BoundingPoints')) {
        obj['BoundingPoints'] = ApiClient.convertToType(data['BoundingPoints'], [Point]);
      }
      if (data.hasOwnProperty('ConfidenceLevel')) {
        obj['ConfidenceLevel'] = ApiClient.convertToType(data['ConfidenceLevel'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Text of the word
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;
  /**
   * X location of the left edge of the word in pixels
   * @member {Number} XLeft
   */
  exports.prototype['XLeft'] = undefined;
  /**
   * Y location of the top edge of the word in pixels
   * @member {Number} YTop
   */
  exports.prototype['YTop'] = undefined;
  /**
   * Width of the word in pixels
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height of the word in pixels
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Points that form the bounding polygon around the text
   * @member {Array.<module:model/Point>} BoundingPoints
   */
  exports.prototype['BoundingPoints'] = undefined;
  /**
   * Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)
   * @member {Number} ConfidenceLevel
   */
  exports.prototype['ConfidenceLevel'] = undefined;



  return exports;
}));

