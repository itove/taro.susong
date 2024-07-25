import React from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { Grid } from '@nutui/nutui-react-taro'
import { Env } from '../../env'
import Taro from '@tarojs/taro'

function goto(url){
  // Taro.navigateTo({url: '/pages/index/webview?url=' + url})
  window.location.href = url
}

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">本院特色</View>
      <Grid columns={3} className="grid">
        <Grid.Item text="审判流程公开" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'benyuan-1.png'} /> 
        </Grid.Item>
        <Grid.Item text="庭审公开" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'benyuan-2.png'} /> 
        </Grid.Item>
        <Grid.Item text="裁判文书公开" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'benyuan-3.png'} /> 
        </Grid.Item>
        <Grid.Item text="执行信息公开" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'benyuan-4.png'} /> 
        </Grid.Item>
        <Grid.Item text="财产拍卖处置" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'benyuan-5.png'} /> 
        </Grid.Item>
        <Grid.Item text="执行悬赏公告" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'benyuan-6.png'} /> 
        </Grid.Item>
      </Grid>
    </View>
  )
}

export default Index
