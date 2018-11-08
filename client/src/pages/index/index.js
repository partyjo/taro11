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
      status: false,
      pageIndex: null,
    }
  }

  componentWillMount() {
    this.userInfo = this.isLogin()
    if (this.userInfo) {
      
    }
  }

  componentDidMount() { }

  componentWillUnmount() { }

  isLogin = () => {
    return {
      openid: '123456',
      nickname: 'zhangmin',
      headimgurl: '',
      guess: {
        id: 1,
        mobile: '15558018857',
        amount: '1024.65'
      }
    }
  }

  guess = () => {
    
  }

  toggle = () => {
    this.setState({
      pageIndex: 1
    })
  }

  render() {
    let page = null
    if (this.state.status && this.state.pageIndex === 0) {
      page = <View className='page'>
        pageOne
              </View>

    } else if (this.state.status && this.state.pageIndex === 1) {
      page = <View className='page'>
        pageOne
    </View>
    } else {
      page = '11'
    }
    return (
      <View className='container'>
        {page}
      </View>
    )
  }
}

