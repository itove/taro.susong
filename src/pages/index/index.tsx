import React from 'react'
import { View, Image } from '@tarojs/components'
// import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import geo from '../../icons/geo-alt-fill.svg'
import phone from '../../icons/telephone-fill.svg'
import Taro from '@tarojs/taro'
import { Env } from '../../env'
import Card from '../../components/card'
import List from '../../components/list'

function Index() {
  return (
    <View className="p-1">
      <Image className="hero rounded" mode="widthFix" src={Env.imageUrl + 'hero.png'} />
      <a href="https://h5.clewm.net/?url=http%3A%2F%2Fqr61.cn%2FocFiYI%2Fqv4j2R1">
        <Card title="诉讼服务" desc="在线立案、文书模板等" />
      </a>
      <Card title="审执公开" desc="审判、执行环节公开可查的相关信息" link="shenzhi" />
      <Card title="本院特色" desc="安陆法院特色工作介绍" link="benyuan" />
      <Card title="在线留言" desc="工作日24小时内回复" />
      <a href="https://h5.clewm.net/?url=http%3A%2F%2Fh.qr61.cn%2FocFiYI%2FqFnQwwE">
        <Card title="便民服务" desc="政务办事、民生服务等便民查询功能" />
      </a>

      <View className="bold">如有疑问 请联系郧西县人民法院</View>
      <a href="tel:0719-6227182">
        <List icon={phone} title="0719-6227182" desc="打电话" />
      </a>
      <a href="https://3gimg.qq.com/lightmap/v1/marker/index.html?type=0&marker=coord:32.981372,110.427331&tonav=0">
        <List icon={geo} title="郧西县人民法院" desc="去导航" />
      </a>

      <Card title="联系人民法庭" desc="郧西县人民法院各人民法庭联系方式及地址导航" link="test" color="#000000" bgcolor="#f4f4f4" />
    </View>
  )
}

export default Index
