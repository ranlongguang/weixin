// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  formsubmit(e) {
    if(!e.detail.value.username){
      wx.showToast({
        title: '请输入用户名',
        icon:'loading'
      });
      return ;
    };
    if (!e.detail.value.password) {
      wx.showToast({
        title: '请输入密码',
        icon: 'loading'
      });
      return;
    };
    wx.request({
      url: "http://127.0.0.1:8090/api/login",
      data:{
        username: e.detail.value.username,
        password: e.detail.value.password
      },
      method:"POST",
      success(res) {
        wx.showToast({
          title: '登录成功',
          icon:'success'
        });
        wx.setStorage({
          key: 'user',
          data: e.detail.value.username
        });
        setTimeout(function (){
          wx.switchTab({
            url: '/pages/index/index'
          });
        },3000);
      }
    })
  }
})