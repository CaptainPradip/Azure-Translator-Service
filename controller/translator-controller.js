const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const { API_KEY, API_URL, LOCATION, USER_CREDENTIALS } = require('../config/config')();

const supportedLanguages = [
    "ar", "bs", "bg", "ca", "zh-Hans", "zh-Hant", "hr", "cs", "da", "nl", "en",
    "et", "fi", "fr", "de", "el", "ht", "he", "hi", "mww", "hu", "id", "it", "ja",
    "sw", "tlh", "tlh-Qaak", "ko", "lv", "lt", "ms", "mt", "nb", "fa", "pl", "pt",
    "ro", "ru", "sm", "sr-Cyrl", "sr-Latn", "sk", "sl", "es", "sv", "ty", "ta", "te",
    "th", "to", "tr", "uk", "ur", "vi", "cy", "yua"
];

const validateLanguages = function validateLanguages(to) {
    if (!Array.isArray(to) || to.length === 0) {
        return false; // 'to' should be an array and should not be empty
    }

    for (const lang of to) {
        if (!supportedLanguages.includes(lang)) {
            return false; // Invalid language code provided
        }
    }

    return true; // All languages are valid
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.translate = async (req, res, next) => {
    try {
        if (req.headers.authorization === undefined) {
            res.status(401).send({
                responses: [
                    {
                        error: {
                            value: "401",
                            msg: "Please provide Basic Authorization using client id and secret given",
                        },
                    },
                ],
            });
        } else {
            let encoded = req.headers.authorization.split(" ")[1];
            let decoded = Buffer.from(encoded, "base64").toString("ascii");
            let client_id = decoded.split(":")[0];
            let client_secret = decoded.split(":")[1];
            let { from, to, text } = req.body;

            if (
                client_id === USER_CREDENTIALS.client_id &&
                client_secret === USER_CREDENTIALS.client_secret
            ) {
                if (!req.body || !from || !to || !text) {
                    return res.status(400).json({ message: "Bad request - missing required fields" });
                } else {
                    if (!validateLanguages(to)) {
                        return res.status(400).json({ error: "Invalid 'to' language(s) provided." });
                    }
                    if (!supportedLanguages.includes(from)) {
                        return res.status(400).json({ error: "Invalid 'from' language(s) provided." });
                    }
                    axios({
                        baseURL: API_URL,
                        url: '/translate',
                        method: 'post',
                        headers: {
                            'Ocp-Apim-Subscription-Key': API_KEY,
                            // location required if you're using a multi-service or regional (not global) resource.
                            'Ocp-Apim-Subscription-Region': LOCATION,
                            'Content-type': 'application/json',
                            'X-ClientTraceId': uuidv4().toString()
                        },
                        params: {
                            'api-version': '3.0',
                            'from': from,
                            'to': to
                        },
                        data: [{
                            'text': text
                        }],
                        responseType: 'json'
                    }).then(function (response) {
                        console.log(JSON.stringify(response.data, null, 4));
                        res.json(response.data[0]);
                    }).catch((error) => {
                        console.log(error)
                        res.send(error);
                    });
                }

            } else {
                res.status(401).send({
                    responses: [
                        {
                            error: {
                                value: "401",
                                msg: "Authentication Failed, Please provide basic token using credentials",
                            },
                        },
                    ],
                });
            }
            console.log(req.body, API_URL)
        }
    } catch (err) {
        next(err);
    }
};

