define({ "api": [
  {
    "type": "post",
    "url": "/article/addArticle",
    "title": "添加文章",
    "description": "<p>通过文章的id查询到单条详情数据</p>",
    "name": "addArticle",
    "group": "article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sourceURL",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "describe",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "html",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classification",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classificationTop",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "img",
            "description": "<p>必填</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [{\n        \"id\": 0,\n        \"title\": \"\",\n        \"author\": \"\",\n        \"source\": \"\",\n        \"sourceURL\": \"\",\n        \"describes\": \"\",\n        \"content\": \"\",\n          \"browse\":  \"\"’,\n          \"classification\": \"\",\n          \"Keyword\": \"\",\n          \"img\": \"\",\n          \"datetime\": \"\",\n          \"clicks\": 2\n        },\n  ],\n  \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/addArticle"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/article.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/articleDetails",
    "title": "文章查询  文章详情",
    "description": "<p>通过文章的id查询到单条详情数据</p>",
    "name": "articleDetails",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "defaultValue": "1",
            "description": "<p>必填</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [{\n        \"id\": 0,\n        \"title\": \"\",\n        \"author\": \"\",\n        \"source\": \"\",\n        \"sourceURL\": \"\",\n        \"describes\": \"\",\n        \"content\": \"\",\n          \"browse\":  \"\"’,\n          \"classification\": \"\",\n          \"Keyword\": \"\",\n          \"img\": \"\",\n          \"datetime\": \"\",\n          \"clicks\": 2\n        },\n  ],\n  \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/articleDetails"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/article.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/list",
    "title": "文章查询 分页",
    "description": "<p>分页查询文章， 选传其他条件查询</p>",
    "name": "list",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>第几页 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>请求多少条数据 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classification",
            "description": "<p>查询条件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [{\n        \"id\": 0,\n        \"title\": \"\",\n        \"author\": \"\",\n        \"source\": \"\",\n        \"sourceURL\": \"\",\n        \"describes\": \"\",\n        \"content\": \"\",\n          \"browse\":  \"\"’,\n          \"classification\": \"\",\n          \"Keyword\": \"\",\n          \"img\": \"\",\n          \"datetime\": \"\",\n          \"clicks\": 2\n        },\n  ],\n  \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/article.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/recommendedArticles",
    "title": "文章查询  推荐列表",
    "description": "<p>推荐的文章数据查询，默认推荐的数据为8条</p>",
    "name": "recommendedArticles1111",
    "group": "article",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [{\n        \"id\": 0,\n        \"title\": \"\",\n        \"author\": \"\",\n        \"source\": \"\",\n        \"sourceURL\": \"\",\n        \"describes\": \"\",\n        \"content\": \"\",\n          \"browse\":  \"\"’,\n          \"classification\": \"\",\n          \"Keyword\": \"\",\n          \"img\": \"\",\n          \"datetime\": \"\",\n          \"clicks\": 2\n        },\n  ],\n  \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/recommendedArticles"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/article.js",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/diary/moodEssay",
    "title": "心情随笔 分页",
    "description": "<p>通过文章的id查询到单条详情数据</p>",
    "name": "diary",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>第几页 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>请求多少条数据 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classification",
            "description": "<p>查询条件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [ \n     {\n               \"author\": \"未知\",\n               \"datetime\": \"2018-11-27T02:53:17.000Z\",\n               \"content\": \"别为不属于自己的观众，演绎不擅长的人生\",\n     },\n  ],\n  \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/diary/moodEssay"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/diary.js",
    "groupTitle": "diary"
  }
] });
