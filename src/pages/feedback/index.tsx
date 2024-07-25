import React from 'react'
import { View, Button, Radio, RadioGroup, Textarea, Input } from '@tarojs/components'
import { TextArea } from '@nutui/nutui-react-taro';
import { User, Phone } from '@nutui/icons-react-taro'
import './index.scss'

function Index() {
  return (
    <View className="p-1">
      <View className="page-title mb-2">在线留言</View>
      <View className="desc">
      您好，为给您提供更加优质、高效的诉讼服务，欢迎您在线咨询留言。工作人员会对您的个人信息保密，请放心填写，谢谢!
      </View>

      <View className="section-title"> 您要反馈哪方面的问题？ </View>
      <View className="">
      <RadioGroup>
        <Radio value="0" checked='false'>诉讼</Radio>
        <Radio value="1" checked='false'>执行</Radio>
      </RadioGroup>
      </View>

      <View className="section-title"> 详细描述？ </View>
      <View className="note"> 请详细说明目前的问题。 </View>
      <TextArea className="input" rows="5" />

      <View className="section-title"> 反馈人 </View>
      <Input className="input" type='text' />

      <View className="section-title"> 身份证号</View>
      <Input className="input" type='text' />

      <View className="section-title"> 手机号</View>
      <Input className="input" type='text' />

      <Button type="warn">提交</Button>
    </View>
  )
}

export default Index
