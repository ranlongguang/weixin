//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    pic:[
      {text:"小丸子啊小丸子！",img:"/static/img/pic1.png"},
      {text:"萌萌哒小丸子！",img:"/static/img/pic2.png"},
      {text:"小丸子啊小丸子！",img:"/static/img/pic3.png"},
      {text:"萌萌哒小丸子！",img:"/static/img/pic4.png"}
    ],
    idx:0,
    titles:['足球现场','足球生活','足球美女']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleChangeNav(e) {
    this.setData({
      idx:e.target.dataset.idx
    })
  },
  handleSwiper({detail}) {
     this.setData({
       idx:detail.current
     })
  }
})
