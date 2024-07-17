import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Contact from '../../components/contact'

const contact = {
  title: "郧西县人民法院",
  addr: "郧西县人民法院",
  tels: [
    {
      name: '',
      tel: '0719-6227182',
    },
  ]
}

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">联系电话</View>

      <Contact contact={contact} />
    </View>
  )
}

export default Index
