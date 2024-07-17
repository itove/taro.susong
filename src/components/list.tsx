import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

function goto(link, type=0){
  Taro.navigateTo({url: '/pages/' + link + '/index'})
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

export default List
