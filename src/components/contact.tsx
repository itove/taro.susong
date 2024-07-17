import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import List from '../components/list'
import geo from '../icons/geo-alt-fill.svg'
import phone from '../icons/telephone-fill.svg'

function Contact({contact}) {
  const url = contact.url ? contact.url : 'https://3gimg.qq.com/lightmap/v1/marker/index.html?type=0&marker=coord:32.981372,110.427331&tonav=0'

  const tels = []
  contact.tels.map((tel, index) => {
    const title = tel.name ? tel.name + " : " + tel.tel : tel.tel
    tels.push(
      <a href={"tel:" + tel.tel} key={index}>
        <List icon={phone} title={title} desc="打电话" />
      </a>
    )
  })

  return (
    <>
    <View className="bold">{contact.title}</View>
    {tels}
    <a href={url}>
      <List icon={geo} title={contact.addr} desc="去导航" />
    </a>
    </>
  )
}

export default Contact
