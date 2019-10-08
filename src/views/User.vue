<template>
    <div class="user">
        <div class="top">
            <div class="top-head">
                <img src="../assets/images/user/shezhi icon@2x.png">
                <img src="../assets/images/user/xiaoxi icon@2x.png">
            </div>
            <div class="info">
                <img src="../assets/images/user/touxiang pic@2x.png">
                <div class="information">
                    康娜酱
                    <br>
                    151****4362
                </div>
            </div>
        </div>
        <div class="my-order" >
            <div class="order-top">
                <span>我的订单</span>
                <div class="check-order">查看所有订单<i></i></div>
            </div>
            <div class="order-down">
                <div v-for="state in status" class="order-state">
                    <img :src=state.picture>
                    {{state.img}}
<!--                    <img src="../assets/images/user/daifukuan icon@2x.png">-->
                    <p>{{state.p}}</p>
                </div>
            </div>
        </div>
        <div class="my-status">
            <div v-for="dyn in dynamic" class="status-item">
                <img :src=dyn.print>{{dyn.img}}
<!--                <img src="../assets/images/user/shoucang icon@2x.png">-->
                <p>{{dyn.p}}</p>
            </div>
        </div>

        <Footer></Footer>
    </div>

</template>

<script>
    import Footer from "../components/Footer";
    import picture6 from "../assets/images/user/daifukuan icon@2x.png"
    import picture7 from "../assets/images/user/daifahuo icon@2x.png"
    import picture8 from "../assets/images/user/daishouhuo icon@2x.png"
    import picture9 from "../assets/images/user/daipingjia icon@2x.png"
    import picture10 from "../assets/images/user/shoucang icon@2x.png"
    import picture11 from "../assets/images/user/zuji icon@2x.png"
    import picture12 from "../assets/images/user/wodeyouhuiquan icon@2x.png"
    import picture13 from "../assets/images/user/yongyaotixing icon@2x.png"
    import picture14 from "../assets/images/user/wodechufang icon@2x.png"
    import picture15 from "../assets/images/user/qianbao icon@2x.png"
    import picture16 from "../assets/images/user/wenzhenjilu icon@2x.png"
    import picture17 from "../assets/images/user/zaixiankefu icon@2x.png"
    import picture18 from "../assets/images/user/changjianwenti icon@2x.png"
    import picture19 from "../assets/images/user/xianxiayaodian icon@2x.png"
    export default {
        name: "user",
        components: {Footer},
        data(){
            return{
                status:[
                    {picture:picture6,p:'代付款'},
                    {picture:picture7,p:'代发货'},
                    {picture:picture8,p:'代收货'},
                    {picture:picture9,p:'代评价'}
                ],
                dynamic:[
                    {print:picture10,p:'我的收藏'},
                    {print:picture11,p:'我的足迹'},
                    {print:picture12,p:'优惠券'},
                    {print:picture13,p:'用药提醒'},
                    {print:picture14,p:'我的处方'},
                    {print:picture15,p:'我的钱包'},
                    {print:picture16,p:'问诊记录'},
                    {print:picture17,p:'在线客服'},
                    {print:picture18,p:'常见问题'},
                    {print:picture19,p:'线下药店'},

                ]
            }
        }
    }

</script>

<style lang="scss">
    html {
        font-size: 26.67vw;
        background: #f2f5f4;
    }
    .top {
        height:1.7rem;
        background:rgba(65,189,150,1);
        border:0.005rem solid rgba(153,153,153,1);
        .top-head {
            padding: 0.2rem 0.28rem 0;
            height: 0.3rem;
            img {
                width: 0.21rem;
                height: 0.21rem;
                float: right;
                margin-left: 0.24rem;
                margin-top: 0;
            }
        }
        .info {
            padding: 0 0.15rem;
            height: 1.2rem;
            img {
                width:0.6rem;
                height:0.6rem;
                border-radius: 0.3rem;
                float: left;
            }
            .information {
                width:0.8rem;
                height:0.5rem;
                font-size:0.18rem;
                font-weight:500;
                color:rgba(255,255,255,1);
                float: left;
                margin: 0.13rem 0.25rem 0.04rem;
                line-height: 0.25rem;
            }
        }
    }
    .my-order{
        /*width:686px;*/
        height: 1.38rem;
        background: rgba(255,255,255,1);
        box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.15);
        border-radius: 0.1rem;
        margin: -0.33rem 0.16rem;
        .order-top {
            padding: 0.15rem 0.2rem;
            height: 0.2rem;
            span {
                font-size:0.18rem;
                font-weight:500;
                color:rgba(102,102,102,1);
                float: left;
            }
            .check-order {
                float: right;
                font-size:0.13rem;
                font-weight:500;
                color:rgba(102,102,102,1);
                margin-right: 0.15rem;
                position: relative;
                i {
                    width: 0.06rem;
                    height: 0.12rem;
                    background: url("../assets/images/user/chakan icon@2x.png")no-repeat center/cover;
                    display: block;
                    position: absolute;
                    right: -0.15rem;
                    top: 0.03rem;
                }
            }
        }
        .order-down {
            height: 1.2rem;
            padding: 0.05rem 0.2rem;
            display: flex;
            justify-content: space-around;
            .order-state {
                margin-top: 0.2rem;
                width: 0.4rem;
                position: relative;
                img {
                    width: 0.31rem;
                    height: 0.25rem;
                    position: absolute;
                    top: 0;
                    left: 0.05rem;
                    right: 0;
                }
                p {
                    font-size:0.13rem;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    position: absolute;
                    top: 0.3rem;
                    left: 0;
                    right: 0;
                }
            }
        }
    }
    .my-status{
        /*width:686px;*/
        height:3rem;
        background:rgba(255,255,255,1);
        box-shadow:0 0.02rem 0.03rem 0 rgba(0, 0, 0, 0.15);
        border-radius:0.1rem;
        margin: 0.5rem 0.16rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        .status-item {
            width: 0.45rem;
            height: 0.44rem;
            margin: 0.3rem 0 0 0.35rem;
            position: relative;
            img {
                width: 0.21rem;
                height: 0.21rem;
                position: absolute;
                top: 0;
                right: 0;
                left: 0.03rem;
            }

            p {
                font-size:0.13rem;
                font-weight:500;
                color:rgba(102,102,102,1);
                width: 120%;
                position: absolute;
                bottom: 0;
                right: 0;
                left: -0.14rem;
            }
        }
    }
</style>