import React from 'react'
import { View, WebView } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Card from '../../components/card'

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">府院联动</View>

      <View className="desc">
      府院联动主要为沟通法院与主要业务往来职能部门，将线下操作转变为线上办理。为当事人提供便捷的诉讼服务。
      </View>
    </View>
  )
}

export default Index
