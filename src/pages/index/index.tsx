import { View } from '@tarojs/components'
import { NavBar } from '@ww-applets/components'
import { warningMessage } from '@ww-applets/shared/utils/messages'

export default function Index () {
  return (
    <View>
      <NavBar
        title='这里是首页啊'
        linearStart='#7394DC'
        linearEnd='#3775D7'
      >
      </NavBar>
      <van-button
        onClick={() => { warningMessage('哈哈哈哈，here from Vant Button') }}
        type='primary'
      >
        Vant Button
      </van-button>
      {/** 用到 message 和 dialog 的页面，需要在页面根组件手动引入 */}
      <van-notify id='van-notify' />
      <van-dialog id='van-dialog' />
      <van-toast id='van-toast' />
    </View>
  )
}
