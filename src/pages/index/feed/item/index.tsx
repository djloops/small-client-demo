import Taro, { Component } from '@tarojs/taro'
import { View, Button,Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

class Item extends Component {
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { item } = this.props
    const { user, post, comment_count } = item

    return (
      <View className='item'>
        <View className='user-info'>
          <Image src={user.avatar_url}/>
          <View className='detail'>
            <View className='name'>{user.name}</View>
            <View className='time'>{post.update_time}</View>
          </View>
          <View className="comment-count">{comment_count}</View>
        </View>
        <View className='subject'>{post.subject}</View>
      </View>
    )
  }
}

export default Item
