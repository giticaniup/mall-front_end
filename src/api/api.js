/**
 * Created by zhongchengyong on 2018/5/5.
 */
import {
  wxRequest
}from '../utils/wxRequest'

const apiUrl = 'http://localhost:8082/';

/**
 * 微信相关接口
 */
const wxJsCode2Session = (params) => wxRequest(params, apiUrl + 'api/code2session');
const test = (params) => wxRequest(params, apiUrl + 'api/test');

module.exports = {
  wxJsCode2Session,
  test
};
