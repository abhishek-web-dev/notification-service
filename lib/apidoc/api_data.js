define({ "api": [
  {
    "group": "Health_Check",
    "version": "1.0.0",
    "description": "<p>API for checking server health.</p>",
    "type": "get",
    "url": "/health",
    "title": "API to check server health",
    "success": {
      "examples": [
        {
          "title": "Success-Response: Status - 200",
          "content": "{\n    \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/modules/health/route.js",
    "groupTitle": "Health_Check",
    "name": "GetHealth"
  },
  {
    "group": "STORY",
    "version": "1.0.0",
    "description": "<p>API to get user instagram stories.</p>",
    "type": "get",
    "url": "/story/:userId",
    "title": "get user stories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Send user insta id as a path variable</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: status - 200",
          "content": "{\n    \"statusCode\": 200,\n    \"result\": [\n        {\n            \"display_resources\": [\n                {\n                    \"src\": \"https://instagram.fmel14-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/254895551_171523801861836_802262100501037570_n.jpg?_nc_ht=instagram.fmel14-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=m7cVhoDW538AX8KC6tC&edm=AHlfZHwBAAAA&ccb=7-4&oh=3a92f0fa6b91bdfd5d635b3a1d449c89&oe=618C9D6C&_nc_sid=21929d\",\n                    \"config_width\": 640,\n                    \"config_height\": 1137\n                },\n                {\n                    \"src\": \"https://instagram.fmel14-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/254895551_171523801861836_802262100501037570_n.jpg?_nc_ht=instagram.fmel14-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=m7cVhoDW538AX8KC6tC&edm=AHlfZHwBAAAA&ccb=7-4&oh=d6a775303ccd1e5616df3419a8170d14&oe=618C1DEC&_nc_sid=21929d\",\n                    \"config_width\": 750,\n                    \"config_height\": 1332\n                },\n                {\n                    \"src\": \"https://instagram.fmel14-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/254895551_171523801861836_802262100501037570_n.jpg?_nc_ht=instagram.fmel14-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=m7cVhoDW538AX8KC6tC&edm=AHlfZHwBAAAA&ccb=7-4&oh=8cd748ba317e487079abc78c65b51910&oe=618C82CF&_nc_sid=21929d\",\n                    \"config_width\": 1080,\n                    \"config_height\": 1919\n                }\n            ],\n            \"video_resources\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: status - 500",
          "content": "{\n    \"statusCode\": 400,\n    \"error\": {\n        \"errorDescription\": \"Invalid body in request\",\n        \"type\": \"\",\n        \"errorUserTitle\": \"\",\n        \"errorUserMsg\": \"Bad Request\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/modules/user/route.js",
    "groupTitle": "STORY",
    "name": "GetStoryUserid"
  }
] });
