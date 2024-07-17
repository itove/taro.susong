import React from 'react'
import { View, Image } from '@tarojs/components'
// import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Hero from '../../images/hero.png'
import Right from '../../icons/arrow-right.png'
import geo from '../../icons/geo-alt-fill.svg'
import phone from '../../icons/telephone-fill.svg'
import Taro from '@tarojs/taro'

function goto(link){
  Taro.navigateTo({url: '/pages/' + link + '/index'})
}

function Card({title, desc, link, bgcolor}) {
  let color = ''
  if (bgcolor) {
    color = '#000000'
  }
  const style = {
    background: bgcolor,
    color: color
  }
  return (
    <View className="card" onClick={()=>{goto(link)}} style={style}>
      <View className="left">
        <View className="title">
          {title}
        </View>
        <View className="desc">
          {desc}
        </View>
      </View>
      <View className="right">
        <img src={Right} />
      </View>
    </View>
  )
}

function List({icon, title, desc, link}) {
  return (
    <View className="list" onClick="">
      <View className="left">
      <img className="icon" src={icon} />
        <View className="">
          {title}
        </View>
      </View>
      <View className="right">
        {desc}
      </View>
    </View>
  )
}

function Index() {
  return (
    <View className="p-1">
      <Image className="hero rounded" mode="widthFix" src={Hero} />
      <Card title="诉讼服务" desc="在线立案、文书模板等" link="susong" />
      <Card title="审执公开" desc="审判、执行环节公开可查的相关信息" link="shenzhi" />
      <Card title="本院特色" desc="安陆法院特色工作介绍" link="benyuan" />
      <Card title="在线留言" desc="工作日24小时内回复" link="liuyan" />
      <Card title="便民服务" desc="政务办事、民生服务等便民查询功能" link="bianmin" />

      <View className="bold">如有疑问 请联系郧西县人民法院</View>
      <List icon={phone} title="0719-8888888" desc="打电话" />
      <List icon={geo} title="郧西县人民法院" desc="去导航" />

      <Card title="联系人民法庭" desc="郧西县人民法院各人民法庭联系方式及地址导航" link="fuck_you" bgcolor="#f4f4f4" />
    </View>
  )
}

export default Index
