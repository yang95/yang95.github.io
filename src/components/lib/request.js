/**
 * Created by Administrator on 2018/10/20 0020.
 */

import axios from 'axios';

export default{
  get(url,callback){
    axios.get(url)
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  post(url,param,callback){
    axios.post(url, param)
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
}