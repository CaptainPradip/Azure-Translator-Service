# Azure-Translator-Service
# Text Translator API

## Author: Pradip Nemane

## Purpose:

This is a RESTful API that allows you to translate text from one language to another. It uses the Text Translator service to perform the translations.The Translate Text API is a powerful tool that enables developers to add machine translation capabilities to their applications. With this API, users can easily translate text from one language to another in a variety of scenarios, such as multilingual chatbots, content localization, and more.

The Translate Text API supports a wide range of languages and dialects, making it an ideal solution for applications that require translation across multiple languages.

## Getting Started

To use this API, you will need the following:
To use this API, you will need the following:
- An Translate Text API service. The API is running at http://159.65.162.167:3005/api/v1/translate.
- the client id, secret
* This document provides details of the API and how to use it. You can get a more technical information about the API here: http://159.65.162.167:3005/translator-api-docs.

### Authentication

This API uses HTTP Basic authentication. To authenticate, include your Text Translator client-id key as the username and client secret in the request header. For example:

```
Authorization: Basic YOUR_API_KEY_HERE
```
 ## Working of Text Translator API 

 The Translator Service API acts as a wrapper over the Azure Translator Service and enables developers to easily access its capabilities. By using this API, developers can build intelligent, multi-language solutions for their applications across all supported languages.

With Translator Service API, users can 
- easily translate text from one language to another, 
- detect the language of a given piece of text, and 
- obtain a list of supported languages.

## Text Translator API Details
The API is available at http://159.65.162.167:3005/api/v1/
 ## Endpoint: **`POST /translate`**
 
 ### API Request
To use the API, send a POST request to the `/translate` endpoint with a JSON payload containing the text to be translated, the source language, and the target languages. Here is an example request:

**Sample Payload**

```json
{
  "text": "Hello, world!",
  "from": "en",
  "to": ["es", "fr", "de"]
}
```
This will translate the text "Hello, world!" from English (`en`) to Spanish (`es`), French (`fr`), and German (`de`).

| Name        | Type    | In    | Required | Description                                                                                                                                          |
| ----------- | ------- | ----- | -------- | --------------------------------------------------------------------- |
| `text`  | string  | body | yes       | The text to be translated. |
| `from`   | string | body  | yes      | The language code of the source language. Defaults to 'en' if not specified.|
| `to`   | string array | body  | yes      | The language codes of the target languages. ex . ["es", "fr", "de"] |

### API Authentication
The API require a basic authentication token sent in the `Authorization` header. Basic API token can be generated using client_id, client_secret provided.

Example Authorization Header:

`Authorization: Basic YOUR_TOKEN`

 
 Alternatively, In postman basic token can be added in Authorization as below:
 
<img width="1310" alt="image" src="https://user-images.githubusercontent.com/24209468/235490747-6096c36f-5add-40e7-a9d3-fae78d3b6e0c.png">


### API Response
The response will be a JSON object containing an array of translation objects, one for each target language. Each translation object will contain the translated text and the target language code. Here is an example response:

```
{
    "translations": [
        {
            "text": "¡Hola mundo!",
            "to": "es"
        },
        {
            "text": "Salut tout le monde!",
            "to": "fr"
        },
        {
            "text": "Hallo Welt!",
            "to": "de"
        }
    ]
}

```

 **Translator language support**. 
 
 Translator API supports below languages. You can use their corresponding codes while sending request to it.
 | Language | Code |
|---------|------|
| Arabic | ar |
| Bulgarian | bg |
| Catalan | ca |
| Chinese Simplified | zh-Hans |
| Chinese Traditional | zh-Hant |
| Czech | cs |
| Danish | da |
| Dutch | nl |
| English | en |
| Estonian | et |
| Finnish | fi |
| French | fr |
| German | de |
| Greek | el |
| Haitian Creole | ht |
| Hebrew | he |
| Hindi | hi |
| Hmong Daw | mww |
| Hungarian | hu |
| Indonesian | id |
| Italian | it |
| Japanese | ja |
| Klingon | tlh |
| Klingon (plqaD) | tlh-Qaak |
| Korean | ko |
| Latvian | lv |
| Lithuanian | lt |
| Malay | ms |
| Maltese | mt |
| Norwegian | no |
| Persian | fa |
| Polish | pl |
| Portuguese | pt |
| Queretaro Otomi | otq |
| Romanian | ro |
| Russian | ru |
| Serbian (Cyrillic) | sr-Cyrl |
| Serbian (Latin) | sr-Latn |
| Slovak | sk |
| Slovenian | sl |
| Spanish | es |
| Swedish | sv |
| Tamil | ta |
| Telugu | te |
| Thai | th |
| Turkish | tr |
| Ukrainian | uk |
| Urdu | ur |
| Vietnamese | vi |
| Welsh | cy |

 **Status codes**
| Status code      | Description |
|----------------- |-----------------------------------------------------|
| 200 OK           | Indicates a successful response with The translated text for each target language.|
| 400 Bad Request  | The target language ('To' field), ('From' field)  is missing or invalid. |
| 401 Unauthorized | Indicates that either Authorization header is missing or invalid token is sent|



## Start using the API:
To see how API works, start sending requests to it. 

You can create your own request by following this document, using swagger API [specification](http://159.65.162.167:3005/translator-api-docs) or you can simply import below collection into postman and send request to API.

Steps to send request to API:
 1. Download [POSTMAN Collection](https://github.com/CaptainPradip/Azure-Translator-Service/blob/main/Translator%20Service.postman_collection.json)
 2. In postman select import the downloaded collection. If you're unfamiliar with importing collections into the postman, follow [this guide](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman)
 3. Open the Translator Service request. Add Basic Authentication, refer API Authentication section.
 4. Navigate to Body -> raw
 5. 
   <img width="1310" alt="image" src="https://user-images.githubusercontent.com/24209468/235490942-7f1bf7e4-0acc-465e-86be-a56dff368db8.png">

 5. Hit the Send button to send request to API. For valid requests, API returns requested information about translation object will contain the translated text and the target language code.
 
<img width="1310" alt="image" src="https://user-images.githubusercontent.com/24209468/235491118-5fa96cc9-8e50-4c04-96b1-13b4b7545e82.png">

## Built With

* [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
* [axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
* [Microsoft Translator API](https://azure.microsoft.com/en-us/services/cognitive-services/translator-text-api/) - A cloud-based machine translation service provided by Microsoft Azure Cognitive Services.
