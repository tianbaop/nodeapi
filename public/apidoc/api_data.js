define({ "api": [
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
    "filename": "routes/basicData/basicData.js",
    "groupTitle": "basicData"
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
    "url": "/menuManagement/GetAll",
    "title": "菜单管理查询 分页",
    "description": "<p>菜单管理查询 分页</p>",
    "name": "GetAll",
    "group": "menuManagement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "moduleParentId",
            "description": "<p>必填如果是一级就传0其他的填上一级的id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "skipCount",
            "description": "<p>分页跳过多少条数据</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "maxResultCount",
            "description": "<p>分页最大获取多少条数据</p>"
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
          "content": "{\n         \"status\": 200,\n         \"success\": true,\n         \"result\": [\n         ],\n         \"message\": \"成功\"\n     }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/menuManagement/GetAll"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/systemManagement/menuManagement.js",
    "groupTitle": "menuManagement"
  },
  {
    "type": "post",
    "url": "/menuManagement/GetTree",
    "title": "菜单管理下拉树",
    "description": "<p>菜单管理下拉树</p>",
    "name": "GetTree",
    "group": "menuManagement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "moduleParentId",
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
          "content": "{\n          \"status\": 200,\n          \"success\": true,\n          \"result\": [\n          ],\n          \"message\": \"成功\"\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/menuManagement/GetTree"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/systemManagement/menuManagement.js",
    "groupTitle": "menuManagement"
  },
  {
    "type": "get",
    "url": "/menuManagement/Getitem",
    "title": "菜单管理查询 通过id查询",
    "description": "<p>菜单管理查询 通过id查询</p>",
    "name": "Getitem",
    "group": "menuManagement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>必填</p>"
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
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n          \"status\": 200,\n          \"success\": true,\n          \"result\": [\n          ],\n          \"message\": \"成功\"\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/menuManagement/Getitem"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/systemManagement/menuManagement.js",
    "groupTitle": "menuManagement"
  },
  {
    "type": "post",
    "url": "/menuManagement/add",
    "title": "菜单管理新增数据",
    "description": "<p>菜单管理新增数据</p>",
    "name": "add",
    "group": "menuManagement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modularCoding",
            "description": "<p>模块编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "moduleName",
            "description": "<p>模块名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multilingualKey",
            "description": "<p>多语言Key</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "superiorMenuId",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routeAddress",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
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
          "content": "{\n          \"status\": 200,\n          \"success\": true,\n          \"result\": [\n          ],\n          \"message\": \"成功\"\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/menuManagement/add"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/systemManagement/menuManagement.js",
    "groupTitle": "menuManagement"
  },
  {
    "type": "post",
    "url": "/menuManagement/delete",
    "title": "菜单管理删除数据",
    "description": "<p>菜单管理删除数据</p>",
    "name": "delete",
    "group": "menuManagement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>id数组集合</p>"
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
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n          \"status\": 200,\n          \"success\": true,\n          \"result\": [\n          ],\n          \"message\": \"成功\"\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/menuManagement/delete"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/systemManagement/menuManagement.js",
    "groupTitle": "menuManagement"
  },
  {
    "type": "post",
    "url": "/menuManagement/updateStatus",
    "title": "菜单管理修改数据启用状态",
    "description": "<p>菜单管理修改数据启用状态</p>",
    "name": "updateStatus",
    "group": "menuManagement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "moduleList",
            "description": "<p>模块修改数据的集合</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数实例:",
          "content": "moduleList[\n    {\n        id:1,//id\n        status:1,//状态{1为启用，0为停用}\n    }\n]",
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
    "success": {
      "examples": [
        {
          "title": "返回格式:",
          "content": "{\n          \"status\": 200,\n          \"success\": true,\n          \"result\": [\n          ],\n          \"message\": \"成功\"\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/menuManagement/updateStatus"
      }
    ],
    "version": "1.1.0",
    "filename": "routes/systemManagement/menuManagement.js",
    "groupTitle": "menuManagement"
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
    "filename": "routes/userAccount/users.js",
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
    "filename": "routes/userAccount/users.js",
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
    "filename": "routes/userAccount/users.js",
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
    "filename": "routes/userAccount/users.js",
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
    "filename": "routes/userAccount/users.js",
    "groupTitle": "users"
  }
] });
