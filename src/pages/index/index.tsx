import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import Feed from './feed'
import Nav from './nav'

import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '逆行求职'
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Nav/>
        <Feed/>
      </View>
    )
  }
}

export default Index
