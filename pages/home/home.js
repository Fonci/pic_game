// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataStar: ["⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐"],
    time: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },
  // 初始化
  init() {
    var that = this;
    var random = 0.5 - Math.random();
    that.setData({
      dataStar: that.sortArr([1, 2, 3, 4, 5, 6, 7, 8]).concat([9])
    })
  },
  // 打乱数组顺序
  sortArr(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5
    })
  },
  // 开始游戏
  startGame() {
    clearInterval(this.data.t);
    this.setData({
      time: 0
    })
    this.timeCount();
    this.init();
  },
  // 结束
  timeStop: function () {
    clearInterval(this.data.t);
    if (this.data.dataStar.toString() != [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.fail();
    }
  },
  // 成功
  success: function () {
    console.log('成功')
    var that = this;
    wx.showToast({
      title: '闯关成功',
      icon: 'success',
      success: function () {
        that.init();
        this.timeCount();
      }
    })
  },
  // 计时器
  timeCount: function () {
    var that = this;
    var timer = that.data.time;
    that.setData({
      t: setInterval(function () {
        timer++;
        that.setData({
          time: timer
        })
      }, 1000)
    })
  },
  // 移动方块
  moveSquare(options) {
    var that = this;
    var index = options.target.dataset.index;
    var item = options.target.dataset.item;
    if (this.data.dataStar[index + 3] == 9) {
      this.down(options);
    }
    if (this.data.dataStar[index - 3] == 9) {
      this.up(options);
    }
    if (this.data.dataStar[index + 1] == 9 && index != 2 && index != 5) {
      this.right(options);
    }
    if (this.data.dataStar[index - 1] == 9 && index != 3 & index != 6) {
      this.left(options);
    }
  },
  left(options) {
    var index = options.currentTarget.dataset.index; //当前数字下标
    var temp = this.data.dataStar[index];
    this.data.dataStar[index] = this.data.dataStar[index - 1]
    this.data.dataStar[index - 1] = temp;
    this.setData({
      dataStar: this.data.dataStar
    })
    if (this.data.dataStar.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  right(options) {
    var index = options.currentTarget.dataset.index; //当前数字下标
    var temp = this.data.dataStar[index];
    this.data.dataStar[index] = this.data.dataStar[index + 1]
    this.data.dataStar[index + 1] = temp;
    this.setData({
      dataStar: this.data.dataStar
    })
    if (this.data.dataStar.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  up(options) {
    var index = options.currentTarget.dataset.index; //当前数字下标
    var temp = this.data.dataStar[index];
    this.data.dataStar[index] = this.data.dataStar[index - 3]
    this.data.dataStar[index - 3] = temp;
    this.setData({
      dataStar: this.data.dataStar
    })
    if (this.data.dataStar.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  down(options) {
    var index = options.currentTarget.dataset.index; //当前数字下标
    var temp = this.data.dataStar[index];
    this.data.dataStar[index] = this.data.dataStar[index + 3]
    this.data.dataStar[index + 3] = temp;
    this.setData({
      dataStar: this.data.dataStar
    })
    if (this.data.dataStar.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})