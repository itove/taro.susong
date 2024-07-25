import React from 'react'
import { View, WebView } from '@tarojs/components'
// import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Taro from '@tarojs/taro'

function Index() {
  const instance = Taro.getCurrentInstance();
  const url = instance.router.params.url

  return (
    <WebView src={url} />
  )
}

export default Index
