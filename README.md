# Azure-Translator-Service
# Text Translator API

## Author: Pradip Nemane

## Purpose:

This is a RESTful API that allows you to translate text from one language to another. It uses the Text Translator service to perform the translations.The Translate Text API is a powerful tool that enables developers to add machine translation capabilities to their applications. With this API, users can easily translate text from one language to another in a variety of scenarios, such as multilingual chatbots, content localization, and more.

The Translate Text API supports a wide range of languages and dialects, making it an ideal solution for applications that require translation across multiple languages.

## Getting Started

### Prerequisites

To use this API, you will need the following:

* An Translate Text API service. You can get a more information about the API request  for the http://159.65.162.167:3005/translator-api-docs.

* An HTTP client (e.g., [Postman](https://www.postman.com/) or [curl](https://curl.se/)) to send requests to the API.
* To Run Application in Local below You need the API KEY and LOCATION follow below steps to get it 

1.  Azure subscription - [Create one for free](https://azure.microsoft.com/free/cognitive-services/)

2. A Cognitive Services or Translator resource. Once you have your Azure subscription, create a single-service or a multi-service resource, in the Azure portal, to get your key and endpoint. After it deploys, select Go to resource.

3. You can use the free pricing tier (F0) to try the service, and upgrade later to a paid tier for production.

You need the key and endpoint from the resource to connect your application to the Translator service. Later, you paste your key and endpoint into the config file.
### Installing

To get started with the API, you can clone this repository to your local machine:

```bash
git clone https://github.com/CaptainPradip/Azure-Translator-Service.git
```

Then, navigate to the root directory of the project and install the dependencies:

```bash
cd Azure-Translator-Service
npm install
```
update the API KEY and LOCATION from the Azure in config file

Finally, start the server:

```bash
npm start
```

The API will be running at `http://159.65.162.167:3005/api/v1/translate`.

### Usage

To use the API, send a POST request to the `/translate` endpoint with a JSON payload containing the text to be translated, the source language, and the target languages. Here is an example request:

```json
{
  "text": "Hello, world!",
  "from": "en",
  "to": ["es", "fr", "de"]
}
```

This will translate the text "Hello, world!" from English (`en`) to Spanish (`es`), French (`fr`), and German (`de`).

The response will be a JSON object containing an array of translation objects, one for each target language. Each translation object will contain the translated text and the target language code. Here is an example response:

```json
{
  "translations": [
    {
      "text": "¡Hola mundo!",
      "to": "es"
    },
    {
      "text": "Bonjour le monde!",
      "to": "fr"
    },
    {
      "text": "Hallo Welt!",
      "to": "de"
    }
  ]
}
```

### Authentication

This API uses HTTP Basic authentication. To authenticate, include your Text Translator API key as the username in the request header. For example:

```
Authorization: Basic YOUR_API_KEY_HERE
```
 ## Working of Text Translator API 

 The Translator Service API is a cloud-based neural machine translation service that is part of the Azure Cognitive Services family of REST APIs. It can be used with any operating system and powers many Microsoft products and services, as well as thousands of businesses worldwide, for language translation and other language-related operations.

This API acts as a wrapper over the Translator Service and enables developers to easily access its capabilities. By using this API, developers can build intelligent, multi-language solutions for their applications across all supported languages.

With Translator Service API, users can easily translate text from one language to another, detect the language of a given piece of text, and obtain a list of supported languages. The API also offers advanced features such as customization of translation models and automatic language detection.

## Text Translator API Details
The API is available at http://159.65.162.167:3005/api/v1/
 ### Endpoint: **`POST /translate`**

**Payload**
```json
{
  "text": "Hello, world!",
  "from": "en",
  "to": ["es", "fr", "de"]
}
```

| Name        | Type    | In    | Required | Description                                                                                                                                          |
| ----------- | ------- | ----- | -------- | --------------------------------------------------------------------- |
| `text`  | string  | body | yes       | The text to be translated. |
| `from`   | string | body  | yes      | The language code of the source language. Defaults to 'en' if not specified.|
| `to`   | string array | body  | yes      | The language codes of the target languages. ex .["fr", "zu"] |

## API Authentication
The API require a basic authentication token sent in the `Authorization` header. Basic API token can be generated using client_id, client_secret provided.

Example:

`Authorization: Basic YOUR_TOKEN`

 
 Alternatively, In postman basic token can be added in Authorization as below:
<img width="1310" alt="image" src="https://user-images.githubusercontent.com/24209468/235453957-debbd1a0-de5e-4649-b9b9-4f1132cb138e.png">



 **Sample Request:**
 <img width="1310" alt="image" src="https://user-images.githubusercontent.com/24209468/235454045-37ae6fcc-8df8-4884-a0ae-dd44b763d953.png">

```
{
    "text": "I would really like to drive your car around the block a few times!",
    "from": "en",
    "to": [
        "ar",
        "bn",
        "cs",
        "de",
        "es",
        "fr",
        "hi",
        "id",
        "it",
        "ja",
        "ko",
        "ms",
        "nl",
        "pt",
        "ru",
        "th",
        "tr",
        "uk",
        "ur",
        "vi",
        "zh-Hans",
        "zh-Hant",
        "zu"
    ]
}


```
 **Translator language support**
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

**Sample Response:**
<img width="1310" alt="image" src="https://user-images.githubusercontent.com/24209468/235454335-f9c167e7-09af-4ddc-9470-d24c778bc6de.png">

```
{
    "translations": [
        {
            "text": "أود حقا قيادة سيارتك حول الكتلة عدة مرات!",
            "to": "ar"
        },
        {
            "text": "আমি সত্যিই কয়েকবার ব্লকের চারপাশে আপনার গাড়ি চালাতে চাই!",
            "to": "bn"
        },
        {
            "text": "Opravdu bych chtěl projet vaše auto kolem bloku několikrát!",
            "to": "cs"
        },
        {
            "text": "Ich würde wirklich gerne ein paar Mal mit Ihrem Auto um den Block fahren!",
            "to": "de"
        },
        {
            "text": "¡Realmente me gustaría conducir su automóvil alrededor de la cuadra varias veces!",
            "to": "es"
        },
        {
            "text": "J’aimerais vraiment conduire votre voiture autour du pâté de maisons plusieurs fois!",
            "to": "fr"
        },
        {
            "text": "मैं वास्तव में कुछ बार ब्लॉक के चारों ओर अपनी कार चलाना चाहता हूं!",
            "to": "hi"
        },
        {
            "text": "Saya benar-benar ingin mengendarai mobil Anda di sekitar blok beberapa kali!",
            "to": "id"
        },
        {
            "text": "Mi piacerebbe davvero guidare la tua auto intorno all'isolato un paio di volte!",
            "to": "it"
        },
        {
            "text": "私は本当にあなたの車をブロックの周りを数回運転したいと思います!",
            "to": "ja"
        },
        {
            "text": "나는 정말로 당신의 차를 몇 번 블록 주위로 운전하고 싶습니다!",
            "to": "ko"
        },
        {
            "text": "Saya benar-benar ingin memandu kereta anda di sekitar blok beberapa kali!",
            "to": "ms"
        },
        {
            "text": "Ik zou heel graag een paar keer met je auto een blokje om willen rijden!",
            "to": "nl"
        },
        {
            "text": "Eu realmente gostaria de dirigir seu carro ao redor do quarteirão algumas vezes!",
            "to": "pt"
        },
        {
            "text": "Мне бы очень хотелось несколько раз прокатиться на вашей машине по кварталу!",
            "to": "ru"
        },
        {
            "text": "ฉันอยากจะขับรถของคุณไปรอบ ๆ บล็อกสองสามครั้ง!",
            "to": "th"
        },
        {
            "text": "Arabanızı bloğun etrafında birkaç kez sürmek istiyorum!",
            "to": "tr"
        },
        {
            "text": "Мені б дуже хотілося кілька разів проїхати на вашому автомобілі по кварталу!",
            "to": "uk"
        },
        {
            "text": "میں واقعی آپ کی گاڑی کو بلاک کے ارد گرد چند بار چلانا چاہتا ہوں!",
            "to": "ur"
        },
        {
            "text": "Tôi thực sự muốn lái xe của bạn xung quanh khối một vài lần!",
            "to": "vi"
        },
        {
            "text": "我真的很想开你的车绕街区转几次！",
            "to": "zh-Hans"
        },
        {
            "text": "我真的很想開你的車繞街區轉幾次！",
            "to": "zh-Hant"
        },
        {
            "text": "Ngingathanda ngempela ukushayela imoto yakho emhlabeni block izikhathi ezimbalwa!",
            "to": "zu"
        }
    ]
}

```

## Start using the API:
To see how API works, by sending requests to it. 

You can create your own request by following the API [specification](http://159.65.162.167:3005/translator-api-docs) or you can simply import below collection into postman and send request to API.

Steps to send request to API:
 1. Download [POSTMAN Collection](https://github.com/CaptainPradip/Azure-Translator-Service/blob/main/Translator%20Service.postman_collection.json)
 3. In postman select import the downloaded collection. If you're unfamiliar with importing collections into the postman, follow [this guide](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman)
 4. Open the Translator Service request. Add Basic Authentication, refer API Authentication section.
 5. Navigate to Body -> raw
 
 6. Hit the Send button to send request to API. For valid requests, API returns requested information about translation object will contain the translated text and the target language code.
## Built With

* [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
* [axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
* [Microsoft Translator API](https://azure.microsoft.com/en-us/services/cognitive-services/translator-text-api/) - A cloud-based machine translation service provided by Microsoft Azure Cognitive Services.
