import React from 'react'
import { View, Image } from '@tarojs/components'
// import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Taro from '@tarojs/taro'
import { Env } from '../../env'
import Card from '../../components/card'
import Contact from '../../components/contact'

function Index() {
  const contact = {
    title: "如有疑问，请联系郧西县人民法院",
    addr: "郧西县人民法院",
    tels: [
      {
        name: '',
        tel: '0719-6227182',
      },
    ]
  }

  const test = () => {
    console.log('fuck')
  }

  const style={
    height: '20px',
    width: '100%',

  }
  return (
    <View className="p-1">
      <Image className="hero rounded" mode="widthFix" src={Env.imageUrl + 'hero.png'} />

  <wx-open-launch-weapp
    id="launch-btn"
    username="gh_c81e8d0053c0"
    appid="wx8ff37059ab8326d7"
    path="/pages/index/index.html"
  >
<script type="text/wxtag-template">
    <button style={style}>打开小程序</button>
      <Card title="test" desc="test" onClick={test} />
</script>
</wx-open-launch-weapp>


      <Card title="诉讼服务" desc="在线立案、文书模板等" link="susong" />
      <Card title="审执公开" desc="审判、执行环节公开可查的相关信息" link="shenzhi" />
      <Card title="本院特色" desc="安陆法院特色工作介绍" link="benyuan" />
      <Card title="在线留言" desc="工作日24小时内回复" link="feedback" />
      <Card title="便民服务" desc="政务办事、民生服务等便民查询功能" link="bianmin" />

      <Contact contact={contact} />

      <Card title="联系人民法庭" desc="郧西县人民法院各人民法庭联系方式及地址导航" link="contact" color="#000000" bgcolor="#f4f4f4" />
    </View>
  )
}

export default Index
