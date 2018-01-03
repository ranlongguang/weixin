//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    users:[
      { username: "萧十一郎", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: true, id:0},
      { username: "夸父", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false,id:1},
      { username: "伏羲", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:2},
      { username: "圣朱雀", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:3 },
      { username: "圣白虎", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:4 },
      { username: "此颜差已", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:5},
      { username: "圣青龙", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:6 },
      { username: "神十九妹", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:7},
      { username: "神飞卫", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:8},
      { username: "圣玲珑", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:9},
      { username: "祝融", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:10},
      { username: "共工", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:11},
      { username: "齐天大圣", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:12},
      { username: "唐僧", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:13},
      { username: "猪八戒", motto: "武力值到达两万+", headUrl: "/static/img/boy.png", focus: false, id:14 }
    ]
  }
})