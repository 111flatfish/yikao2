<template>
    <div class="about">
        <!--轮播图-->
        <Banner v-bind:banner-data="type"  v-bind:location-data="loc"></Banner>
        <main class="container">
            <!--学校介绍-->
            <div class="row clearfix about_introduce">
                <div class="about_introduce_header">
                    <img src="../../../public/image/about/logo.png" alt="logo">
                    <h1>学校简介</h1>
                </div>
                <div class="about_introduce_content">
                    <p>这里是描述性文字</p>
                </div>
            </div>
            <!--办学理念-->
            <div class="row clearfix about_evi">
                <!--标题-->
                <div class="about_evi_title">
                    <img src="../../../public/image/about/图标-灯泡.png" alt="办学理念">
                    <h3>办学理念</h3>
                </div>
                <!--内容-->
                <div class="about_evi_content">
                    <img src="../../../public/image/school/2.jpg" class="showaboutimg" alt="evi">
                        <ul class="about_banner">
                            <li><img src="../../../public/image/school/1.jpg" alt="school"></li>
                            <li><img src="../../../public/image/school/2.jpg" alt="school"></li>
                            <li><img src="../../../public/image/school/3.jpg" alt="school"></li>
                        </ul>
                </div>
            </div>
            <!--教学特色-->
            <div class="row clearfix about_feature">
                <div class="about_feature_header">
                    <img src="../../../public/image/feature/图标-教学特色.png" alt="label">
                    <span>教学特色</span>
                </div>
                <div class="about_feature_content">
            <div class="six1"></div>
            <div class="six2"></div>
            <div class="six3"></div>
            <div class="about_feature_icon1">
            <img src="../../../public/image/feature/图标-5G.png" alt="feature">
            <div class="about_feature_txt">
            <h1>5G时代</h1>
            <p>网络信号更稳定快捷，使得线上教学更顺畅自然。</p>
            </div>
            </div>
            <div class="about_feature_icon2">
            <img src="../../../public/image/feature/图标-碎片时间.png" alt="feature">
            <div class="about_feature_txt">
            <h1>时间自由</h1>
            <p>不耽误文化课学习时间，充分利用碎片时间随时随地学。</p>
            </div>
            </div>
            <div class="about_feature_icon3">
            <img src="../../../public/image/feature/图标-五星师资.png" alt="feature">
            <div class="about_feature_txt">
            <h1>顶级师资</h1>
            <p>来自首都各大名校的资深艺考导师</p>
            </div>
            </div>
            <div class="about_feature_icon4">
            <img src="../../../public/image/feature/图标-中心延展节点图.png" alt="feature">
            <div class="about_feature_txt">
            <h1>全面学习</h1>
            <p>教学季、考试季课程细致、专业而丰富</p>
            </div>
            </div>
            <div class="about_feature_icon5">
            <img src="../../../public/image/feature/图标-私人定制.png" alt="feature">
            <div class="about_feature_txt">
            <h1>私人定制</h1>
            <p>根据学生个人情况和愿望拟定学习计划和考试目标。</p>
            </div>
            </div>
            <div class="about_feature_icon6">
            <img src="../../../public/image/feature/图标-VR佩戴.png" alt="feature">
            <div class="about_feature_txt">
            <h1>VR课堂</h1>
            <p>国内首创将VR技术与表演课程结合，给学生带来身临其境的体验。</p>
            </div>
            </div>
            </div>
            </div>
            <!--教学体系-->
            <div class="row clearfix about_system">
            <div class="about_system_header">
            <img src="../../../public/image/system/图标-书本.png" alt="label">
            <span>教学体系</span>
            </div>
            <div class="about_system_content">
            <div class="col-md-6">
            <div class="media">
            <div class="media-left">
            <a href="#">
            <img class="media-object" src="../../../public/image/system/system.jpeg" alt="system">
            </a>
            </div>
            <div class="media-body">
            <h1 class="media-heading">课程单元</h1>
            <p>线上授课我们采用可视化的视频方式，将线下一个小时所讲述的知识点切成十分钟左右的内容，既提高了效率有提升了学习兴趣</p>
            </div>
            </div>
            <div class="media">
            <div class="media-left">
            <a href="#">
            <img class="media-object" src="../../../public/image/system/system.jpeg" alt="system">
            </a>
            </div>
            <div class="media-body">
            <h1 class="media-heading">授课模式</h1>
            <p>线上授课的目标是通过统考，线下训练的目标是冲击校考</p>
            </div>
            </div>
            </div>
            <div class="col-md-6">
            <div class="media">
            <div class="media-left">
            <a href="#">
            <img class="media-object" src="../../../public/image/system/system.jpeg" alt="system">
            </a>
            </div>
            <div class="media-body">
            <h1 class="media-heading">阶段目标</h1>
            <p>将没有必要线下集训学习的课程内容，改为以录播和直播课程的线上授课模式。结合寒暑假的线下集训，最大程度保留了学生学习文化课的时间。</p>
            </div>
            </div>
            <div class="media">
            <div class="media-left">
            <a href="#">
            <img class="media-object" src="../../../public/image/system/system.jpeg" alt="system">
            </a>
            </div>
            <div class="media-body">
            <h1 class="media-heading">闯关式学习</h1>
            <p>戏传整个线上学习系统类似于游戏通关。学生在线上按照计划完成每周学习任务，并将课后作业上传系统评分，老师会在24小时内给予一对一的点评讲解，只有分数合格后才可进入下一级段的内容学习。</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <!--学校荣誉-->
            <div class="row clearfix about_honor">
                <div class="about_honor_header">
                    <img src="../../../public/image/about/图标-证书.png" alt="label">
                    <span>学校荣誉</span>
                </div>
                <div content="about_honor_content">
                    <ul class="about_honor_banner">
                        <li><img src="../../../public/image/school/1.jpg" alt="school"></li>
                        <li><img src="../../../public/image/school/2.jpg" alt="school"></li>
                        <li><img src="../../../public/image/school/3.jpg" alt="school"></li>
                    </ul>
                </div>
            </div>
        </main>

    </div>
</template>

<script>
    // 引入组件
    import Banner from "../../components/banner"
    // 引入util函数
    import util from "../../util"

    // 引入axios
    import axiosReq from  "../../util/axiosConfig"

    export default {
        name: "about",
        components:{
            Banner
        },
        // 数据
        data(){
            return {
                // banner类型
                type:"about",
                // banner位置
                loc:"title",

                // 教室轮播图数据
                classBanner:[],
                // jquery定时器
                timer:null,
                timer2:null

            }
        },
        // 组件创建
        created(){
            // 请求教室轮播图数据
            axiosReq.get(`getBanner/page/about/location/classRoom`).then(data=>{
                this.classBanner = data.data;
                this.$nextTick(()=> {
                    $(function () {
                        $(".about_idea_banner .item").first().addClass("active");
                        $(".carousel-indicators li").first().addClass("active");
                    })
                })
            });
        },
        // 组件挂载
        mounted() {
            // 初始化动画
            util.aboutInit(this);
        },
        // 组件销毁
        destroyed() {
            // 清除jQuery的定时器，避免动画积累
            clearInterval(this.timer);
            clearInterval(this.timer2);
        }
    }

</script>

<style scoped>
main{
    color: #404040;
    font-weight: 400;
    margin: 0 auto;
}
.about{
    margin-top: 125px;
    overflow: hidden;
}
/*学校简介*/
.about_introduce{
    background-color: #d6d6d6;
}
.about_introduce_header img,h1{
    display: inline-block;
}
.about_introduce_header h1{
    font-size: 75px;
    position: relative;
    top: 15px;
}
.about_introduce_content{
    border: 2px solid #000;
    border-radius: 10px;
    padding: 30px;
    margin: 50px 150px;
    background-color: #fff;
    box-shadow: 4px 4px 1px 1px rgba(0,0,0,.5);
}
.about_introduce_content p{
    font-size: 32px;
    text-align: left;
    text-indent: 32px;
}



/*办学理念*/
.about_evi{
    text-align: center;

}
.about_evi_title{
    /*background: url("http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/3/default.jpg") no-repeat;*/
    margin: 50px 0 0 0;
}
.about_evi_title h3,img{
    display: inline-block;
}
.about_evi_title h3{
    line-height: 80px;
    font-size: 75px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    margin-top: 0;
    border-radius: 6px;
    color: #444;
}
.about_evi_title img{
    width: 150px;
    height: 140px;
}
.about_evi_content{
    position: relative;
    margin: 80px;
}
.about_evi_content .showaboutimg{
    width: 100%;
}
.about_evi_content ul{
    width: 425px;
    height: 105px;
    position:absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    overflow: hidden;
    padding: 10px;
    /*border: 10px solid white;*/
    border: 2px solid #000;
    background-color: white;
}
.about_evi_content ul li img{
    width: 120px;
    height: 80px;
    margin: 0 10px;
}
.about_evi_content ul li {
    position: absolute;
    left: 0;
    top: 10px;
    cursor: pointer;
}
.about_evi_content ul li:hover{
    transform: scale(1.1);
}
.active{
    border: 6px solid #FFA500;
    border-radius: 4px;
}

/*教学特色*/
.about .about_feature{
    background-color: #d6d6d6;
    padding:30px 0 60px 0;
}
.about .about_feature_header img{
    width: 128px;
    height: 128px;
}
.about .about_feature_header span{
    font-size: 75px;
    position: relative;
    top:20px;
}
.about_feature_content{
    margin-top: 30px;
    position: relative;
    background: url("../../../public/image/feature/logo.png") no-repeat;
    background-position: center 35%;
}
.about_feature_content .six1,.six2,.six3{
    width: 555px;
    height: 320px;
    border-left: 10px solid #ffA500;
    border-right: 10px solid #ffA500;
    margin: 0 auto;
}
.about_feature_content .six1{
    position: relative;
    transform: rotate(60deg);
    top:200px;

}
.about_feature_content .six2{
    position: relative;
    top: -120px;
    transform: rotate(-60deg);
}
.about_feature_content .six3{
    position: relative;
    top: -440px;
}
.about_feature_content .about_feature_icon1,.about_feature_icon2,.about_feature_icon3,.about_feature_icon4,.about_feature_icon5,.about_feature_icon6{
    position: absolute;
}
.about_feature_content .about_feature_icon1>img,.about_feature_icon2>img,.about_feature_icon3>img,.about_feature_icon4>img,.about_feature_icon5>img,.about_feature_icon6>img{
    width: 118px;
    height: 118px;
}
.about_feature_content .about_feature_txt{
    position: relative;
    display: inline-block;
    width: 280px;
}
.about_feature_content .about_feature_txt>h1{
    display: inline-block;
    width: 150px;
    color: #000;
    font-weight: 800;
    border-bottom: 2px solid #ffA500;
}
.about_feature_content .about_feature_txt>p{
    font-size: 20px;
    width: 280px;
    text-align:center;
    display:inline-block;
}
.about_feature_content .about_feature_icon1{
    top:8%;
    right:6%;
}
.about_feature_content .about_feature_icon1>.about_feature_txt{
    position: relative;
    left: -15%;
    top:100px;
}
.about_feature_content .about_feature_icon2{
    top:-8%;
    left:45.5%;
}
.about_feature_content .about_feature_icon2>.about_feature_txt{
    position: relative;
    left: -48%;
    top:160px;
}
.about_feature_content .about_feature_icon3{
    top:8%;
    left:26%;
}
.about_feature_content .about_feature_icon3>.about_feature_txt{
    position: relative;
    left: -85%;
    top:100px;
}
.about_feature_content .about_feature_icon4{
    top:42%;
    left:26%;
}
.about_feature_content .about_feature_icon4>.about_feature_txt{
    position: relative;
    left: -85%;
    top:120px;
}
.about_feature_content .about_feature_icon5{
    top:58%;
    left:45.5%;
}
.about_feature_content .about_feature_icon5>.about_feature_txt{
    position: relative;
    left: -52%;
    top:160px;
}
.about_feature_content .about_feature_icon6{
    top:38%;
    right: 6%;
}
.about_feature_content .about_feature_icon6>.about_feature_txt{
    position: relative;
    left: -12%;
    top:128px;
}

/*教学体系*/
.about .about_system{
    padding:30px 0 150px 0;
}
.about .about_system_header img{
    width: 128px;
    height: 128px;
}
.about .about_system_header span{
    font-size: 75px;
    position: relative;
    top:20px;
}
.about_system_content{
    margin-top: 40px;
}
.about_system_content .media{
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 230px;
    overflow: inherit;
    margin-top: 60px;
}
.about_system_content .media .media-left img{
    width: 235px;
    height: 235px;
    position: relative;
    left: -5px;
    top:-2.5px;
    z-index: 1003;
}
.about_system_content .media .media-body{
    padding: 15px 10px;

}
.about_system_content .media .media-body h1{
    text-align: left;
    border-bottom: 3px solid #FFA500;
}
.about_system_content .media .media-body p{
    font-size: 16px;
    text-align: left;
}
.about_system_content .media .media-body .media-heading{
    position: relative;
    padding: 5px;
}

/*学校荣誉*/
.about .about_honor{
    padding:30px 0 0 0;
    background-color: #d6d6d6;
}
.about .about_honor_header img{
    width: 128px;
    height: 128px;
}
.about .about_honor_header span{
    font-size: 75px;
    position: relative;
    top:20px;
}
.about_honor ul{
    position:relative;
    left: 0;
    bottom: 0;
    margin-top: 100px;
    height: 800px;
    overflow: hidden;

}
.honorActive{
    transform: scale(1.1,1.4);
    transition: .5s;
    opacity: 1;
}
.about_honor ul li img{
    width: 467px;
    height: 360px;
    opacity: 0.5;
}
.about_honor ul li {
    position: absolute;
    left: 0;
    top: 100px;
    cursor: pointer;
    display: inline-block;
    z-index: 1005;
}




@media (max-width: 1600px) {
    .about_honor ul{
        margin-left: 0;
    }
    .about_feature_content .about_feature_icon1{
        top:8%;
        right:-6%;
    }
    .about_feature_content .about_feature_icon2{
        top:-8%;
        left:44%;
    }
    .about_feature_content .about_feature_icon3{
        top:8%;
        left:20%;
    }
    .about_feature_content .about_feature_icon4{
        top:42%;
        left:20%;
    }
    .about_feature_content .about_feature_icon5{
        top:58%;
        left:44%;
    }
    .about_feature_content .about_feature_icon6{
        top:38%;
        right:-6%;
    }
    .about_honor ul li img{
        width: 368px;
        height: 330px;
        opacity: 0.5;
    }
}
@media (max-width: 768px) {
    /*学校简介*/
    .about_introduce_content{
        margin: 50px 0;
    }
    /*办学理念*/
    .about_evi_content{
        margin: 10px 0;
    }
    .about{
        margin-top: 60px;
    }
    .about_evi_content ul{
        width: 209px;
        height: 60px;
        position:absolute;
        right: 20px;
        bottom: 10px;
        overflow: hidden;
        padding: 5px;
        border: 4px solid white;
        background-color: white;
        border-radius: 4px;
    }
    .about_evi_content ul li img{
        width: 50px;
        height: 40px;
        margin-right: 5px;
    }
    .about_idea_banner .item img{
        height: 250px;
    }
    .about_idea_content div:nth-child(2){
        padding: 0;
    }
    /*教学特色*/
    .about_feature{
        display: none;
    }
    /*教学体系*/
    .about .about_system_header span,.about .about_honor_header span{
        font-size: 50px;
    }
    .about_system_content .media .media-left{
        display: block;
    }
    .about_system_content .media{
        height: 100%;
    }
    /*学校荣耀*/
    .about_honor ul{
        height: 300px;
        margin-top: 0;
    }
    .about_honor ul li img{
        width: 120px;
        height: 100px;
    }
    .honorActive{
        transform: scale(1.8,1.4);
    }


}
</style>
