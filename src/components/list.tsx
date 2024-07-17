import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

function List({icon, title, desc, url}) {
  return (
    <View className="list">
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

export default List
