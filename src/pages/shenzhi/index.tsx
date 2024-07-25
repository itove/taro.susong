import React from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { Grid } from '@nutui/nutui-react-taro'
import { Env } from '../../env'
import Taro from '@tarojs/taro'

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
      <View className="page-title mb-2">审执公开</View>
      <Grid columns={3} className="grid">
        <Grid.Item text="审判流程公开" onClick={() => goto("https://splcgk.court.gov.cn/gzfwww/")}>
            <img className="img" src={Env.imageUrl + 'shenzhi-1.png'} /> 
        </Grid.Item>
        <Grid.Item text="庭审公开" onClick={() => goto("https://tingshen.court.gov.cn/")}>
            <img className="img" src={Env.imageUrl + 'shenzhi-2.png'} /> 
        </Grid.Item>
        <Grid.Item text="裁判文书公开" onClick={() => goto("https://wenshu.court.gov.cn/")}>
            <img className="img" src={Env.imageUrl + 'shenzhi-3.png'} /> 
        </Grid.Item>
        <Grid.Item text="执行信息公开" onClick={() => goto("http://zxgk.court.gov.cn/")}>
            <img className="img" src={Env.imageUrl + 'shenzhi-4.png'} /> 
        </Grid.Item>
        <Grid.Item text="财产拍卖处置" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'shenzhi-5.png'} /> 
        </Grid.Item>
        <Grid.Item text="执行悬赏公告" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'shenzhi-6.png'} /> 
        </Grid.Item>
        <Grid.Item text="失信人曝光及信用修复" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'shenzhi-7.png'} /> 
        </Grid.Item>
        <Grid.Item text="智慧执行" onClick={() => goto("https://h5.clewm.net/?url=http%3A%2F%2Fh.qr61.cn%2FocFiYI%2FqBV6Y5q")}>
            <img className="img" src={Env.imageUrl + 'shenzhi-8.png'} /> 
        </Grid.Item>
        <Grid.Item text="联系电话" onClick={() => goto("/pages/contact/index")}>
          <img className="img" src={Env.imageUrl + 'shenzhi-9.png'} /> 
        </Grid.Item>
        <Grid.Item text="涉民生审判工作" onClick={() => goto("http://www.yxxfyw.hbfy.gov.cn/DocManage/getDocsByFolder?folderNo=04")}>
          <img className="img" src={Env.imageUrl + 'shenzhi-10.png'} /> 
        </Grid.Item>
      </Grid>
    </View>
  )
}

export default Index
