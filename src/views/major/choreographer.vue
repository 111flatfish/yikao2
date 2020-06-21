<template>
    <div class="choreographer">
        <!--头部-->
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div class="container">
                <!--专业图片-->
                <div class="row clearfix showcontent_major">
                    <img src="../../../public/image/major/编导（长）.jpg" alt="编导">
                </div>
                <!--专业介绍-->
                <div class="row clearfix showcontent">
                    <!--内容显示区-->
                    <div class="col-md-5">
                        <div class="show1">
                            <div class="list-group" style="padding: 15px">
                                <div class="content">
                                    <h1>专业信息</h1>
                                    <p>这里可以吹水了。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--内容展示区-->
                    <div class="col-md-7 show2">
                        <div class="show2_header">
                            <h1>考察内容</h1>
                        </div>
                        <div class="show2_content">
                            <!-- Nav tabs -->
                            <!--分页导航-->
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" v-for="(item,index) in majorRight"><a v-bind:href="'#content'+(index+1)" v-bind:aria-controls="'content'+(index+1)" role="tab" data-toggle="tab">{{item.major_name}}</a></li>
                            </ul>
                            <!--分页内容-->
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <!--处于鼠标悬浮的分页项为active-->
                                <div role="tabpanel" class="tab-pane" v-bind:id="'content'+(index2+1)" v-for="(item,index2) in majorRight">
                                    <div class="list-group">

                                        <div class="list-group-item" v-for="subitem in majorRightContent[index2]" style="display: none">
                                            <!--图片-->
                                            <img v-bind:src="subitem[0]" alt="content">
                                            <!--文字内容-->
                                            <div class="txt">
                                                <p>{{subitem[1]}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--分数要求-->
                <div class="row clearfix showcontent_score">
                    <div class="showcontent_score_header">
                        <img src="../../../public/image/score/标签-分数要求.png" alt="label">
                        <span>分数要求</span>
                    </div>
                    <div class="showcontent_score_content">
                        <img src="../../../public/image/score/分数图.png" alt="score">
                    </div>
                </div>
                <!--就业岗位-->
                <div class="row clearfix showcontent_job">
                    <div class="showcontent_job_header">
                        <h1>就业岗位</h1>
                    </div>
                    <div class="showcontent_job_content">
                        <img src="../../../public/image/major/job.png" alt="job">
                    </div>
                </div>
                <!--顶级大学-->
                <div class="row clearfix showcontent_college">
                    <div class="showcontent_college_header">
                        <h1>顶级大学</h1>
                    </div>
                    <div class="showcontent_college_content">
                        <div class="col-md-3">
                            <img src="../../../public/image/major/中央戏剧学院.jpg" alt="中央戏剧学院">
                            <h2>中央戏剧学院</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/北京电影学院.jpg" alt="北京电影学院">
                            <h2>北京电影学院</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/中国传媒大学.jpg" alt="中国传媒大学">
                            <h2>中国传媒大学</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/浙江传媒学院.jpg" alt="浙江传媒学院">
                            <h2>浙江传媒学院</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/中国戏曲学院.png" alt="中国戏曲学院">
                            <h2>中国戏曲学院</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/上海戏剧学院.gif" alt="上海戏剧学院">
                            <h2>上海戏剧学院</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/山东艺术学院.jpg" alt="山东艺术学院">
                            <h2>山东艺术学院</h2>
                        </div>
                        <div class="col-md-3">
                            <img src="../../../public/image/major/南京艺术学院.jpg" alt="南京艺术学院">
                            <h2>南京艺术学院</h2>
                        </div>
                    </div>
                </div>
                <!--师资介绍-->
                <div class="row clearfix showcontent_teacher">
                    <div class="showcontent_teacher_header">
                        <h1>师资介绍</h1>
                    </div>
                    <div class="showcontent_teacher_content"></div>
                    <!--老师轮播图-->
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                        <!-- 图片内容 -->
                        <div class="carousel-inner showcontent_teacher_banner" role="listbox" style="border-radius: 4px">
                            <div class="item active">
                                <div class="col-md-offset-1 col-md-5">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#">
                                                <img class="media-object" src="../../../public/image/major/teacher.jpg" alt="teacher">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">田二妞</h3>
                                            <h4>赵铁柱恩师，国家一级演员</h4>
                                            <p>这里是描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                            </p>
                                            <h3><span><img src="../../../public/image/major/图标-授课-ff9900.png" alt="课程"></span>教授课程 ></h3>
                                            <ul>
                                                <li>表演基础</li>
                                                <li>表演进阶</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#">
                                                <img class="media-object" src="../../../public/image/major/teacher.jpg" alt="teacher">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">田二妞</h3>
                                            <h4>赵铁柱恩师，国家一级演员</h4>
                                            <p>这里是描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                            </p>
                                            <h3><span><img src="../../../public/image/major/图标-授课-ff9900.png" alt="课程"></span>教授课程 ></h3>
                                            <ul>
                                                <li>表演基础</li>
                                                <li>表演进阶</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-md-offset-1 col-md-5">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#">
                                                <img class="media-object" src="../../../public/image/major/teacher.jpg" alt="teacher">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">田二妞</h3>
                                            <h4>赵铁柱恩师，国家一级演员</h4>
                                            <p>这里是描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                            </p>
                                            <h3><span><img src="../../../public/image/major/图标-授课-ff9900.png" alt="课程"></span>教授课程 ></h3>
                                            <ul>
                                                <li>表演基础</li>
                                                <li>表演进阶</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#">
                                                <img class="media-object" src="../../../public/image/major/teacher.jpg" alt="teacher">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">田二妞</h3>
                                            <h4>赵铁柱恩师，国家一级演员</h4>
                                            <p>这里是描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                            </p>
                                            <h3><span><img src="../../../public/image/major/图标-授课-ff9900.png" alt="课程"></span>教授课程 ></h3>
                                            <ul>
                                                <li>表演基础</li>
                                                <li>表演进阶</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 切换图片 -->
                        <!--左-->
                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" style="border-radius: 4px">
                            <span class="pre" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <!--右-->
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" style="border-radius: 4px">
                            <span class="next" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="showcontent_teacher_footer">
                        <h2>部分高校考官因学校规定禁止对外宣传，入学后可享受考官直接授课福利</h2>
                    </div>
                </div>

                <!--底部内容展示区-->
                <div class="showcontent2 ">
                    <div class="showcontent2_course_header">
                        <h1>班型介绍</h1>
                    </div>
                    <div class="row clearfix">
                        <div class="col-md-3 common_showcontent">
                            <ul>
                                <!--图片-->
                                <li class="img"><img src="../../../public/image/teacherheader/4.jpeg" alt="课包"></li>
                                <!--文字内容-->
                                <li class="content">
                                    <h4>课包名字</h4>
                                    <p>课时总数：7 周 56 节课</p>
                                    <p>上课时间：母鸡豆</p>
                                    <p>人数容量：8人</p>
                                </li>
                                <!--悬浮展示描述区-->
                                <li class="free">
                                    <span>详情 >>></span>
                                    <div class="freebackground freecontent"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 common_showcontent">
                            <ul>
                                <!--图片-->
                                <li class="img"><img src="../../../public/image/teacherheader/4.jpeg" alt="课包"></li>
                                <!--文字内容-->
                                <li class="content">
                                    <h4>课包名字</h4>
                                    <p>课时总数：7 周 56 节课</p>
                                    <p>上课时间：母鸡豆</p>
                                    <p>人数容量：8人</p>
                                </li>
                                <!--悬浮展示描述区-->
                                <li class="free">
                                    <span>详情 >>></span>
                                    <div class="freebackground freecontent"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 common_showcontent">
                            <ul>
                                <!--图片-->
                                <li class="img"><img src="../../../public/image/teacherheader/4.jpeg" alt="课包"></li>
                                <!--文字内容-->
                                <li class="content">
                                    <h4>课包名字</h4>
                                    <p>课时总数：7 周 56 节课</p>
                                    <p>上课时间：母鸡豆</p>
                                    <p>人数容量：8人</p>
                                </li>
                                <!--悬浮展示描述区-->
                                <li class="free">
                                    <span>详情 >>></span>
                                    <div class="freebackground freecontent"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 common_showcontent">
                            <ul>
                                <!--图片-->
                                <li class="img"><img src="../../../public/image/teacherheader/4.jpeg" alt="课包"></li>
                                <!--文字内容-->
                                <li class="content">
                                    <h4>课包名字</h4>
                                    <p>课时总数：7 周 56 节课</p>
                                    <p>上课时间：母鸡豆</p>
                                    <p>人数容量：8人</p>
                                </li>
                                <!--悬浮展示描述区-->
                                <li class="free">
                                    <span>详情 >>></span>
                                    <div class="freebackground freecontent"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="showcontent2_course_footer">
                        <h2>更多详情请咨询值班老师</h2>
                    </div>
                </div>

            </div>
        </main>
        <!--底部-->

    </div>
</template>

<script>
    // 引入组件
    import Banner from "../../components/banner"

    // 引入util的函数
    import util from "../../util"

    // 引入axios
    import axiosReq from "../../util/axiosConfig"

    export default {
        name: "choreographer",
        // 组件传参
        props:["id"],
        // 数据
        data(){
            return{
                // banner类型
                type:"major",
                // banner位置
                loc:"title",
                // 左内容显示区
                majorLeft:[],
                majorLeftContent:[],
                // 右内容展示区
                majorRight:[],
                majorRightContent:[],
                // 中轮播区
                majorMid:[],
                majorMidContent:[],
                // 下内容展示区
                majorDown:[],
                // 轮播用的定时器
                timer:null,
                timer2:null,
                timer3:null,
                timer4:null,
                timer5:null,
                timer6:null,

                majorstyle:null

            }
        },
        // 组件
        components:{
            Banner
        },
        // 组件挂载
        mounted() {
            util.majorInit(this);

        },
        created(){
            this.majorstyle = this.$store.getters.getmajorstyle;
            let that = this;
            // 左边内容显示区请求的数据
            axiosReq.get("getMajor/id/1").then(data=>{
                this.majorLeft = data.data[0];
                let img = this.majorLeft.images_url.split(",");
                let txt = this.majorLeft.introduce.split(",");
                img.forEach((value, index)=>{
                    that.majorLeftContent.push([value,txt[index]]);
                });

                // 加载数据后进行jQuery的初始化
                that.$nextTick(function () {
                    $(function () {
                        // 初始化
                        let m = 0;
                        $(".show1 .content .list-group-item").eq(0).siblings().not(".show1 .background").hide();
                        that.timer = setInterval(function () {
                            $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,0).hide();
                            if(m == 2){
                                m = 0;
                            }else {
                                m = m+1;
                            }
                            $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,1).show();
                        },3000);
                        // 鼠标悬停
                        $(".show1 .content").mouseenter(function () {
                            clearInterval(that.timer);
                            that.timer = setInterval(function () {
                                $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,0).hide();
                                if(m == 2){
                                    m = 0;
                                }else {
                                    m = m+1;
                                }
                                $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,1).show();
                            },3000);
                        });
                    });
                });
            });
            // 中间滑动轮播图数据
            axiosReq.get("getSomeMajors/name/mid").then(data=>{
                this.majorMid = data.data[0];
                let img = this.majorMid.images_url.split(",");
                let txt = this.majorMid.introduce.split(",");
                img.forEach((value, index)=>{
                    that.majorMidContent.push([value,txt[index]]);
                });
                that.$nextTick(function () {
                    //滑播区
                    $(function () {
                        // 初始化
                        let group = $(".slide ul li");
                        let len = group.first().outerWidth();
                        for(let i = 0 ; i < group.length;i++){
                            group.eq(i).css("left",`${len*i}px`);
                        }

                        // 向左缓缓滑动
                        that.timer6 = setInterval(function () {
                            group = $(".slide ul li");
                            group.animate({
                                left:`-=${len}`
                            },7000,"linear",function () {
                                group.first().appendTo(".slide ul").css("left",`${len*(group.length-1)}px`);
                                group.css("margin","10px");
                            })
                        },1000);
                    });
                });


            });
            // 右边展示区请求的数据
            axiosReq.get("getMajors/start/2/num/4").then(data=>{
                this.majorRight = data.data;
                for(let i = 0 ; i < that.majorRight.length;i++){
                    let img = that.majorRight[i].images_url.split(",");
                    let txt = that.majorRight[i].introduce.split(",");
                    let temp = [];
                    for(let j = 0; j < img.length;j++){
                        temp.push([img[j],txt[j]]);
                    }
                    that.majorRightContent.push(temp);
                }
                that.$nextTick(function () {
                    // 加载数据后进行jQuery的初始化
                    $(function () {
                        // 初始化
                        $(".show2 .nav-tabs li").first().addClass("active");
                        $(".show2 .tab-content .tab-pane").first().addClass("active");
                        let group = $(".show2 .tab-content .list-group");
                        let n = 0,o = 0 ,p = 0 ,q = 0;

                        // 第二多标题内容区悬停切内容
                        $(".show2 .nav-tabs li").mouseenter(function () {
                            let index =  $(this).addClass("active").siblings(this).removeClass("active").end().index();
                            $(".show2 .tab-content .tab-pane").eq(index).addClass("active").siblings(this).removeClass("active");
                        });

                        // 第二多标题内容区切图
                        for(let i = 0 ; i < group.length;i++){
                            $(".show2 .tab-content .list-group").eq(i).children().first().show().siblings().hide();
                        }

                        // 每个区添加定时器
                        that.timer2 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(0).children().eq(n).stop(true).fadeTo(200,0).hide();
                            if(n == 2){
                                n = 0;
                            }else {
                                n = n+1;
                            }
                            $(".show2 .tab-content .list-group").eq(0).children().eq(n).stop(true).fadeTo(200,1).show();
                        },3000);
                        that.timer3 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(1).children().eq(o).stop(true).fadeTo(200,0).hide();
                            if(o == 2){
                                o = 0;
                            }else {
                                o = o+1;
                            }
                            $(".show2 .tab-content .list-group").eq(1).children().eq(o).stop(true).fadeTo(200,1).show();
                        },3000);
                        that.timer4 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(2).children().eq(p).stop(true).fadeTo(200,0).hide();
                            if(p == 2){
                                p = 0;
                            }else {
                                p = p+1;
                            }
                            $(".show2 .tab-content .list-group").eq(2).children().eq(p).stop(true).fadeTo(200,1).show();
                        },3000);
                        that.timer5 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(3).children().eq(q).stop(true).fadeTo(200,0).hide();
                            if(q == 2){
                                q = 0;
                            }else {
                                q = q+1;
                            }
                            $(".show2 .tab-content .list-group").eq(3).children().eq(q).stop(true).fadeTo(200,1).show();
                        },3000);

                        // 鼠标悬停
                        $(".show2 .tab-content").mouseenter(function () {
                            // 鼠标进入清除每个定时器
                            clearInterval(that.timer2);
                            clearInterval(that.timer3);
                            clearInterval(that.timer4);
                            clearInterval(that.timer5);
                        }).mouseleave(function () {
                            // 鼠标离开添加定时器
                            that.timer2 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(0).children().eq(n).stop(true).fadeTo(200,0).hide();
                                if(n == 2){
                                    n = 0;
                                }else {
                                    n = n+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(0).children().eq(n).stop(true).fadeTo(200,1).show();
                            },3000);
                            that.timer3 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(1).children().eq(o).stop(true).fadeTo(200,0).hide();
                                if(o == 2){
                                    o = 0;
                                }else {
                                    o = o+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(1).children().eq(o).stop(true).fadeTo(200,1).show();
                            },3000);
                            that.timer4 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(2).children().eq(p).stop(true).fadeTo(200,0).hide();
                                if(p == 2){
                                    p = 0;
                                }else {
                                    p = p+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(2).children().eq(p).stop(true).fadeTo(200,1).show();
                            },3000);
                            that.timer5 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(3).children().eq(q).stop(true).fadeTo(200,0).hide();
                                if(q == 2){
                                    q = 0;
                                }else {
                                    q = q+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(3).children().eq(q).stop(true).fadeTo(200,1).show();
                            },3000);
                        });
                    });
                });


            });
            // 下方滑播图请求的数据
            axiosReq.get("getSomeMajors/name/down").then(data=>{
                this.majorDown = data.data;
            });


        },
        // 组件销毁
        destroyed() {
            clearInterval(this.timer);
            clearInterval(this.timer2);
            clearInterval(this.timer3);
            clearInterval(this.timer4);
            clearInterval(this.timer5);
            clearInterval(this.timer6);
        }
    }

</script>

<style scoped>
    .choreographer{
        margin-top: 125px;
    }
    /*专业图片*/
    .showcontent_major img{
        width: 100%;
    }
    /*内容展示区1*/
    .showcontent{
        background-color: #d6d6d6;
        padding: 30px 30px 100px 30px;
    }
    .showcontent .show1{
        margin: 15px 0 15px 0;
        border-radius: 4px;
    }
    .showcontent .show1 .content{
        position: relative;
    }
    .showcontent .show1 h1{
        font-size: 54px;
        font-weight: bold;
        text-align: left;
        border-left: 4px solid #ffA500;
        padding-left: 20px;
    }
    .showcontent .show1 p{
        font-size: 25px;
    }

    /*半透明背景图*/
    .background{
        position: absolute;
        left: 0;
        top: 0;
        background-color: black;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    /*内容展示区2*/
    .showcontent .show2{
        margin-top: 30px;
        border-radius: 4px;
        overflow: hidden;
    }
    .showcontent .show2 .show2_header h1{
        font-size: 52px;
        border-left: 4px solid #ffA500;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
    .showcontent .show2 .show2_content{
        background-color: white;
        margin-top: 30px;
        box-shadow: 0 0 4px 9px rgba(0,0,0,.1);
        border-radius: 4px;
        padding: 10px 15px 1px 15px;
        margin-bottom: 15px;
    }
    .showcontent .show2 .tab-content,.nav-tabs a{
        position: relative;
        font-size: 20px;
        font-weight: 600;
        color: #333333;
    }
    .showcontent .show2 .nav-tabs li{
        width: 25%;
    }
    .showcontent .show2 .nav-tabs li a{
        width: 100%;
        border-width: 2px;
        text-align: center;
    }
    .showcontent .show2 .tab-content,.nav-tabs li:hover a{
        color: #00a1d6;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    }
    .showcontent .show2 .tab-content,.nav-tabs{
        margin-bottom: 15px;
    }

    .showcontent .show2 .tab-content .tab-pane img{
        height: 250px;
        width: 100%;
    }
    .showcontent .show2 .tab-content .tab-pane .txt{
        position: absolute;
        right: 15%;
        left: 15%;
        bottom: 10%;
        color: #fff;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
        font-size: 18px;
        z-index: 1003;
    }


    /*分数要求*/
    .showcontent_score{
        background: url("../../../public/image/score/分数背景.png") no-repeat center center;
        padding:50px 0 60px 0;
    }
    .showcontent_score_header img{
        width: 128px;
        height: 128px;
    }
    .showcontent_score_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .showcontent_score_content{
        margin-top: 30px;
    }
    .showcontent_score_content img{
        width: 100%;
    }

    /*就业岗位*/
    .showcontent_job{
        background-color: #d6d6d6;
        padding-bottom: 10%;
    }
    .showcontent_job_header h1{
        font-size: 52px;
        font-weight: bold;
        text-align: left;
        border-left: 4px solid #ffA500;
        padding: 10px;
        margin-bottom: 100px;
        margin-left: 0;
        margin-top: 30px;
    }
    .showcontent_job_content img{
        width: 100%;
    }

    /*顶级大学*/
    .showcontent_college{
        margin: 80px 0;
    }
    .showcontent_college_header h1{
        font-size: 52px;
        font-weight: bold;
        text-align: left;
        border-left: 4px solid #ffA500;
        padding: 10px;
        margin-bottom: 100px;
        margin-left: 0;
    }
    .showcontent_college_content div img{
        width: 248px;
        height: 248px;
    }
    /*师资介绍*/
    .showcontent_teacher{
        background-color: #d6d6d6;
        margin: 50px 0;
        padding: 50px 0 150px 0;
    }
    .showcontent_teacher_header h1{
        font-size: 52px;
        font-weight: bold;
        text-align: left;
        border-left: 4px solid #ffA500;
        padding: 10px;
        margin-bottom: 100px;
        margin-left: 0;
    }
    .showcontent_teacher_banner .media .media-left img{
        width: 140px;
        height: 215px;
        border: 1px solid #000;
    }
    .showcontent_teacher .left,.right{
        background-image: none;
    }
    .showcontent_teacher .left .pre{
        display: inline-block;
        background: url("../../../public/image/teacher/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        position: relative;
        top: 45%;
        right: 30%;
    }
    .showcontent_teacher .right .next{
        display: inline-block;
        background: url("../../../public/image/teacher/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        transform: rotateY(180deg);
        position: relative;
        top: 45%;
        left: 30%;
    }
    .showcontent_teacher_banner .media{
        box-shadow: -8px 5px 3px 2px rgba(0,0,0,.3);
        padding: 30px;
        overflow:auto;
        margin-bottom: 20px;
        background-color: #fff;
    }
    .showcontent_teacher_banner .media .media-body h3,h4{
        font-weight: bold;
    }
    .showcontent_teacher_banner .media .media-body h4,p,h3:nth-of-type(2),ul{
        text-align: left;
    }
    .showcontent_teacher_banner .media .media-body h3 span img{
        height: 34px;
    }
    .showcontent_teacher_banner .media .media-body h3:nth-of-type(2){
        margin-bottom: 0;
        margin-top: 10px;
    }
    .showcontent_teacher_banner .media .media-body p{
        text-indent: 30px;
        font-size: 16px;
        height: 72px;
        line-height: 15px;
        overflow: hidden;
        margin-bottom: 0;
    }
    .showcontent_teacher_banner .media .media-body ul li{
        border: 2px solid #ffA500;
        border-radius: 5px;
        display: inline-block;
        color: #ffA500;
        margin-right: 20px;
        padding: 5px 10px;
        cursor: pointer;
    }
    /*班型介绍*/
    .showcontent2{
        margin: 150px 0;
    }
    .showcontent2_course_header h1{
        font-size: 52px;
        font-weight: bold;
        text-align: left;
        border-left: 4px solid #ffA500;
        padding:10px;
        margin-bottom: 50px;
        margin-left: 0;
    }

    @media (max-width:768px) {
        .choreographer{
            margin-top: 60px;
        }
        .showcontent .show2 .tab-content .tab-pane img{
            height: 200px;
        }
        .slide{
            margin-right: 0px;
        }
        .slide ul{
            height: 140px;
        }
        .slide .media img{
            width: 100px;
            height: 100px;
        }
        .common_showcontent{
            padding: 0px;
        }
        /*老师轮播图*/
        .showcontent_teacher .right .next{
            left: -35%;
        }
        .showcontent_teacher .left .pre{
            right: 22%;
        }
        /*标题*/
        .showcontent .show1 h1,.showcontent .show2 .show2_header h1{
            font-size: 40px;
        }
        .showcontent_score_header span{
            font-size: 50px;
        }

    }
</style>
