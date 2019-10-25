<template>
  <div class="register">
    <header>
      <div class="head">
        <a href="/home"></a>
        <span>登录</span>
        <span></span>
      </div>
    </header>
    <form v-if="!isReg">
      <div class="box">
        <div>
          <input type="text" placeholder="登录名" v-model="name"/>
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
        <div>
          <input type="password" placeholder="密码" v-model="password"/>
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
      </div>
      <section>
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </section>
      <p>登录则视为您同意《怡康到家服务条款》</p>
    </form>
    <form v-else>
      <div class="box">
        <div>
          <input type="text" placeholder="登录名" v-model="name"/>
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
        <div>
          <input type="password" placeholder="密码" v-model="password"/>
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
        <div>
          <input type="password" placeholder="再次输入密码" v-model="repeat"/>
          <img src="../assets/images/user-1/guanbi icon@2x.png"/>
        </div>
      </div>
      <section>
        <button type="button" @click="register()">注册</button>
        <button type="button" @click="cancel()">取消</button>
      </section>
      <p>注册则视为您同意《怡康到家服务条款》</p>
    </form>

  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                isReg:false,
                name:'',
                password:'',
                repeat:''
            }
        },
        methods:{
            login(){
                if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
                    this.name = '';
                    this.password = '';
                    this.$router.push('/user')
                }
                else{
                    alert('用户名或密码不正确');
                    this.name = '';
                    this.password = '';
                }

            },
            reg(){
                this.isReg = true
            },
            cancel(){
                this.isReg = false
                this.$router.push('/home')
            },
            register(){
                if(this.password===this.repeat){
                    localStorage.setItem("name",this.name);
                    localStorage.setItem("password",this.password)
                    this.name = '';
                    this.password = '';
                    this.isReg = false
                }
                else {
                    alert('两次输入密码不一致')
                }
            }
        }
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
      div:last-child {
        border-bottom: none;

      }
    }


    section {
      margin: 0.3rem 0.16rem 0.12rem 0.16rem;
      height:0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        /*width:686px;*/
        width: 48%;
        height:0.5rem;
        background:rgba(65,189,150,1);
        border-radius:0.24rem;
        font-size:0.18rem;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height: 0.5rem;
        text-align: center;
      }

    }
    p {
      padding: 0 0.16rem;
      height:0.15rem;
      font-size:0.13rem;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    /*button {*/
      /*!*width:686px;*!*/
      /*width: 90%;*/
      /*margin: 0.3rem 0.16rem 0.12rem 0.16rem;*/
      /*height:0.5rem;*/
      /*background:rgba(65,189,150,1);*/
      /*border-radius:0.24rem;*/
      /*font-size:0.18rem;*/
      /*font-weight:400;*/
      /*color:rgba(255,255,255,1);*/
    /*}*/

  }




</style>