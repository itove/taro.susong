import React, { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
// 全局样式
import './app.scss'
import Taro from '@tarojs/taro'
import { Env } from './env'

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    Taro.request({
      url: Env.apiUrl + 'wxconfig'
    })
    .then(res => {
      console.log(res)
      const data = res.data
      wx.config({
        // debug: true,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [],
        openTagList: ['wx-open-launch-weapp']
      })

      wx.ready(function () {
        console.log('ready');
      });

      wx.error(function (res) {
        console.log('error', res);
      });
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
