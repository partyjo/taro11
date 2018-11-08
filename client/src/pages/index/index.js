import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentWillMount() {
    this.userInfo = this.isLogin()
    if (this.userInfo) {
      
    }
  }

  componentDidMount() { }

  componentWillUnmount() { }

  render() {
    return (
      <View className='container'>
        1111
      </View>
    )
  }
}

