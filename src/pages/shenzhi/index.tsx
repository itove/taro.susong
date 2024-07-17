import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import { Grid } from '@nutui/nutui-react-taro'
import { Env } from '../../env'

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">审执公开</View>
      <Grid columns={3} className="grid">
        <Grid.Item text="审判流程公开">
          <a href="https://splcgk.court.gov.cn/gzfwww/">
            <img className="img" src={Env.imageUrl + 'shenzhi-1.png'} /> 
          </a>
        </Grid.Item>
        <Grid.Item text="庭审公开">
          <a href="https://tingshen.court.gov.cn/">
            <img className="img" src={Env.imageUrl + 'shenzhi-2.png'} /> 
          </a>
        </Grid.Item>
        <Grid.Item text="裁判文书公开">
          <a href="https://wenshu.court.gov.cn/">
            <img className="img" src={Env.imageUrl + 'shenzhi-3.png'} /> 
          </a>
        </Grid.Item>
        <Grid.Item text="执行信息公开">
          <a href="http://zxgk.court.gov.cn/">
            <img className="img" src={Env.imageUrl + 'shenzhi-4.png'} /> 
          </a>
        </Grid.Item>
        <Grid.Item text="财产拍卖处置">
          <img className="img" src={Env.imageUrl + 'shenzhi-5.png'} /> 
        </Grid.Item>
        <Grid.Item text="执行悬赏公告">
          <img className="img" src={Env.imageUrl + 'shenzhi-6.png'} /> 
        </Grid.Item>
        <Grid.Item text="失信人曝光及信用修复">
          <img className="img" src={Env.imageUrl + 'shenzhi-7.png'} /> 
        </Grid.Item>
        <Grid.Item text="智慧执行">
          <a href="https://h5.clewm.net/?url=http%3A%2F%2Fh.qr61.cn%2FocFiYI%2FqBV6Y5q">
            <img className="img" src={Env.imageUrl + 'shenzhi-8.png'} /> 
          </a>
        </Grid.Item>
        <Grid.Item text="联系电话">
          <img className="img" src={Env.imageUrl + 'shenzhi-9.png'} /> 
        </Grid.Item>
        <Grid.Item text="涉民生审判工作">
          <img className="img" src={Env.imageUrl + 'shenzhi-10.png'} /> 
        </Grid.Item>
      </Grid>
    </View>
  )
}

export default Index
