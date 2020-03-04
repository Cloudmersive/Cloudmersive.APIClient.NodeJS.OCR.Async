# CloudmersiveOcrApiClientAsync.PreprocessingApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**preprocessingBinarize**](PreprocessingApi.md#preprocessingBinarize) | **POST** /ocr/preprocessing/image/binarize | Convert an image of text into a binarized (light and dark) view
[**preprocessingBinarizeAdvanced**](PreprocessingApi.md#preprocessingBinarizeAdvanced) | **POST** /ocr/preprocessing/image/binarize/advanced | Convert an image of text into a binary (light and dark) view with ML
[**preprocessingGetPageAngle**](PreprocessingApi.md#preprocessingGetPageAngle) | **POST** /ocr/preprocessing/image/get-page-angle | Get the angle of the page / document / receipt
[**preprocessingUnrotate**](PreprocessingApi.md#preprocessingUnrotate) | **POST** /ocr/preprocessing/image/unrotate | Detect and unrotate a document image
[**preprocessingUnrotateAdvanced**](PreprocessingApi.md#preprocessingUnrotateAdvanced) | **POST** /ocr/preprocessing/image/unrotate/advanced | Detect and unrotate a document image (advanced)
[**preprocessingUnskew**](PreprocessingApi.md#preprocessingUnskew) | **POST** /ocr/preprocessing/image/unskew | Detect and unskew a photo of a document


<a name="preprocessingBinarize"></a>
# **preprocessingBinarize**
> &#39;Blob&#39; preprocessingBinarize(imageFile)

Convert an image of text into a binarized (light and dark) view

Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.

### Example
```javascript
var CloudmersiveOcrApiClientAsync = require('cloudmersive-ocr-api-client-async');
var defaultClient = CloudmersiveOcrApiClientAsync.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClientAsync.PreprocessingApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

apiInstance.preprocessingBinarize(imageFile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="preprocessingBinarizeAdvanced"></a>
# **preprocessingBinarizeAdvanced**
> &#39;Blob&#39; preprocessingBinarizeAdvanced(imageFile)

Convert an image of text into a binary (light and dark) view with ML

Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.

### Example
```javascript
var CloudmersiveOcrApiClientAsync = require('cloudmersive-ocr-api-client-async');
var defaultClient = CloudmersiveOcrApiClientAsync.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClientAsync.PreprocessingApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

apiInstance.preprocessingBinarizeAdvanced(imageFile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="preprocessingGetPageAngle"></a>
# **preprocessingGetPageAngle**
> GetPageAngleResult preprocessingGetPageAngle(imageFile)

Get the angle of the page / document / receipt

Analyzes a photo or image of a document and identifies the rotation angle of the page.

### Example
```javascript
var CloudmersiveOcrApiClientAsync = require('cloudmersive-ocr-api-client-async');
var defaultClient = CloudmersiveOcrApiClientAsync.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClientAsync.PreprocessingApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

apiInstance.preprocessingGetPageAngle(imageFile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

[**GetPageAngleResult**](GetPageAngleResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="preprocessingUnrotate"></a>
# **preprocessingUnrotate**
> &#39;Blob&#39; preprocessingUnrotate(imageFile)

Detect and unrotate a document image

Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example
```javascript
var CloudmersiveOcrApiClientAsync = require('cloudmersive-ocr-api-client-async');
var defaultClient = CloudmersiveOcrApiClientAsync.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClientAsync.PreprocessingApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

apiInstance.preprocessingUnrotate(imageFile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="preprocessingUnrotateAdvanced"></a>
# **preprocessingUnrotateAdvanced**
> &#39;Blob&#39; preprocessingUnrotateAdvanced(imageFile)

Detect and unrotate a document image (advanced)

Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example
```javascript
var CloudmersiveOcrApiClientAsync = require('cloudmersive-ocr-api-client-async');
var defaultClient = CloudmersiveOcrApiClientAsync.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClientAsync.PreprocessingApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

apiInstance.preprocessingUnrotateAdvanced(imageFile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="preprocessingUnskew"></a>
# **preprocessingUnskew**
> &#39;Blob&#39; preprocessingUnskew(imageFile)

Detect and unskew a photo of a document

Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example
```javascript
var CloudmersiveOcrApiClientAsync = require('cloudmersive-ocr-api-client-async');
var defaultClient = CloudmersiveOcrApiClientAsync.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClientAsync.PreprocessingApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

apiInstance.preprocessingUnskew(imageFile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

