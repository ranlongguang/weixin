// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moves: ["孔雀翎", "黄飞鸿", "缝纫机乐队", "战狼", "西游降魔"],
    msg:"认真的人最帅",
    bool:true,
    titles: ['照片', '关注', '粉丝']
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  viewTap(e) {
    //console.log(e.target);
    this.setData({
      msg:"坚持就是胜利"
    })
  },
  rlg(e){
    console.log(e.target.dataset.type);
  },
  xs(){
    this.setData({
      bool:false
    })
  },
  tz(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  handleChangeNav(e) {
    this.setData({
      idx: e.target.dataset.idx
    })
  },
  handleSwiper({ detail }) {
    this.setData({
      idx: detail.current
    })
  }
})