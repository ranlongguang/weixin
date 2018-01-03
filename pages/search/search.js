// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchcontent:"",
    users: null,
    focus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  handleSearch(){
    this.setData({
      searchcontent:"",
      users: app.globalData.users
    });
    
  },
  handleFocus(e){
   // e.target.dataset.focus=true;
    console.log(e.target.dataset.id);
    console.log(this.data.users[e.target.dataset.id].id);
    if (e.target.dataset.id == this.data.users[e.target.dataset.id].id){
     this.data.users[e.target.dataset.id].focus = true;
     console.log(this.data.users[e.target.dataset.id])
   }
  }
})