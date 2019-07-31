define({ "api": [
  {
    "type": "post",
    "url": "/article/addArticle",
    "title": "添加文章",
    "description": "<p>添加文章</p>",
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
            "description": "<p>文章标题 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>作者 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>来源</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sourceURL",
            "description": "<p>来源地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "describes",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "html",
            "description": "<p>内容 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键词 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classification",
            "description": "<p>分类 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classificationTop",
            "description": "<p>子分类 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "img_url",
            "description": "<p>图片</p>"
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
          "content": "{\n \"status\": 200,\n \"success\": true,\n \"result\": [],\n \"message\": \"成功\"\n}",
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
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [{\n        \"id\": 0,\n        \"title\": \"\",\n        \"author\": \"\",\n        \"source\": \"\",\n        \"sourceURL\": \"\",\n        \"describes\": \"\",\n        \"content\": \"\",\n        \"browse\":  \"\"’,\n        \"classification\": \"\",\n        \"Keyword\": \"\",\n        \"img\": \"\",\n        \"datetime\": \"\",\n        \"clicks\": 2\n        },\n  ],\n  \"message\": \"成功\"\n}",
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
    "type": "get",
    "url": "/article/article_add_all_number",
    "title": "文章总数量",
    "description": "<p>查询文章总条数</p>",
    "name": "article_add_all_number",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "count",
            "description": "<p>返回的文章总数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": {\n        \"count\": 22\n    },\n    \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/article_add_all_number"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/article.js",
    "groupTitle": "article"
  },
  {
    "type": "delete",
    "url": "/article/deleteArticle",
    "title": "删除文章",
    "description": "<p>删除文章</p>",
    "name": "deleteArticle",
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
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id 必填</p>"
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
          "content": "{\n \"status\": 200,\n \"success\": true,\n \"result\": [],\n \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/deleteArticle"
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
            "defaultValue": "1",
            "description": "<p>第几页 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "defaultValue": "10",
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
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
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
      }
    },
    "sampleRequest": [
      {
        "url": "/article/list"
      }
    ],
    "version": "0.0.0",
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
    "url": "/article/updateArticle",
    "title": "修改文章",
    "description": "<p>修改文章</p>",
    "name": "updateArticle",
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
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>id 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>作者 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>来源</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sourceURL",
            "description": "<p>来源地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "describes",
            "description": "<p>必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "html",
            "description": "<p>内容 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键词 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classification",
            "description": "<p>分类 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classificationTop",
            "description": "<p>子分类 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "img_url",
            "description": "<p>图片</p>"
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
          "content": "{\n \"status\": 200,\n \"success\": true,\n \"result\": [],\n \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/article/updateArticle"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/article.js",
    "groupTitle": "article"
  },
  {
    "type": "get",
    "url": "/basicData/classifications_list",
    "title": "分类查询",
    "description": "<p>分类查询</p>",
    "name": "classifications_list",
    "group": "basicData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>必填如果是一级就传0其他的填上一级的id</p>"
          }
        ]
      }
    },
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
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "classification",
            "description": "<p>分类名</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "parent_int",
            "description": "<p>父级id</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "createCode",
            "description": "<p>创建人</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n         \"status\": 200,\n         \"success\": true,\n         \"result\": [\n             {\n                 \"id\": 16,\n                 \"classification\": \"\",\n                 \"datetime\": \"2018-08-05T14:00:00.000Z\",\n                 \"parent_int\": 15,\n                 \"createTime\": null,\n                 \"createCode\": null\n             }\n         ],\n         \"message\": \"成功\"\n     }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/basicData/classifications_list"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/basicData.js",
    "groupTitle": "basicData"
  },
  {
    "type": "post",
    "url": "/diary/addEssay",
    "title": "心情随笔 新增",
    "description": "<p>新增心情随笔</p>",
    "name": "addEssay",
    "group": "diary",
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
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isEnabled",
            "description": "<p>是否启用 必填</p>"
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
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [ \n     {\n                 \"author\": \"未知\",\n                 \"datetime\": \"2018-11-27T02:53:17.000Z\",\n                 \"content\": \"别为不属于自己的观众，演绎不擅长的人生\",\n     },\n  ],\n  \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/diary/addEssay"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/diary.js",
    "groupTitle": "diary"
  },
  {
    "type": "delete",
    "url": "/diary/deletediary",
    "title": "心情随笔删除",
    "description": "<p>删除心情随笔</p>",
    "name": "deletediary",
    "group": "diary",
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
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id 必填</p>"
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
          "content": "{\n \"status\": 200,\n \"success\": true,\n \"result\": [],\n \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/diary/deletediary"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/diary.js",
    "groupTitle": "diary"
  },
  {
    "type": "post",
    "url": "/diary/moodEssay",
    "title": "心情随笔 查询分页",
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
          "content": "{\n    \"status\": 200,\n    \"success\": true,\n    \"result\": [ \n     {\n                 \"author\": \"未知\",\n                 \"datetime\": \"2018-11-27T02:53:17.000Z\",\n                 \"content\": \"别为不属于自己的观众，演绎不擅长的人生\",\n     },\n  ],\n  \"message\": \"成功\"\n}",
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
  },
  {
    "type": "post",
    "url": "/login",
    "title": "登录",
    "description": "<p>登录</p>",
    "name": "login",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userCode",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "img",
            "description": "<p>头像图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "usergroup",
            "description": "<p>账号级别</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录验证token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n          \"status\": 200,\n          \"success\": true,\n          \"result\": {\n              \"datetime\": \"2019-05-16T07:29:59.000Z\",\n              \"id\": 1,\n              \"img\": \"/uploadImg/user_img/154563224052635.jpg\",\n              \"usergroup\": \"超级管理员\",\n              \"username\": \"田保平\",\n              \"token\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi55Sw5L-d5bmzIiwiaWF0IjoxNTY0NDU2NDc2LCJleHAiOjE1NjQ0OTI0NzZ9.vyqFuZrDeOgPftnLJ-V6RfAkIAtVRkfzo3FIaY2EtvE\"\n          },\n          \"message\": \"成功\"\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/login.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/users/addusers",
    "title": "用户 新增",
    "description": "<p>用户 新增</p>",
    "name": "addusers",
    "group": "users",
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
            "field": "img",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userCode",
            "description": "<p>账号 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "usergroup",
            "description": "<p>用户级别 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名 必填</p>"
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
        "url": "/users/addusers"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "delete",
    "url": "/users/deleteusers",
    "title": "删除用户",
    "description": "<p>删除用户</p>",
    "name": "deleteusers",
    "group": "users",
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
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id 必填</p>"
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
          "content": "{\n \"status\": 200,\n \"success\": true,\n \"result\": [],\n \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/users/deleteusers"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/list",
    "title": "用户信息 分页",
    "description": "<p>通过文章的id查询到单条详情数据</p>",
    "name": "list",
    "group": "users",
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
        "url": "/users/list"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/user_code",
    "title": "查询账号是否可注册",
    "description": "<p>查询账号是否可注册</p>",
    "name": "user_code",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userCode",
            "description": "<p>账号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isregister",
            "description": "<p>true为可注册false不可注册</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n         \"status\": 200,\n         \"success\": true,\n         \"result\": {\n             \"count\": 2\n         },\n         \"message\": \"成功\"\n     }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/users/user_code"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/user_pearson_all",
    "title": "用户总数量",
    "description": "<p>11111</p>",
    "name": "user_pearson_all",
    "group": "users",
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
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "count",
            "description": "<p>返回的用户数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n         \"status\": 200,\n         \"success\": true,\n         \"result\": {\n             \"count\": 2\n         },\n         \"message\": \"成功\"\n     }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/users/user_pearson_all"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  }
] });
