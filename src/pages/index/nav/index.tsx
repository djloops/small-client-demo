import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Item from './item'

import './index.less'

@connect(({ tab }) => ({
  tab
}), null)
class Nav extends Component {
  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { tab } = this.props

    return (
      <View className='nav'>
        <Item name={'热门'} boardType={1}/>
        <Item name={'互联网'} boardType={2}/>
        <Item name={'国企'} boardType={3}/>
        <Item name={'金融'} boardType={4}/>
      </View>
    )
  }
}

export default Nav
