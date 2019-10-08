<template>
  <div class="home">
    <div class="header">
      <div class="header-fixed">
        <div class="place">
          <i></i>
          陕西
          <b></b>
        </div>
        <div class="search">
          <span>新用户注册领100元现金券</span>
          <i></i>
        </div>
        <div class="code"></div>
      </div>
    </div>
    <div class="banner"></div>
    <div class="section">
      <div v-for="example in examples" :class="example.Item">{{example.div}}
        <a :href=example.way :class="example.className">{{example.a}}
        </a>
        <span>{{example.span}}</span>
      </div>

<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="green">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="orange">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="pink">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="yellow">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="blue">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="purple">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="red">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <a href="javascript:void (0)" class="glaucous">满减</a>-->
<!--        <span>满减优惠</span>-->
<!--      </div>-->


<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
    <div class="group-purchase">
      <div class="top">
        <div class="top-left">拼团购</div>
        <div class="top-right">更多拼团&nbsp&nbsp&nbsp<i></i></div>
      </div>
      <div class="display">
        <div class="show">
          <div v-for="demonstrate in demon" :class="demonstrate.time">{{demonstrate.div}}
            <div :class="demonstrate.picture">{{demonstrate.div}}
              <img :src="demonstrate.pic">{{demonstrate.img}}
            </div>
            <div :class="demonstrate.description">{{demonstrate.div}}
              <p>{{demonstrate.p}}</p>
              <span>{{demonstrate.span}}</span>
              <del>{{demonstrate.del}}</del>
            </div>

          </div>
          <!--        <div class="show-time">-->
          <!--          <div class="picture-1">-->
          <!--            <img src="../assets/images/home/藿香正气@2x.png">-->
          <!--          </div>-->
          <!--          <div class="description">-->
          <!--            <p>太极藿香正气口服液</p>-->
          <!--            <span>¥18.80</span>-->
          <!--            <del>¥24.00</del>-->
          <!--          </div>-->
          <!--        </div>-->
        </div>
      </div>

    </div>
    <div class="up">
      <div v-for="(menu,index) in menus" :class="menu.scope">{{menu.div}}
        <b>{{menu.b}}</b>
      </div>
    </div>
    <div class="down">
      <div v-for="board in boards" :class="board.adver">{{board.div}}
        <p>{{board.p}}</p>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="img">
          <i></i>
        </div>
        <div class="introduce">
          <div class="name">三九感冒灵颗粒</div>
          <div class="detail">感冒引起的头痛、发热、鼻塞、流鼻涕</div>
          <div class="charge">
            <div class="price">¥10.50</div>
            <div class="car"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
  import pictureA from '../assets/images/home/藿香正气@2x.png'
  import pictureB from '../assets/images/home/颈复康@2x.png'
  import pictureC from '../assets/images/home/杜蕾斯@2x.png'
  import pictureD from '../assets/images/home/杰士邦@2x.png'
  import Footer from "../components/Footer";

  export default {
  name: 'home',
    data () {
    return {
      examples:[
        {Item: 'item',a: '满减', className: 'green', way: 'javascript:void (0)',span: '满减优惠'},
        {Item: 'item',a: '特惠', className: 'orange', way: 'javascript:void (0)',span: '每日特惠'},
        {Item: 'item',a: '拼团', className: 'pink', way: 'javascript:void (0)',span: '团拼折扣'},
        {Item: 'item',a: '专享', className: 'yellow', way: 'javascript:void (0)',span: '新人专享'},
        {Item: 'item',a: '季节', className: 'blue', way: 'javascript:void (0)',span: '季节用药'},
        {Item: 'item',a: '营养', className: 'purple', way: 'javascript:void (0)',span: '营养滋补'},
        {Item: 'item',a: '成人', className: 'red', way: 'javascript:void (0)',span: '成人用品'},
        {Item: 'item',a: '特效', className: 'glaucous', way: 'javascript:void (0)',span: '新特效药'},

      ],
      demon : [
        {time:'show-time',picture:'picture-1',pic:pictureA,description:'description',p:'太极藿香正气口服液',span:'¥18.80',del:'¥24.00'},
        {time:'show-time',picture:'picture-1',pic:pictureB,description:'description',p:'颈复康集团颈复康颗粒',span:'¥27.20',del:'¥32.00'},
        {time:'show-time',picture:'picture-1',pic:pictureC,description:'description',p:'杜蕾斯避孕套活力装',span:'¥8.80',del:'¥11.9'},
        {time:'show-time',picture:'picture-1',pic:pictureD,description:'description',p:'杰士邦避孕套超黑特工装 ',span:'¥26.8',del:'¥31.80'},
        {time:'show-time',picture:'picture-1',pic:pictureA,description:'description',p:'太极藿香正气口服液',span:'¥18.80',del:'¥24.00'},
        {time:'show-time',picture:'picture-1',pic:pictureB,description:'description',p:'颈复康集团颈复康颗粒',span:'¥27.20',del:'¥32.00'},
        {time:'show-time',picture:'picture-1',pic:pictureC,description:'description',p:'杜蕾斯避孕套活力装',span:'¥8.80',del:'¥11.9'},
        {time:'show-time',picture:'picture-1',pic:pictureD,description:'description',p:'杰士邦避孕套超黑特工装 ',span:'¥26.8',del:'¥31.80'}
          ],
      menus:[
        {scope:'menu active',b:'家庭'},
        {scope:'menu',b:'养生'},
        {scope:'menu',b:'慢性'},
        {scope:'menu',b:'成人'},
        {scope:'menu',b:'母婴'},
        {scope:'menu',b:'帮助'}
      ],
      boards:[
        {adver:'adverse active',p:'无忧生活'},
        {adver:'adverse',p:'滋补营养'},
        {adver:'adverse',p:'品质保证'},
        {adver:'adverse',p:'尽享激情'},
        {adver:'adverse',p:'品质保证'},
        {adver:'adverse',p:'为您挑选'},

      ]
    }

  },

  components: {
    Footer
    // HelloWorld
  }
}
</script>
<style lang="scss" scoped>
  html {
    font-size: 26.67vw;
    background: #f2f5f4;
  }
  .header {
    height: 0.5rem;
    /*width: 100%;*/
    padding: 0 0.12rem;
    background: #41BD96;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .header-fixed {
      height: 0.5rem;
      position: relative;
      .place {
        float: left;
        font-size:0.15rem;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:0.5rem;
        padding: 0 0.22rem;
        position: relative;
        ::before {
          content: '';
          display: block;
          position: absolute;
          top: 0.18rem;
          left: 0.06rem;
          width:0.11rem;
          height:0.14rem;
          background:url("../assets/images/home/Pointer@2x.png") no-repeat center/cover;

        }
        ::after {
          content: '';
          display: block;
          position: absolute;
          top: 0.22rem;
          right: 0.06rem;
          width:0.12rem;
          height:0.05rem;
          background:url("../assets/images/home/图层1@2x.png") no-repeat center/cover;

        }
      }
      .search {
        background: red;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
        left: 0.85rem;
        right: 0.44rem;
        overflow: hidden;
        background:rgba(230,255,238,1);
        border-radius:0.5rem;
        font-size: 0.14rem;
        color:rgba(153,153,153,1);
        line-height: 0.3rem;
        padding: 0 0.13rem;
        text-align: center;
      span {
        float: left;
      }
        i {
          float: right;
          width: 0.1rem;
          height: 0.16rem;
          display: block;
          background: url("../assets/images/home/图层2@2x.png")no-repeat center/cover;
          position: absolute;
          top: 0.07rem;
          right: 0.13rem;
        }
      }
      .code {
        position: absolute;
        right: 0;
        top: 0.15rem;
        float: right;
        width: 0.19rem;
        height: 0.19rem;
        background: url("../assets/images/home/扫一扫@2x.png")no-repeat center/cover;
      }
    }
  }
  .banner {
    margin-top: 0.5rem;
    height: 1.99rem;
    width: 100%;
    background: url("../assets/images/home/banner@2x.png")no-repeat center/cover;
  }
  .section {
    margin: -0.33rem 0.16rem 0 0.16rem;
    height:1.66rem;
    background:rgba(255,255,255,1);
    box-shadow:0 0.03rem 0.09rem 0 rgba(116,176,90,0.16);
    border-radius:0.1rem;
    font-size: 0.2rem;
    color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .item {
      height: 0.66rem;
      margin: 0.08rem 0.14rem;
      width: 0.45rem;
      position: relative;
      /*margin-top: 0.1rem;*/
      a {
        display: block;
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        font-size: 0.15rem;
        font-weight:normal;
        color:rgba(254,254,254,1);
        line-height: 0.45rem;
        /*b {*/
        /*  font-size: 0.15rem;*/
        /*  font-weight:normal;*/
        /*  color:rgba(254,254,254,1);*/
        /*  line-height: 0.5rem;*/
        /*}*/
      }
      .green {
        background: url("../assets/images/home/椭圆1@2x.png")no-repeat center/cover;
      }
      .orange {
        background: url("../assets/images/home/椭圆1拷贝2@2x.png")no-repeat center/cover;
      }
      .pink {
        background: url("../assets/images/home/椭圆1拷贝3@2x.png")no-repeat center/cover;
      }
      .yellow {
        background: url("../assets/images/home/椭圆1拷贝4@2x.png")no-repeat center/cover;
      }
      .blue {
        background: url("../assets/images/home/椭圆1拷贝5@2x.png")no-repeat center/cover;
      }
      .purple {
        background: url("../assets/images/home/椭圆1拷贝6@2x.png")no-repeat center/cover;
      }
      .red {
        background: url("../assets/images/home/椭圆1拷贝7@2x.png")no-repeat center/cover;
      }
      .glaucous {
        background: url("../assets/images/home/椭圆1拷贝@2x.png")no-repeat center/cover;
      }
      span {
        position: absolute;
        left: -0.02rem;
        right: -0.02rem;
        bottom: 0.05rem;
        width: 0.5rem;
        height: 0.11rem;
        font-size: 0.08rem;
        text-align: center;
      }
    }
  }
  .group-purchase {
    margin: 0.1rem 0.16rem;
    height: 1.9rem;
    background:rgba(255,255,255,1);
    box-shadow:0 0.03rem 0.09rem 0 rgba(116,176,90,0.16);
    border-radius:0.1rem;
    padding: 0 0.1rem;
    overflow: hidden;
    .top {
      height: 0.36rem;
      width: 100%;
      background: transparent;
      border: none;
      .top-left {
        float: left;
        font-size:0.18rem;
        color:rgba(0,0,0,1);
        line-height:0.36rem;
      }
      .top-right {
        float: right;
        width:0.65rem;
        height:0.17rem;
        border:0.005rem solid rgba(255,97,0,1);
        border-radius:0.08rem;
        margin: 0.1rem 0;
        font-size: 0.1rem;
        color:rgba(255,102,8,1);
        line-height: 0.19rem;
        position: relative;
        padding-left: .1rem;
        i {
          width:0.04rem;
          height:0.1rem;
          opacity:0.6;
          display: block;
          position: absolute;
          background: url("../assets/images/home/图层11拷贝@2x.png")no-repeat center/100%;
          right: 0.1rem;
          top: 0.03rem;
        }
      }
    }
    .display{
      width: 100%;
      overflow: hidden;
      height: 1.4rem;
      .show {
        /*width: 200%;*/
        display: flex;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;

        .show-time {
          float: left;
          width: 0.8rem;
          height: 1.4rem;
          margin-right: 0.1rem;
          .picture-1 {
            width: 0.8rem;
            height: 0.8rem;
            line-height: 0.8rem;
            img {
              width: 0.6rem;
              height: 0.45rem;
              margin-bottom: 0.12rem;
            }
          }
          .description {
            width: 0.8rem;
            height: 0.6rem;
            position: relative;
            p {
              font-size: 0.12rem;
              color: #333333;
            }
            span {
              color: #ff0000;
              font-size: .13rem;
              position: absolute;
              bottom: 0.05rem;
              left: 0;
            }
            del {
              font-size: .1rem;
              color: #666666;
              position: absolute;
              bottom: 0.05rem;
              right: 0.02rem;
            }
          }
        }
      }
    }


  }
  .up {
    padding: 0.05rem 0.12rem;
    z-index: 9;
    background: #f2f5f4;
    height: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0.5rem;
    .menu {
      width: 0.5rem;
      position: relative;
      color: #333333;
      height: 100%;
      text-align: center;
      b {
        font-size:0.13rem;
        font-weight:500;
        line-height:0.3rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

    }
    .active {
      color:rgba(65,189,150,1);
      /*border-bottom: 0.01rem solid rgba(65,189,150,1);*/
    }
  }
  .down {
    padding: 0.05rem 0.12rem;
    /*width: 100%;*/
    height: 0.1rem;
    background: #f2f5f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .adverse {
      width: 0.5rem;
      position: relative;
      height: 100%;
      text-align: center;
      color: #333333;
      p {
        /*color: #333333;*/
        font-size: 0.1rem;
        font-weight:400;

        /*display: none;*/
        line-height:0.16rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

    }
    .active {
      color:rgba(65,189,150,1);
      /*border-bottom: 0.01rem solid rgba(65,189,150,1);*/
    }
  }
  .recommend {
    margin: 0.1rem 0.16rem;
    /*height: 2.46rem;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    .recommend-item {
      width:1.48rem;
      height:100%;
      background:rgba(255,255,255,1);
      border-radius:0.1rem;
      padding: 0 0.1rem;
      margin-bottom: 0.07rem;
      .img {
        width: 1.48rem;
        height: 1.68rem;
        position: relative;
        i {
          width: 1.22rem;
          height: 1rem;
          display: block;
          background: url("../assets/images/home/感冒灵颗粒@2x.png")no-repeat center/cover;
          position: absolute;
          left: 0.15rem;
          top: 0.34rem;
        }
      }
      .introduce {
        /*position: relative;*/
        .name {
          height: 0.16rem;
          font-size:0.13rem;
          color:rgba(51,51,51,1);
          line-height:0.16rem;
          margin: 0.08rem auto;
        }
        .detail {
          height:0.1rem;
          font-size:0.1rem;
          color:rgba(102,102,102,1);
          line-height:0.1rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .charge {
          height: 0.16rem;
          width: 100%;
          margin: 0.1rem 0;
          .price {
            float: left;
            font-size:0.17rem;
            font-weight:400;
            color:rgba(255,0,0,1);
          }
          .car {
            float: right;
            height: 0.16rem;
            width: 0.16rem;
            background: url("../assets/images/home/购物车.svg")no-repeat center/cover;
            margin-top: 0.05rem;
          }
        }
      }
    }
  }


</style>
