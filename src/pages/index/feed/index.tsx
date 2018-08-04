import Taro, { Component } from '@tarojs/taro'
import { View, Button, ScrollView, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Item from './item'
import './index.less'

@connect(({ tab }) => ({
  tab
}), null)
class Feed extends Component {
  state = {
    feedItems: []
  }

  componentDidMount() {
    const { tab } = this.props;

    this.pullFeed(tab.board)
  }

  componentWillReceiveProps (nextProps) {
    const { tab } = this.props;

    if (tab.board !== nextProps.tab.board) {
      this.pullFeed(nextProps.tab.board, 0)
    }
  }

  pullFeed = (board, offset = 0) => {
    var { feedItems } = this.state;
    if (offset === 0) {
      feedItems = []
      this.setState({ feedItems: [] })
    }
    Taro.request({
      url: 'http://192.168.43.177:3000/v1/board?board='+board+'&count=20&offset='+offset, //仅为示例，并非真实的接口地址
      success: (res) => {
        this.setState({feedItems: feedItems.concat(res.data.feed_cards)})
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  getFutureMovies() {
    const { board } = this.props.tab;
    const { feedItems } = this.state;
    const offset = feedItems.length;
    this.pullFeed(board, offset);
  }
  render () {
    const { tab } = this.props
    const { feedItems } = this.state

    return (
      <ScrollView scrollY className='feed' lowerThreshold='80'
                  onScrolltolower={this.getFutureMovies} scrollWithAnimation={true} enableBackToTop={true} scrollLeft={0}>
        {feedItems.length === 0 &&
         <Image src={'https://mir-s3-cdn-cf.behance.net/project_modules/disp/09b24e31234507.564a1d23c07b4.gif'} className={'loading'}></Image>
        }
        {feedItems.map(feedItem=>(
          <Item item={feedItem}/>
        ))
        }
      </ScrollView>
    )
  }
}

export default Feed
