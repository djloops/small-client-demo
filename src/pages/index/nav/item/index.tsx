import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { change } from '../../../../reducers/tab'

import './index.less'

@connect(({ tab }) => ({
  tab
}), (dispatch) => ({
  change (board) {
    dispatch(change(board))
  },
}))
class Item extends Component {
  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    const { boardType, change } = this.props

    change(boardType)
  }

  render () {
    const { name, tab, boardType } = this.props

    return (
      <View className={`item${tab.board===boardType?' active':''}`} onClick={this.handleClick}>
        {name}
      </View>
    )
  }
}

export default Item
