<template>
  <div class="register">
    <header>
      <div class="head">
        <a href="/login"></a>
        <span>注册</span>
        <span></span>
      </div>
    </header>
    <form>
      <div class="box">
        <div>
          <input type="text" placeholder="登录名"/>
          <!--<span class="num">登录名</span>-->
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
        <div>
          <input type="text" placeholder="密码"/>
          <!--<span class="code">密码</span>-->
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
        <div>
          <input type="text" placeholder="再次输入密码"/>
          <!--<span class="pass">再次输入密码 </span>-->
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
      </div>


      <button>注册</button>
      <p>注册则视为您同意《怡康到家服务条款》</p>
    </form>

  </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped lang="scss">
  html {
    font-size: 26.67vw;
    background: #f2f5f4;
  }
  header {
    height: 0.5rem;
    width: 100%;
    background: rgba(65, 189, 150, 1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    .head {
      height: 100%;
      margin: 0 0.12rem;
      /*position: relative;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      a {
        width: 0.08rem;
        height: 0.15rem;
        display: block;
        background: url("../assets/images/user-1/返 回.svg")no-repeat center/cover;
      }
      span {
        /*width: 0.4rem;*/
        font-size:0.18rem;
        color:rgba(255,255,255,1);
      }

    }
  }
  form {
    margin-top: 0.61rem;
    font-size: 0.17rem;
    color: #666666;
    .box {
      padding: 0 0.12rem;
      background: white;
      div {
        height: 0.6rem;
        border-bottom: 0.001rem solid #dddddd;
        line-height: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 0.1rem;
          height: 0.1rem;
        }
        .send {
          font-size: 0.13rem;
        }
        input {
          border: none;
        }
        input::-webkit-input-placeholder{
          color:#666666;
          font-size:0.17rem;
        }
      }
      div:nth-child(3) {
        border-bottom: none;

      }
    }
    button {
      /*width:686px;*/
      width: 91%;
      margin: 0.3rem 0.16rem 0.12rem 0.16rem;
      height:0.5rem;
      background:rgba(65,189,150,1);
      border-radius:0.24rem;
      font-size:0.18rem;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    p {
      padding: 0 0.16rem;
      height:0.15rem;
      font-size:0.13rem;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
  }


</style>