import React from 'react'
import { View, WebView } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import { Grid } from '@nutui/nutui-react-taro'
import { Env } from '../../env'

function goto(url) {
  if (url.indexOf('http') === 0) {
    window.location.href = url
  } else {
    Taro.navigateTo({url: url})
  }
}

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">诉讼服务</View>
      <Grid columns={3} className="grid">
        <Grid.Item text="在线立案">
          <img className="img" src={Env.imageUrl + 'susong-1.png'} /> 
        </Grid.Item>
        <Grid.Item text="诉讼文书模板" onClick={() => goto("https://h5.clewm.net/?url=http%3A%2F%2Fh.qr61.cn%2FocFiYI%2Fq9vDJxO")}>
          <img className="img" src={Env.imageUrl + 'susong-2.png'} /> 
        </Grid.Item>
        <Grid.Item text="全国律师执业信息公示平台" onClick={() => goto("https://credit.acla.org.cn/")}>
          <img className="img" src={Env.imageUrl + 'susong-3.png'} /> 
        </Grid.Item>
        <Grid.Item text="人民法院委托鉴定平台">
          <img className="img" src={Env.imageUrl + 'susong-4.png'} /> 
        </Grid.Item>
        <Grid.Item text="近3年道交事故损害赔偿标准" onClick={() => goto("https://h5.clewm.net/?url=http%3A%2F%2Fh.qr61.cn%2FocFiYI%2Fq6kb2L9")}>
          <img className="img" src={Env.imageUrl + 'susong-5.png'} /> 
        </Grid.Item>
      </Grid>
    </View>
  )
}

export default Index
