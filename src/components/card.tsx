import Right from '../icons/arrow-right.png'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

function goto(link){
  console.log(link)
  if (link !== undefined) {
    Taro.navigateTo({url: '/pages/' + link + '/index'})
  }
  console.log('click')
}

function Card({title, desc, link, color, bgcolor}) {
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

export default Card
