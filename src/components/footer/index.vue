<template>
    <footer class="footer">
        <!--页脚内容-->
        <div class="container content">
            <div class="row clearfix">
                <div class="col-md-4 column footer_image">
                    <img src="../../../public/image/footer/background.png" alt="background">
                </div>
                <div class="col-md-8 column footer_content">
                    <div class="footer_content_txt">
                        <h3>地址：广东省深圳市南山区南山街道桂庙路22号</h3>
                        <ul>
                            <li>咨询热线：156-2658-0565</li>
                            <li>官方邮箱：zhongxingyijiao@yeah.net</li>
                            <li>邮政编码：518042</li>
                        </ul>
                    </div>
                    <div class="footer_content_erweima">
                        <h2>关注我们</h2>
                        <ul>
                            <li>
                                <img src="../../../public/image/footer/二维码-官方微信号.png" alt="erweima">
                            </li>
                            <li>
                                <img src="../../../public/image/footer/二维码-官方微博.jpg" alt="erweima">
                            </li>
                        </ul>
                    </div>
                    <div class="footer_content_copyright">
                        <p>Copyright &copy;2019-{{year}}.All rightreserved.|<a href="http://www.beian.miit.gov.cn">粤ICP备19146936</a>|众行艺教（深圳）教育科技有限公司</p>
                        <span>站点地图</span>
                    </div>
                </div>
            </div>
        </div>

    </footer>

</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                // 至今的版权年份
                year:new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
    .footer{
        background-color: #393c41;
        color: #fff;
    }
    .footer_image img{
        height: 500px;
        margin-top: 20px;
    }
    .footer_content_txt{
        color: #fff;
        margin-top: 50px;
    }
    .footer_content_txt h3{
        padding-bottom: 15px;
        font-size: 20px;
        background: url("../../../public/image/footer/长横线.png") no-repeat bottom center;
    }
    .footer_content_txt ul{
        width: 100%;
        position: relative;
        margin-top: 15px;
    }
    .footer_content_txt ul li{
        display: inline-block;
        position: absolute;
        font-size: 18px;
    }
    .footer_content_txt ul li:nth-of-type(1){
        left: 0;
    }
    .footer_content_txt ul li:nth-of-type(2){
        left: 50%;
        margin-left: -72px;
    }
    .footer_content_txt ul li:nth-of-type(3){
        right: 0;
    }

    .footer_content_erweima{
        margin-top: 100px;
    }
    .footer_content_erweima h2{
        margin-bottom: 30px;
    }
    .footer_content_erweima ul li{
        display: inline-block;
        position: relative;
    }
    .footer_content_erweima ul li:nth-of-type(1){
        left: -15%;
    }
    .footer_content_erweima ul li:nth-of-type(1):after{
        display: block;
        content: "微信公众号";
        text-align: center;
        margin-top: 15px;
    }
    .footer_content_erweima ul li:nth-of-type(2){
        right: -15%;
    }
    .footer_content_erweima ul li:nth-of-type(2):after{
        content: "官方微博";
        text-align: center;
        display: block;
        margin-top: 15px;
    }
    .footer_content_erweima ul li img{
        width: 180px;
        height: 180px;
        padding: 15px;
        z-index: 1003;
        background-color: #fff;
    }

    .footer_content_copyright{
        border-top: 1px solid #fff;
        position: relative;
        text-align: left;
        padding-top: 15px;
        width: 90%;
        margin: 0 auto;
    }
    .footer_content_copyright p{
        display: inline-block;
    }
    .footer_content_copyright span{
        position: absolute;
        right: 0;
        top:13px;
        font-size: 16px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        /*图像*/
        .footer_image img{
            display: none;
        }
        /*二维码*/
        .footer_content_erweima ul li{
            margin: auto -15px;
        }
        .footer_content_erweima ul li img{
            width: 120px;
            height: 120px;
        }
        .footer_content_erweima h2{
            margin: 5px 0;
        }
        .footer_content_erweima{
            margin-top: 15px;
        }
        /*热线*/
        .footer_content_txt ul li{
            display: block;
            position: relative;
        }
        .footer_content_txt ul li:nth-of-type(2){
            left: 0;
            margin-left: 0;
        }

    }


</style>
