<template>
  <div class="about">
    <header>
      <div class="head">
        <div class="search">
          <p>新用户注册领100元现金券</p>
          <i></i>
        </div>
        <div class="code"></div>
      </div>
      <section>
        <div class="section-left">
          <a v-for="(bar,index ) in nav" :herf="bar.site" :class="{active: curId===index}"  @click="select(index)">{{bar.a}}</a>
<!--          <a href="javascript:void (0)" @click="select(index)" class="active" >医药馆</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">器械馆</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">养生保健馆</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">成人用品馆</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">生活馆</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">中药馆</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">母婴商场</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">临床新特药</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">增值服务</a>-->
<!--          <a href="javascript:void (0)" @click="select(index)">生活便利馆</a>-->
        </div>
        <div class="section-right">
          <img src="../assets/images/others/微信图片_20190927104556.png">
          <div class="container">
            <p>内科用药</p>
            <div class="classify">
              <div v-for="cla in classify" class="classify-item">{{cla.div}}
                <img :src="cla.picture">{{cla.img}}
                <span>{{cla.span}}</span>
              </div>
            </div>
          </div>
          <div class="container">
            <p>外科用药</p>
            <div class="classify">
              <div v-for="exa in examply" class="classify-item">{{exa.div}}
                <img :src="exa.picture">{{exa.img}}
                <span>{{exa.span}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "../components/Footer";
  import Picture1 from "../assets/images/others/微信图片_20190927114502.jpg"
  import picture2 from "../assets/images/others/微信图片_20190927114458.jpg"

  export default {

    name: "about",
    components: {Footer},
    data(){
      return{
        nav:[
          {a:'医药馆',site:'#',act:'active'},
          {a:'器械馆',site:'#',atc:''},
          {a:'养生保健馆',site:'#',atc:''},
          {a:'成人用品馆',site:'#',atc:''},
          {a:'中药馆',site:'#',atc:''},
          {a:'母婴商场',site:'#',atc:''},
          {a:'临床新特药',site:'#',atc:''},
          {a:'增值服务',site:'#',atc:''},
          {a:'生活便利馆',site:'#',atc:''}
        ],
        classify:[
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},
          {picture:Picture1,span:'感冒发烧'},

        ],
        examply:[
          {picture:picture2,span:'清热解毒'},
          {picture:picture2,span:'清热解毒'},
          {picture:picture2,span:'清热解毒'},
          {picture:picture2,span:'清热解毒'},
          {picture:picture2,span:'清热解毒'},
          {picture:picture2,span:'清热解毒'},
        ],
        curId:0
      }

    },
    methods:{

      select(index) {
        this.curId=index
        // let selectA = document.querySelectorAll('.section-left a');
        // for(let i=0; i<selectA.length;i++){
        //   selectA[i].classList.remove('active')
        // }
        // selectA[index].classList.add('active');
      }
    }


  }
</script>
<style lang="scss">
  html {
    font-size: 26.67vw;
    background: #f2f5f4;
  }
  header {
    height: 0.5rem;
    width: 100%;
    background:rgba(65,189,150,1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .head {
      height: 100%;
      margin: 0 0.12rem;
      position: relative;
      .search {
        height:0.3rem;
        background:rgba(230,255,238,1);
        border-radius:0.15rem;
        position: absolute;
        left: 0;
        top: 0.1rem;
        right: 0.27rem;
        bottom: 0.1rem;
        line-height: 0.3rem;
        p {
          background:rgba(230,255,238,1);
          border-radius:0.15rem;
          margin-left: 0.12rem;
          font-size: 0.14rem;
          color: #999999;
        }
         i {
          width:0.1rem;
          height:0.16rem;
          display: block;
          background: url("../assets/images/about/图层1@2x.png")no-repeat center/cover;
          /*background: red;*/
          position: absolute;
          top: 0.07rem;
          right: 0.12rem;
        }
      }
      .code {
        width: 0.2rem;
        height: 0.2rem;
        background: url("../assets/images/about/扫一扫@2x.png")no-repeat center/cover;
        float: right;
        margin-top: 0.15rem;
      }
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    .section-left {
      width: 1.4rem;
      a {
        padding: 0.05rem 0.16rem;
        height: 0.45rem;
        display: block;
        line-height: 0.45rem;
        font-size: 0.15rem;
        color: #333333;
        background: #ffffff;
      }
      .active {
        background: #f2f5f4;
        font-weight:500;
        color:rgba(51,51,51,1);
        font-size: 0.17rem;
        position: relative;
      }
      .active:after {
        content: '';
        display: block;
        position: absolute;
        width: 0.09rem;
        height: 0.14rem;
        background: url("../assets/images/about/多边形1@2x.png")no-repeat center/cover;
        top: 0.19rem;
        left: 0;
      }
    }
    .section-right {
      width: 2.1rem;
      padding: 0.05rem 0.16rem;
      img {
        width: 2.1rem;
        overflow: hidden;
      }
      .container {
        background: #ffffff;
        border-radius: 0.01rem;
        margin-bottom: 0.1rem;
        p {
          height: 0.3rem;
          font-size: 0.13rem;
          color: #333333;
        }
        .classify {
          padding:0  0.05rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          /*align-items: center;*/
          .classify-item {
            width:0.63rem;
            height: 0.85rem;
            position: relative;
            img {
              width: 0.63rem;
              height: 0.63rem;
              position: absolute;
            }
            span {
              width: 100%;
              height: 0.24rem;
              line-height: 0.24rem;
              text-align: center;
              font-size: 0.13rem;
              color: #333333;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
        }
      }

    }
  }

</style>
