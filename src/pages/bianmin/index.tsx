import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'
import Card from '../../components/card'

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">便民服务</View>
      <a href="http://h.qr61.cn/ocFiYI/q1OtanR?category_id%3D41187033%26org_module_id%3D38267485%26type%3D0%26list_name%3D部门通%26user_id%3D16949321">
        <Card title="府院联动" desc="沟通法院与主要业务往来职能部门，将线下操作转变为线上办理。为当事人提供便捷的诉讼服务。" color="#ffffff" bgcolor="#20985a" />
      </a>
      <Card title="鄂汇办" desc="通过业务协同和数据共享，优化办事体验，实现群众办事“指尖办理”。" color="#ffffff" bgcolor="#20985a" />
    </View>
  )
}

export default Index
