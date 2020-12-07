/**
 * @Description: code码
 */
const RETURN_CODE = [{
    code: 200,
    msg: '执行成功'
},
{
    code: 500,
    msg: '字段校验不通过'
},
{
    code: 501,
    msg: '无法匹配数据'
},
{
    code: 400,
    msg: '系统异常'
},
{
    code: 403,
    msg: '访问受限'
},
{
    code: 409,
    msg: '资源冲突或被锁定'
},
{
    code: 600,
    msg: '会话超时'
},
{
    code: 103,
    msg: '用户无角色，无法登陆'
},
{
   code: 107,
   msg: '验证码错误'
},
{
   code: 111,
   msg: '登录失败'
},
{
   code: 112,
   msg: '密码解密失败'
},
{
    code: 100,
    msg: '用户或密码错误'
},

{
    code: 700,
    msg: '用户登录超时,需重新登录'
},
{
    code: 706,
    msg: '任务已经被委托'
},

{
    code: 803,
    msg: '工作流约束字段不满足'
},
{
    code: 804,
    msg: '所查询的用户节点错误'
}
];

// 业务状态码
const BUSINESS_CODE = [{
      code: 702,
      msg: '同时承担（国家级项目+集团公司级项目）不得多于2个'
  },
  {
      code: 703,
      msg: '同时承担国家级项目不得多于1个'
  },
  {
      code: 102,
      msg: '合同占比超出范围'
  },
  {
      code: 104,
      msg: '该项目已经申报本奖项或其他奖项'
  },
  {
      code: 105,
      msg: '未生成预览文档'
  },
  {
      code: 704,
      msg: '项目编号已存在'
  },
  {
      code: 800,
      msg: '任务已经被下游审核通过'
  },
  {
      code: 801,
      msg: '任务已经被下游审核通过'
  },
  {
      code: 802,
      msg: '指定环境未定义'
  },
  {
      code: 805,
      msg: '无此流程记录'
  },
  {
      code: 806,
      msg: '业务主键被占用，无法启动工作流'
  },
  {
      code: 807,
      msg: '当前任务已经他人处理完毕'
  }
];

const CODE_SUCCESS = 200;
const SESSION_TIMEOUT = 600;
const LOGIN_TIMEOUT = 700;
const PARAMETER_NOT_MATCH = 204;
const SEARCH_FIELD_ILLEGAL = 400;
const PERMISSION_DENIED = 403;
const CURRENT_ELEMENT_WAS_OCCUPIED = 409;
const SYSTEM_ERROR = 500;
const FINISH_PROCESS = 800;

const PROCESS_ALREADY_APPROVED = 801;
export {
RETURN_CODE,
CODE_SUCCESS,
SESSION_TIMEOUT,
LOGIN_TIMEOUT,
FINISH_PROCESS,
PARAMETER_NOT_MATCH,
SEARCH_FIELD_ILLEGAL,
PERMISSION_DENIED,
CURRENT_ELEMENT_WAS_OCCUPIED,
SYSTEM_ERROR,
PROCESS_ALREADY_APPROVED,
BUSINESS_CODE // 业务状态码
};
