<template>
    <div class="index">
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div>
                <!--就业前景-->
                <div class="index_prospect">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="col-md-12">
                                <div class="index_prospect_header">
                                    <img src="../../../public/image/prospect/图标-就业.png" alt="label">
                                    <span>就业前景</span>
                                </div>
                                <div class="index_prospect_content">
                                    <img src="../../../public/image/prospect/就业前景图.png" alt="prospect">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--师资力量-->
                <div class="index_teacher">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="col-md-12">
                                <div class="index_teacher_header">
                                    <img src="../../../public/image/teacher/图标-师资.png" alt="label">
                                    <span>师资力量</span>
                                    <h2>传媒艺考资深教师教授</h2>
                                </div>
                                <div class="index_teacher_content">
                                    <!--老师轮播图-->
                                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                        <!--指示灯-->
                                        <ol class="carousel-indicators">
                                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                        </ol>
                                        <!-- 图片内容 -->
                                        <div class="carousel-inner index_teacher_banner" role="listbox" style="border-radius: 4px">
                                            <div class="item" >
                                                <ul>
                                                    <li v-for="item in teacher.slice(0,3)" @click="ToTeacher(item.id)">
                                                        <div class="carousel-img">
                                                            <img v-bind:src="item.picture" alt="teacher">
                                                        </div>
                                                        <div class="carousel-dec">
                                                            <h3>{{item.name}}</h3>
                                                            <h4>学校：{{item.school}}</h4>
                                                            <h4>专业：{{item.lable}}</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item">
                                                <ul>
                                                    <li  v-for="item in teacher.slice(3,6)" @click="ToTeacher(item.id)">
                                                        <div class="carousel-img">
                                                            <img v-bind:src="item.picture" alt="teacher">
                                                        </div>
                                                        <div class="carousel-dec">
                                                            <h3>{{item.name}}</h3>
                                                            <h4>学校：{{item.school}}</h4>
                                                            <h4>专业：{{item.lable}}</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item">
                                                <ul>
                                                    <li  v-for="item in teacher.slice(6,9)" @click="ToTeacher(item.id)">
                                                        <div class="carousel-img">
                                                            <img v-bind:src="item.picture" alt="teacher">
                                                        </div>
                                                        <div class="carousel-dec">
                                                            <h3>{{item.name}}</h3>
                                                            <h4>学校：{{item.school}}</h4>
                                                            <h4>专业：{{item.lable}}</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="index_teacher_link">
                                        <h2>部分高考教官因学校规定禁止对外宣传，入学后可享受考官神秘福利</h2>
                                        <router-link tag="span" to="/showteacher">更多 >>></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--学生成绩-->
                <div class="index_grade">
                    <div class="container">
                        <div class="row clearfix">
                        <div class="col-md-12">
                            <div class="index_grade_header">
                                <img src="../../../public/image/grade/图标-学员.png" alt="label">
                                <span>学生成绩</span>
                            </div>
                            <div class="index_grade_content">
                                <!--学生成绩轮播图-->
                                <!--<div id="carousel-example-generic2" class="carousel slide" data-ride="carousel">-->
                                <!--&lt;!&ndash; 图片内容 &ndash;&gt;-->
                                <!--<div class="carousel-inner index_grade_banner" role="listbox" style="border-radius: 4px">-->
                                <!--<div class="item active">-->
                                <!--<div class="index_grade_student row clearfix">-->
                                <!--<div class="col-sm-6 col-md-3" v-for="item in grade.slice(0,4)" :key="item.id">-->
                                <!--<div class="thumbnail">-->
                                <!--&lt;!&ndash;图片&ndash;&gt;-->
                                <!--<img src="../../../public/image/grade/student.jpg" alt="grade">-->
                                <!--&lt;!&ndash;描述&ndash;&gt;-->
                                <!--<div class="caption">-->
                                <!--<h3>{{item.name}}</h3>-->
                                <!--<p>通过院校：</p>-->
                                <!--<ul>-->
                                <!--<li>{{item.school}}</li>-->
                                <!--</ul>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--<div class="item">-->
                                <!--<div class="index_grade_student row clearfix">-->
                                <!--<div class="col-sm-6 col-md-3" v-for="item2 in grade.slice(4,8)" :key="item2.id">-->
                                <!--<div class="thumbnail">-->
                                <!--&lt;!&ndash;图片&ndash;&gt;-->
                                <!--<img v-bind:src="item2.picture" alt="grade">-->
                                <!--&lt;!&ndash;描述&ndash;&gt;-->
                                <!--<div class="caption">-->
                                <!--<h3>{{item2.name}}</h3>-->
                                <!--<p>通过院校：</p>-->
                                <!--<ul>-->
                                <!--<li>{{item2.school}}</li>-->
                                <!--</ul>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->

                                <!--&lt;!&ndash; 切换图片 &ndash;&gt;-->
                                <!--&lt;!&ndash;左&ndash;&gt;-->
                                <!--<a class="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev" style="border-radius: 4px">-->
                                <!--<span class="pre" aria-hidden="true"></span>-->
                                <!--<span class="sr-only">Previous</span>-->
                                <!--</a>-->
                                <!--&lt;!&ndash;右&ndash;&gt;-->
                                <!--<a class="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next" style="border-radius: 4px">-->
                                <!--<span class="next" aria-hidden="true"></span>-->
                                <!--<span class="sr-only">Next</span>-->
                                <!--</a>-->
                                <!--</div>-->
                                <div class="index_grade_banner row clearfix">
                                    <ul class="index_grade_list">
                                        <li v-for="item in grade.slice(0,8)" :key="item.id" class="item">
                                            <div class="index_grade_img">
                                                <img v-bind:src="item.picture" alt="学生成绩">
                                            </div>
                                            <div class="index_grade_text">
                                                <h3>{{item.name}}</h3>
                                                <p>通过院校：</p>
                                                <ul>
                                                    <li>{{item.school}}</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="index_grade_nav">
                                        <!-- 切换图片 -->
                                        <!--左-->
                                        <a class="left carousel-control" role="button" data-slide="prev" style="border-radius: 4px">
                                            <span class="pre" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <!--右-->
                                        <a class="right carousel-control" role="button" data-slide="next" style="border-radius: 4px">
                                            <span class="next" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="index_grade_link">
                                    <router-link tag="span" to="/achievement">更多 >>></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <!--文章动态-->
                <div class="index_article">
                    <div class="container">
                        <div class="row clearfix ">
                            <div class="col-md-12">
                                <div class="index_article_header">
                                    <img src="../../../public/image/article/图标-文章.png" alt="label">
                                    <span>文章动态</span>
                                </div>
                                <div class="index_article_content row clearfix">
                                    <div class="col-md-5 index_article_content_article">
                                        <div class="index_article_content-subheader">
                                            <h1>艺考干货</h1>
                                            <p>Media Info<router-link tag="span" to="/guide">更多>>></router-link></p>
                                        </div>
                                        <div class="index_article_content_subcontent">
                                            <ul class="row clearfix">
                                                <li class="media" v-for="item in article" @click="ToArticle(item.id)">
                                                    <div class="media-left">
                                                        <!--图片-->
                                                        <a href="#">
                                                            <img class="media-object" src="../../../public/image/article/article.jpg" alt="图片">
                                                        </a>
                                                    </div>
                                                    <!--内容-->
                                                    <div class="media-body">
                                                        <!--标题-->
                                                        <h3 class="media-heading">{{item.title}}</h3>
                                                        <!--内容-->
                                                        <p>{{item.content}}</p>
                                                        <!--简介-->
                                                        <div class="dec">
                                                            <!--发布时间-->
                                                            <span>
                                                        <img src="../../../public/image/article/图标-时钟.png" alt="time">{{item.create_time}}
                                                    </span>
                                                            <!--浏览量-->
                                                            <span>
                                                        <img src="../../../public/image/article/图标-眼睛.png" alt="hit">{{item.view_num}}
                                                    </span>
                                                            <!--标签-->
                                                            <span>
                                                        <ul v-for="item2 in item.lable" style="display: inline-block">
                                                            <li style="margin: 0 5px;border-radius: 4px;background-color: white;padding: 2px;box-shadow: 0 0 2px 2px rgba(0,0,0,.1)">
                                                                {{item2}}
                                                            </li>
                                                        </ul>
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-offset-2 col-md-5 index_article_content_news">
                                        <div class="index_article_content-subheader">
                                            <h1>戏传新闻</h1>
                                            <p>Our News<router-link tag="span" to="/news">更多>>></router-link></p>
                                        </div>
                                        <div class="index_article_content_subcontent">
                                            <ul class="row clearfix">
                                                <li class="media" v-for="item in news">
                                                    <div class="media-left">
                                                        <!--图片-->
                                                        <a href="#">
                                                            <img class="media-object" src="../../../public/image/article/article.jpg" alt="图片">
                                                        </a>
                                                    </div>
                                                    <!--内容-->
                                                    <div class="media-body">
                                                        <!--标题-->
                                                        <h3 class="media-heading">{{item.title}}</h3>
                                                        <!--内容-->
                                                        <p>{{item.content}}</p>
                                                        <!--简介-->
                                                        <div class="dec">
                                                    <span>
                                                        <img src="../../../public/image/article/图标-时钟.png" alt="time">{{item.create_time}}
                                                    </span>
                                                            <span>
                                                        <img src="../../../public/image/article/图标-眼睛.png" alt="hit">999+
                                                    </span>
                                                            <span>
                                                        <ul v-for="item2 in item.news_lable" style="display: inline-block">
                                                            <li style="margin: 0 5px;border-radius: 4px;background-color: white;padding: 2px;box-shadow: 0 0 2px 2px rgba(0,0,0,.1)">{{item2}}</li>
                                                        </ul>
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--答疑解惑-->
                <div class="index_question">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="col-md-12">
                                <div class="index_question_header">
                                    <img src="../../../public/image/question/图标-疑问.png" alt="label">
                                    <span>答疑解惑</span>
                                </div>
                                <div class="index_question_content row container">
                                    <div class="col-md-6">
                                        <div class="index_question_newmessage">
                                            <h1>最新留言</h1>
                                            <div class="index_question_que">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <!--头像-->
                                                        <a href="#">
                                                            <img class="media-object" src="../../../public/image/question/图标-问答Q.png" alt="question">
                                                        </a>
                                                    </div>
                                                    <!--内容-->
                                                    <div class="media-body">
                                                        <h3 class="media-heading">{{question.ip}}</h3>
                                                        <time>{{question.create_time}}</time>
                                                        <div class="studentcontent">
                                                            <p>{{question.question}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="index_question_an">
                                                <div class="media">
                                                    <!--内容-->
                                                    <div class="media-body">
                                                        <h3 class="media-heading">{{question.answer_name}}</h3>
                                                        <time>{{question.answer_time}}</time>
                                                        <div class="teachercontent">
                                                            <p>{{question.answer}}</p>
                                                        </div>
                                                    </div>
                                                    <div class="media-left">
                                                        <!--头像-->
                                                        <a href="#">
                                                            <img class="media-object" src="../../../public/image/question/图标-问答A.png" alt="anwser">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="index_question_inputquestion">
                                            <h1>我要提问</h1>
                                            <textarea name="question" id="question" cols="70" rows="6"></textarea>
                                            <div>
                                                <input type="number" placeholder="请输入您的手机号" class="form-control">
                                                <input type="submit" value="确定" class="btn btn-primary">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="index_question_commonquestion">
                                            <h1>常见问题</h1>
                                            <ul class="index_question_commonquestion_content">
                                                <li><h1>1.请问表演专业的学习需要多长时间呢？</h1></li>
                                                <li><h1>2.编导专业要学什么呢？</h1></li>
                                                <li><h1>3.学播音需要什么条件？</h1></li>
                                                <li><h1>4.我能考上北京电影学院吗？</h1></li>
                                                <li><h1>5.请问上课时间具体是什么时候呢？</h1></li>
                                                <li><h1>6.请问播音专业的课程费用是多少钱呢？</h1></li>
                                                <li><h1>7.班级人数？</h1></li>
                                                <li><h1>8.直播课和录播课的区别？</h1></li>
                                                <li><h1>9.编导专业课程最后需要去北京集训吗？</h1></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--友情链接-->
                <div class="index_otherlink">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="col-md-12">
                                <div class="index_otherlink_header">
                                    <span>友情链接</span>
                                </div>
                                <div class="index_otherlink_content">
                                    <ul>
                                        <li>这是链接</li>
                                        <li>这是链接</li>
                                        <li>这是链接</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!--悬浮表单-->
        <!--表单展开-->
        <div class="form container">
            <div class="col-md-12">
                <!--头部-->
                <div class="header">
                    <span id="minimize" class="title-button" data-title="Minimize window"><span class="glyphicon glyphicon-remove-sign"></span></span>
                </div>
                <div class="row clearfix form-content">
                    <!--logo-->
                    <div class="col-md-2 form_logo">
                        <img src="../../assets/logo-竖版-白字.png" alt="logo">
                    </div>
                    <!--表单-->
                    <div class="col-md-10">
                        <p class="form_dec">预约报名即可享受名师专业测评，更有多重好礼送不停</p>
                        <form class="form-horizontal container" id="form" >

                            <div class="row clearfix">
                                <div class="col-md-3 form_item">
                                    <!--专业-->
                                    <div class="form-group select">
                                        <!--<label for="selectMajor" class="col-sm-2 control-label">专业</label>-->
                                        <div class="col-sm-10 control-input">
                                            <select name="major" id="selectMajor" v-model="formData.major">
                                                <option value="" selected="disabled" style="display: none">意向专业</option>
                                                <option value="表演">表演</option>
                                                <option value="编导">编导</option>
                                                <option value="播音">播音</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--姓名-->
                                    <div class="form-group">
                                        <!--<label for="inputName3" class="col-sm-2 control-label">姓名</label>-->
                                        <div class="col-sm-10 control-input">
                                            <input type="text" class="form-control inputname" v-model="formData.user_name" name="name" id="inputName3" placeholder="学生姓名">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--qq-->
                                    <div class="form-group">
                                        <!--<label for="inputqq3" class="col-sm-2 control-label">QQ</label>-->
                                        <div class="col-sm-10 control-input">
                                            <input type="email" class="form-control inputqq" name="qq" id="inputqq3" v-model="formData.qq">
                                            <select name="connect" id="selectconnectmode" v-model="formData.connectmode">
                                                <option value="qq">QQ</option>
                                                <option value="weixin">微信</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--手机号-->
                                    <div class="form-group">
                                        <!--<label for="inputPhone3" class="col-sm-2 control-label">手机号</label>-->
                                        <div class="col-sm-10 control-input" >
                                            <input type="number" class="form-control inputphone" v-model="formData.tel" name="phone" id="inputPhone3" placeholder="手机号">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--来源-->
                                    <div class="form-group select">
                                        <!--<label for="selectFrom" class="col-sm-2 control-label">来源</label>-->
                                        <div class="col-sm-10 control-input">
                                            <!--下拉框-->
                                            <select name="from" id="selectFrom" v-model="formData.whereKnew">
                                                <option value="" selected="disabled" style="display: none">从哪里得知戏传</option>
                                                <option value="未知2">未知</option>
                                                <option value="未知3">未知</option>
                                                <option value="other">其他</option>
                                            </select>
                                            <!--输入框-->
                                            <input type="text" v-model="formData.whereKnew2" v-if="isOther" class="form-control" name="fromtxt" id="selectFromTxt" placeholder="请输入其他来源">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-10 control-input" >
                                            <input type="text" class="form-control inputcity"  name="city" v-model="formData.city" placeholder="所在城市">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--提交按钮-->
                                    <div class="form-group submit">
                                        <div class="col-sm-offset-2 col-sm-10 control-input">
                                            <input type="submit" class="btn btn-lg btn-success">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--表单收起-->
        <div class="form_min">
            <img src="../../../public/image/form/下边框浮窗-收起状态.png" alt="form">
        </div>
    </div>
</template>

<script>
    // 引入组件
    // 首页轮播图
    import Banner from "../../components/banner"
    // 引入util的函数
    import util from  "../../util"
    // 引入axios
    import axiosReq from "../../util/axiosConfig"

    export default {
        name: "index",
        // 数据
        data(){
          return{
                // 来源
                from:null,
                // 专业
                major:null,
                // banner的类型
                type:"index",
                // banner位置
                loc:"title",
                // 新闻栏
                news:[],
                // 文章栏
                article:[],
                // 学生成绩栏数据
                grade:[],
                // 老师介绍栏
                teacher:[],
                // 问答
                question:[],
                // 表单数据
                formData:{
                    user_name:null,
                    email:"test@qq.com",
                    sex:"男",
                    tel:null,
                    connectmode:"qq",
                    qq:null,
                    major:"",
                    city:null,
                    whereKnew:"",
                    whereKnew2:"",
                },
                // 控制jquery的定时器
                timer:null,
                timer2:null,

                //表单来源是否是其他
                isOther:false

          }
        },
        // 方法
        methods:{
            // 跳转到老师详情页
            ToTeacher(id){
                this.$router.push({
                    path:`/teacher/${id}`
                });
            },
            // 跳转到文章详情页
            ToArticle(id){
                this.$router.push({
                    path:`/article/${id}`
                });
                axiosReq.get(`upArticleView/id/${id}`).then(data=>{
                    if(data.status == 404){
                        this.$router.push({
                            path:"/error"
                        });
                    }
                });
            }
        },
        // 组件
        components:{
            Banner
        },
        // 组件创建
        created(){
            let that = this;
                 // 请求新闻数据
                axiosReq.get("getNews/num/3/day/40 ").then(data=>{
                    this.news = data.data;
                  // 拆分文章标签
                  this.news.forEach((value)=>{
                      value.create_time = value.create_time.match(/\d{4}-\d*-\d{2}/)[0];
                      value.news_lable = value.news_lable.split(",");
                  });
              });
                // 请求文章数据
                axiosReq.get("getArticle/num/3/day/40").then(data=>{
                    this.article = data.data;
                    // 拆分文章标签
                    this.article.forEach((value)=>{
                       value.create_time = value.create_time.match(/\d{4}-\d*-\d{2}/)[0];
                       value.lable = value.lable.split(",");
                    });
                });
                // 获取老师数据
                axiosReq.get("getSomeTeachers/num/9").then(data=>{
                    this.teacher = data.data;
                    this.teacher.forEach(value => {
                        if(value.school.includes("、")){
                            let temp = value.school.split("、");
                            value.school = temp[0];
                        }
                    });
                    this.$nextTick(()=> {
                        $(function () {
                            // 师资力量的轮播图
                            $(".index_teacher_banner .item").first().addClass("active");
                        })
                    })
                });
                // 获取学生成绩数据
                axiosReq.get("getStudentGrade").then(data=>{
                    this.grade = data.data.splice(0,8);
                    util.index_grade(that);
                });
                // 获取最新留言
                axiosReq.get("getQuestion").then(data=>{
                    this.question = data.data[0];
                    this.question.create_time = this.question.create_time.match(/\d{4}-\d*-\d{2}/)[0];
                    this.question.answer_time = this.question.answer_time.match(/\d{4}-\d*-\d{2}/)[0];
                });
        },
        // 组件挂载
        mounted() {
            let that = this;
            util.indexInit(that);
            // 初始化jQuery动画和特效
            // 表单验证
            this.$nextTick(function () {
                $("#form").validator({
                    // 验证的表单项，required:必填，integer：数字
                    fields:{
                        name:{
                            rule:"required",
                            ok:"名称可用",
                            tip:"请输入名称",
                            msg:"名称不能为空"
                        },
                        phone:{
                            rule:"required;integer(+0);mobile",
                            ok:"电话可用",
                            tip:"请输入电话号码",
                            msg:"电话号码不正确"
                        },
                        from:{
                            rule:"required",
                            msg:"请至少选择一个或输入来源"
                        },
                        // fromtxt:"required",
                        major:{
                            rule:"required",
                            ok:"已选择",
                            msg:"请选择至少一个专业",
                        }
                    },
                    // 提交
                    valid: function() {
                        if(that.isOther == true){
                            that.formData.whereKnew = that.formData.whereKnew2;
                        }
                        axiosReq.post("appointment",that.formData).then(data=>{
                            if(data.status == 200){
                                window.alert("预约成功！");
                                that.$store.commit("setformflag",false);
                                $(".form").css("display","none");
                                $(".form_min").show();
                            }
                        });

                    }
                });
            });

            // textarea框的大小控制
            $(function () {
                if($(window).outerWidth()<= 768){
                    $(".index_question_inputquestion textarea").attr("cols","32")
                }
            });
        },
        updated(){
            // 如果选择来源为其他，则弹出输入框
            if(this.formData.whereKnew == "other"){
                this.isOther = true;
            }else {
                this.isOther = false;
            }
        },
        // 组件销毁
        destroyed() {
                // 清除定时器，防止再次渲染时多个定时器作用在同一个元素上
                window.clearInterval(this.timer);
        }
    }

</script>

<style scoped>
    .index{
        margin-top: 125px;
        background-color: #f8f8f8;
    }

    /*就业前景*/
    .index .index_prospect{
        padding:30px 0 60px 0;
    }
    .index .index_prospect_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_prospect_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_prospect_content{
        margin-top: 30px;
    }

    /*师资力量*/
    .index .index_teacher{
        padding:30px 0 60px 0;
        background-color: #fff;
        /*background: url("../../../public/image/background/9.jpg") no-repeat 0 0;*/

    }
    .index .index_teacher_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_teacher_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index .index_teacher_header h2{
        margin-top: 50px;
        font-weight: bold;
        color: #FFA500;
    }
    .index_teacher_content{
        overflow: hidden;
        margin-top: -90px;
    }
    .index_teacher_content .carousel-indicators{
        bottom:-60px;
    }
    .index_teacher_content .carousel-indicators li{
        background-color: #333333;
        width: 15px;
        height: 15px;
        margin: 15px;
    }
    .index_teacher_content .carousel-indicators .active{
        background-color: #FFA500;
        width: 13px;
        height: 13px;
        margin-bottom: 16px;
    }

    /*老师图片*/

    .index_teacher_banner{
        height: 300px;
        overflow: visible;
        position: relative;
        top: 100px;
        margin: 100px auto;
    }
    .index_teacher_banner .item{
        cursor: pointer;
    }
    .index_teacher_banner .item ul{
        width: 100%;
        height: auto;
        position: relative;
        left: 1%;
    }
    .index_teacher_banner .item ul li{
        display: inline-block;
        width: 30%;
        position: relative;
        margin-right: 2%;
    }
    .index_teacher_banner .item ul li .carousel-img{
        position: absolute;
        top:-24%;
    }
    .index_teacher_banner .item ul li .carousel-img img{
        width: 148px;
        height: 148px;
        position: relative;
        left: 24%;
        border-radius: 15px;
    }
    .index_teacher_banner .item ul li:hover .carousel-dec{
        background-color: #333333;
        color: #fff;
        border-bottom: 3px solid #FFA500;
    }
    .index_teacher_banner .item ul li .carousel-dec{
        background-color: #e9e9e9;
        padding: 1% 2% 8% 50%;
    }
    .index_teacher_banner .item .carousel-dec>h3,.carousel-dec>p{

        text-align: left;
    }
    .index_teacher_banner .item .carousel-dec h3{
        font-weight: bold;
        font-size: 22px;
        margin-top: 20px;
        margin-bottom: 15px;
    }
    .index_teacher_banner .item .carousel-dec h4{
        font-size: 18px;
        text-align: left;
    }

    .index_teacher_banner .item p{
        font-size: 24px;
        /*left: 25%;*/
        height: 375px;
        display: block;
        overflow: hidden;
    }
    .index_teacher_content .left,.right{
        background-image: none;
    }
    .index_teacher_content .left .pre{
        display: inline-block;
        background: url("../../../public/image/teacher/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        position: relative;
        top: 45%;
        right: 40%;
    }
    .index_teacher_content .right .next{
        display: inline-block;
        background: url("../../../public/image/teacher/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        transform: rotateY(180deg);
        position: relative;
        top: 45%;
        left: 40%;
    }

    .index_teacher_link{
        margin-top: 40px;
    }
    .index_teacher_link h2{
        font-size: 22px;
        color: #000;
        font-weight: bold;
    }
    .index_teacher_link span{
        display: inline-block;
        width: 180px;
        height: 60px;
        line-height: 60px;
        margin-top: 20px;
        cursor: pointer;
        font-size: 30px;
        color: #FFA500;
        font-weight: bolder;
        border-radius: 10px;
        border:3px solid #FFA500;
    }
    .index_teacher_link span:hover{
        color: #00a1b6;
    }

    /*学生成绩*/
    .index .index_grade{
        padding:30px 0 60px 0;
        background: url("../../../public/image/background/teacherbg.jpg") repeat 0 0;
    }
    .index .index_grade_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_grade_header span{
        font-size: 75px;
        position: relative;
        top:20px;
        color: #FFA500;
    }
    .index_grade_content{
        text-align: center;
        margin: 80px auto;
    }
    /*轮播图*/
    .index_grade_banner{
        margin: -32px auto;
        display: inline-block;
        width: 100%;
    }
    .index_grade_banner .index_grade_list{
        overflow: hidden;
        width: 81%;
        height: 450px;
        margin: 0 auto;
        position: relative;
    }
    .index_grade_banner .index_grade_list>li{
        float: none;
        display: inline-block;
        position: absolute;
        width: 250px;
        border: 10px solid #2e324b;
        margin: 0 15px;
        padding: 20px 0;
    }
    .index_grade_banner .index_grade_list>li:hover{
        border-color: #6c6e90;
    }
    .index_grade_banner .index_grade_img{
        height: 190px;
    }
    .index_grade_banner .index_grade_img img{
        width: 80%;
        height: 95%;
        border-radius: 50%;
        border:10px solid #343851;
    }
    .index_grade_banner .index_grade_text{
        text-align: left;
        color: #6c6e90;
        font-weight: bolder;
    }
    .index_grade_banner .index_grade_text h3{
        margin-top: 10px;
        text-align: center;
        font-weight: bolder;
        font-size: 28px;
    }
    .index_grade_banner .index_grade_text p{
        margin-bottom: 0;
        margin-left: 20px;
        font-size: 20px;
    }
    .index_grade_banner .index_grade_text ul li{
        text-align: center;
        font-size: 18px;
    }

    .index_grade_banner .left,.right{
        background-image: none;
    }
    .index_grade_banner .left .pre{
        display: inline-block;
        background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        position: relative;
        top: 40%;
        left: -24%;
    }
    .index_grade_banner .right .next{
        display: inline-block;
        background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        transform: rotateY(180deg);
        position: relative;
        top: 40%;
        right: -24%;
    }
    .index_grade_link{
        margin-top: 60px;
    }
    .index_grade_link span{
        display: inline-block;
        width: 180px;
        height: 60px;
        line-height: 60px;
        margin-top: 20px;
        cursor: pointer;
        font-size: 30px;
        color: #FFA500;
        font-weight: bolder;
        border-radius: 10px;
        border:3px solid #FFA500;
    }
    .index_grade_link span:hover{
        color: #00a1b6;
    }

    /*文章动态*/
    .index .index_article{
        padding:30px 0 60px 0;
    }
    .index .index_article_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_article_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_article_content{
        text-align: center;
        margin: 80px auto;
        background-color: #fff;
    }
    .index_article_content_article{
        border: 1px solid #ccc;
        padding: 0;
    }
    .index_article_content_news{
        border: 1px solid #ccc;
        padding: 0;
    }
    .index_article_banner .index_article_student img{
        margin-top: 20px;
        width: 180px;
        height: 180px;
    }
    .index_article_content-subheader {
        width: 100%;
        position: relative;
        text-align: left;
        background-color: #FFA500;
        padding-left: 15px;
    }
    .index_article_content-subheader h1,p{
        display: inline-block;
        font-weight: bold;
        color: #fff;
    }
    .index_article_content-subheader h1{
        font-size: 50px;
        margin-right: 25px;
    }
    .index_article_content-subheader p{
        font-size: 24px;
    }
    .index_article_content-subheader p span{
        color:#fff;
        position: absolute;
        right: 15px;
        cursor: pointer;
    }
    .index_article_content-subheader p span:hover{
        color: #00a1b6;
    }
    .index_article_content_subcontent ul{
        margin: 0;
    }
    .index_article_content_subcontent ul .media{
        padding: 30px 10px;
        overflow: hidden;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
        margin-top: 0;
    }
    .index_article_content_subcontent ul .media:nth-of-type(3){
        border-bottom: none;
    }
    .index_article_content_subcontent ul .media:hover{
        background-color: #f8f8f8;
    }
    .index_article_content_subcontent ul .media:hover .media-heading{
        color: #00a1d6;
    }
    .index_article_content_subcontent ul .media .media-body{
        position: relative;
        text-align: left;
        width: 100%;
    }
    .index_article_content_subcontent ul .media .media-body p{
        font-size: 16px;
        color: #99a2aa;
        line-height: 22px;
        overflow: hidden;
        text-align: left;
        margin-left: 10px;
        display: inline-block;
        width: 90%;
        height: 65px;
    }

    .index_article_content_subcontent ul .media .media-left img{
        width: 150px;
        height: 137px;
        margin: 2px;
        border-radius: 4px;
    }

    .index_article_content_subcontent .article_content>h3{
        margin-bottom: 30px;
    }
    .index_article_content_subcontent ul .media h3{
        color: #000;
        text-align: left;
        font-weight: bolder;
        margin-left: 10px;
        transition: .3s;
        vertical-align: top;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
    }
    .index_article_content_subcontent ul .media .dec{
        text-align: left;
        position: relative;
        left: 0;
        bottom: 0;
        font-size: 18px;
    }
    .index_article_content_subcontent ul .media .dec span{
        margin: 0 10px;
        color: #99a2aa;
        display: inline-block;
    }
    .index_article_content_subcontent ul .media .dec span:nth-child(1) img{
        width: 22px;
        height: 22px;
        margin-bottom: 3px;
        margin-right: 5px;
    }

    .index_article_content_subcontent ul .media .dec span:nth-child(2) img{
        width: 32px;
        height: 32px;
        margin-bottom: 3px;
        margin-right: 3px;
        margin-left: 5px;
    }
    .index_article_content_subcontent ul .media .dec span:nth-of-type(3){
        position: absolute;
        right: 0;
        top:3px;
    }
    /*答疑解惑*/
    .index .index_question{
        padding:30px 0 60px 0;
        background-color: #d5d5d5;
    }
    .index .index_question_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_question_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_question_content{
        text-align: center;
        margin: 80px auto;
    }
    textarea{
        border: 1px solid #000;
        border-radius: 2px;
    }
    .index_question_content>div:nth-of-type(1){
        margin-left: 3.33333%;
    }
    .index_question_content h1{
        color:#000;
        font-weight: bolder;
    }
    .index_question_content .index_question_newmessage,.index_question_content .index_question_inputquestion{
        background-color: #fff;
        padding:30px 20px 0 20px;
        margin-bottom: 30px;
    }
    .index_question_que .media-left img{
        width: 90px;
        height: 90px;
    }
    .index_question_que .media-body{
        position:relative;
        top:10px;
    }
    .index_question_que .media-body h3,.studentcontent{
        text-align: left;
    }
    .index_question_que .media-body .studentcontent p{
        font-size: 24px;
    }
    .index_question_que .media-body time{
        position:absolute;
        right: 20px;
        top: 0;
        font-size: 20px;
    }

    .index_question_an .media-left img{
        width: 90px;
        height: 90px;
        margin-bottom: 40px;
    }
    .index_question_an .media-body{
        position:relative;
        top:10px;
    }
    .index_question_an .media-body .teachercontent{
        text-align: left;
    }
    .index_question_an .media-body .teachercontent p{
        font-size: 22px;
        font-weight: normal;
        margin-bottom: 30px;
    }
    .index_question_an .media-body h3{
        text-align: right;
        font-weight: bolder;
        font-size: 26px;
    }
    .index_question_an .media-body time{
        position:absolute;
        left: 5px;
        top: 0;
        font-size: 20px;
    }

    .index_question_inputquestion{
        text-align: center;
    }
    .index_question_inputquestion div{
        text-align: left;
        padding-left: 14%;
    }
    .index_question_inputquestion input:nth-of-type(1){
        display: inline-block;
        width: 50%;
        margin-top: 15px;
        margin-bottom: 30px;
    }
    .index_question_inputquestion input:nth-of-type(2){
        display: inline-block;
        position: relative;
        left: 19%;
        width: 15%;
    }
    .index_question_commonquestion{
        background-color: #fff;
        padding: 30px 40px;
        text-align: left;
    }
    .index_question_commonquestion_content li{
        cursor: pointer;
        position: relative;
    }
    .index_question_commonquestion_content li:nth-of-type(1):hover:after{
        content: '回答：其实这个问题因人而异，毕竟每个人的资质不同，表演专业不同于编导专业的学习，它不是一个具有固定知识点的专业，而且每位考官对于专业审核都有自己的想法和理念，甚至其理念的外在考核形式有可能是截然不同的。所以很多艺考培训班才能够以此为名目，借此整年整年地上课，而事实上，这毫无意义。毕竟表演专业是一门艺术类的学科，它的考核没有“正确答案”，很多时候老师会告诉你考试内容，纠正你一些专业上的谬误，但是老师无法代替你去考试，表演艺术如果经过千百次地练习，很容易使得自己的内心麻木，无法触动自己，而如果自己的表演甚至无法打动自己又谈何打动他人呢？ 所以在戏传的课堂上，我们注重启发，注重想法，注重学生的主观能动性，我们设下三个月左右的课程学习时间，更多的学习是要开发学生的艺术思维，不让艺术学习变成一种练习题。我们努力保证学生学习表演的初心，希望每位学生来报名的时候抱着对表演专业的憧憬，去考试的时候怀揣对表演专业的热爱、感动与虔诚。 愿你每次开始表演，都满怀最初的心潮澎湃。';
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(2):hover:after{
        content: '回答：传媒艺考中的编导专业，狭义上是指“广播电视编导”这一门专业，广义上是指“影视编导”其中包含： 广播电视编导（文艺编导、电视编辑、媒体创意、电视编导、影视编导等方向）； 戏剧影视文学（创意策划、戏剧创作、动漫策划、电视导演、广告导演、影视策划与制片、电视剧创作等方向）； 戏剧影视导演（戏剧导演、戏剧教育、演出制作、影视导演、影视制片等方向）； 影视摄影与制作（电视节目制作、电视摄影与制作、电视摄影、照明艺术、航空摄影等方向）； 还有其他如：导演、摄影、数字媒体艺术、电影学等相关专业。 以上是编导专业学习之后可以进行考试的方向，而编导专业具体要学习的内容包括：影评，视听语言，故事，电视节目分析与策划，文学常识，面试，笔试等七门课程。 ';
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(3):hover:after{
        content: '回答：这个问题其实是每一位有意向学播音的艺考生，都想了解的问题。 首先我们明确一点，学习播音专业并没有任何硬性要求。 但是，以下条件如果能达到会使得你的考试更顺利，更容易得分。 1、男生身高在170-185之间，女生身高在160-175之间； 2、面部无明显伤疤或胎记，五官端正； 3、嗓音条件良好。 以上如果所有条件都满足，那么恭喜你！你非常适合学播音专业！ ';
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(4):hover:after{
        content: "回答：孩子，我不知道。而且我相信如果有人能给你肯定的答案，那他一定是在骗你。 毕竟我们甚至没见过面，没了解过你的一切。我有很多学生都会在学习专业之前、之时、之后来问我这个问题。 “我能考上XXXX大学吗？”我也无法回答这个问题。 我能回答你什么问题呢？ “戏传艺考的师资力量是最好的吗？” “是的，戏传艺考的师资力量涵盖名校考官到资深传媒艺考老师，是全中国最顶尖的师资力量。” 我们能保证把能考上名校的技能全都教给你，但是我们无法保证你能学到多少，更无法保证你最后在考场上能呈现出多少。 学习是一个很私人的事情，你付出了多少努力，就会有多少回报，但这些很多东西往往都是看不到的。我们可以通过测试、考核等手段最后大概估量一下你的水平，但是没人能知道你最后能考到一个什么样的学校或者是什么学校。我们能保证的是，不低于二本。 谋事在人，成事在天。先付出足够的努力，再来谈未来，再来谈梦想。 ";
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(5):hover:after{
        content: "回答：我们戏传每年的开课时间都不太一样，不过每年都是在寒暑假有一次北京实地集训，而网络课堂是全年都有开设的，可咨询15626580565或添加微信xcykkefu即可了解更多内容喔！";
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(6):hover:after{
        content: "回答：我们的收费标准是根据学生的自身条件设定的，如果条件好完全有可能免费入学哦！而且长期班和短期班的费用也不一样，一次性缴纳全程班学费即可获赠价值2499的pico小怪兽G2 VR一体机一部！或享受等值学费抵扣优惠！";
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(7):hover:after{
        content: "回答：戏传艺考所有专业直播课一个班的容纳上限是八人，北京集训的时候表演、播音专业一个班的容纳上线是十人，编导专业一个班的容纳上限是三十人。";
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(8):hover:after{
        content: "回答：直播课需要准时准点上课，不能迟到，整个过程中学生有任何不明白的地方可以及时向老师提问，当场解决，课时费较高； 录播课可以随时随地看，有没看懂的问题，需要将问题写在文档里发给班主任，再由班主任转交给科任老师，老师看到后会录制答疑视频发到课程平台上，学生再上平台观看，课时费较低。 ";
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion_content li:nth-of-type(9):hover:after{
        content: "回答：如果最后考核分数高，达到自己的目标了，完全不需要去北京集训。北京集训完全是为了给有名校梦的考生，冲击名校的一个集训。如果考核是满分，名校的水平都到了，更不用来北京集训了。";
        background-color: #fff;
        width: 350px;
        position: absolute;
        left:0;
        top:50px;
        z-index: 1007;
        font-size: 16px;
        box-shadow: 2px 2px 3px 3px rgba(0,0,0,.3);
        text-indent: 32px;
    }
    .index_question_commonquestion>h1:nth-of-type(1){
        text-align: center;
    }
    .index_question_commonquestion ul li h1{
        font-size: 25px;
    }



    /*友情链接*/
    .index_otherlink{
        margin: 50px auto;
        margin-bottom: 80px;
    }
    .index_otherlink .index_otherlink_header{
        border-top: 3px solid #000;
        font-size: 20px;
    }
    .index_otherlink .index_otherlink_header span{
        position: relative;
        top: -15px;
        background: #fff;
        padding: 0 5px;
    }
    .index_otherlink .index_otherlink_content ul{
        text-align: left;
    }
    .index_otherlink .index_otherlink_content ul li{
        display: inline-block;
        font-size: 20px;
        margin-right: 50px;
        cursor: pointer;
    }

    /*悬浮表单*/
    .form{
        background-color: #6b6b6b;
        opacity: 0.9;
        width: 100%;
        position: fixed;
        right: 0;
        bottom:0;
        border: 1px solid #ccc;
        border-radius: 4px !important;
        box-shadow: 0 2px 15px rgba(0,0,0,.2)!important;
        z-index: 4003;
    }
    .form .form-group{
        margin-bottom: 20px;
    }
    .form .n-error{
        font-size: 20px;
    }
    .form-content .form_logo img{
        width: 250px;
        height: 200px;
        margin-top: 20px;
        padding-right: 15px;
    }
    .form .header{
        font-size: 24px;
        margin-right: 50px;
        position: relative;
        top:20px;
    }
    .form #minimize{
        float: right;
        cursor: pointer;
        color: #000;
        font-size: 30px;
    }
    .form #maxmize{
        margin-left: 10px;
        cursor: pointer;
    }
    .form .inputname,.inputqq,.inputphone,.inputcity{
        height: 40px;
        width: 230px;
        font-size: 20px;
    }
    .form .inputphone{
        width: 250px;
    }
    /*qq输入框*/
    .form .inputqq{
        width: 160px;
        position: relative;
        left: 90px;
        border: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form .select{
        text-align: left;
    }
    .form #selectconnectmode{
        height: 40px;
        line-height: 24px;
        border-radius: 4px;
        box-sizing: border-box;
        position: absolute;
        top:0px;
        left:15px;
        width: 100px;
        font-size: 20px;
        border: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        /*很关键：将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;

        /*在选择框的最右侧中间显示小箭头图片*/
        background: url("../../../public/image/form/下拉图标.png") no-repeat scroll 70px center transparent;
        background-size: 16px;
        background-color: #fff;
        padding-left: 15px;
        color: #000;
    }
    .form .select select{
        height: 40px;
        line-height: 24px;
        width: 230px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 15px;
        box-sizing: border-box;
        color: #aaa;
        position: relative;

        /*很关键：将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;

        /*在选择框的最右侧中间显示小箭头图片*/
        background: url("../../../public/image/form/下拉图标.png") no-repeat scroll 198px center transparent;
        background-size: 16px;
        font-size: 20px;
        background-color: #fff;
    }
    .form .select option{
        color: #000;
    }
    .form .select #selectFromTxt{
        margin-top: 15px;
        width: 84%;
    }
    .form .select #selectFrom{
        padding-left: 5px;
    }

    .form .form-group{
        display: inline-block;

    }
    .form .form_item{
        text-align: left;
    }
    .form .submit input{
        width: 110px;
        height:100px;
        background-color: #ccff99;
        color: #000;
        font-weight: bold;
        font-size: 25px;
    }
    .form .form-content{
        margin-bottom: 20px;
        padding-left: 5%;
    }

    .form .form-content div:nth-child(2) p{
        color: #fff;
        text-align: left;
        display: block;
        font-size: 30px;
        padding-left: 30px;
    }
    .form_min{
        position: fixed;
        bottom: 10px;
        right: 32px;
        z-index: 9999;
        display: none;
        cursor: pointer;
        width: 70px;
        height: 70px;
        background-color: #508fcb;
        border-radius: 50%;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3);
    }
    .form_min img{
        width: 60px;
        height: 60px;

    }

    @media (min-width: 768px) {
        .col-sm-10 {
            width: 110.333333%;
        }
    }
    @media (max-width:1600px) {
        .index_article_content .col-md-5{
            width: 45%;
        }
        .index_article_content .col-md-offset-2{
            margin-left: 10%;
        }
        /*师资力量*/
        .index_teacher_banner .item ul li .carousel-dec{
            background-color: #e9e9e9;
            padding: 1% 2% 8% 50%;
        }
        .index_teacher_banner .item>img{
            left:135px;
        }
        .index_teacher_banner .item p{
            font-size: 20px;
            display: block;
            overflow: hidden;
            height: 250px;
        }
        .index_teacher_banner .item h1{
            font-size: 56px;
            font-weight: bold;
            top:0;
            margin-top:0;
        }
        .index_teacher_banner .item h3{
            font-size: 28px;
            top:0;
            border-bottom: 2px solid #ffA500;
            padding-bottom: 10px;
        }
        .index_teacher_banner .item .carousel-caption{
            left: 46%;
        }

        /*学生成绩*/
        .index_grade_banner .index_grade_list{
            width: 70%;
        }
        .index_grade_banner .index_grade_list>li{
            width: 220px;
        }
        .index_grade_banner .index_grade_img img{
            width: 90%;
            height: 95%;
            border-radius: 50%;
            border:10px solid #343851;
        }
        .index_teacher_banner .item .carousel-dec h3{
            font-size: 20px;
        }
        .index_teacher_banner .item .carousel-dec h4{
            font-size: 16px;
        }
        .index_teacher_banner .item ul li .carousel-img img{
            width: 137px;
            height: 137px;
            left: 12%;
        }
        .index_grade_banner .index_grade_text p{
            font-size: 16px;
        }
        .index_grade_banner .index_grade_text ul li{
            font-size: 16px;
        }
        .index_grade_link{
            margin-top: 0;
        }

        /*文章动态*/
        .index_article_content-subheader h1{
            font-size: 40px;
        }
        .index_article_content_subcontent ul .media .media-body h3{
            width: 85%;
        }
        /*文章标签*/
        .index_article_content_subcontent ul .media .dec span{
            margin: 0 8px;
            font-size: 14px;
        }
        /*答疑解惑*/
        .index_question_inputquestion div{
            padding-left: 0;
        }
        .index_question_inputquestion input:nth-of-type(2){
            left: 35.8%;
        }
        /*悬浮表单*/
        .form_min{
            right: 60px;
        }
        .form .form-content{
            margin-bottom: 0;
        }
    }
    @media (max-width: 1200px){
        .form .form-content{
            padding: 0 0 0 60px;
        }
        .form .form-content img{
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 990px){
        .form .form-content div:nth-child(2) p{
            padding:10px;
            color: #fff;
            font-size: 16px;
            text-align: center;
        }
        .form .form-group{
            text-align: center;
            margin: 5px 70px;
        }
        .form .form_item{
            text-align: center;
        }
        .form .select>div{
            padding: 0;
        }
        .form .form_item:nth-child(1) .form-group:nth-child(2) div{
            padding-left: 20px;
        }
        .form .select:after{
            left: 260px;
        }
        .form .form_item:nth-child(3) .select:after{
            left: 438px;
        }
        .form .submit div{
            margin-left: 0;
        }
        .form .submit input{
            width: 200px;
            height: 50px;
        }
    }
    /*手机*/
    @media (max-width:768px ) {
        /*内容*/
        .index{
            margin-top: 60px;
        }
        /*所有版块的标题与图标*/
        .index .index_prospect_header>img,.index .index_teacher_header>img,.index .index_grade_header>img,.index .index_article_header>img,.index .index_question_header>img{
            width: 60px;
            height: 60px;
        }
        .index .index_prospect_header>span,.index .index_teacher_header>span,.index .index_grade_header>span,.index .index_article_header>span,.index .index_question_header>span{
            font-size: 40px;
            top: 15px;
            left: 15px;
        }
        /*就业前景*/
        .index_prospect_content img{
            width: 340px;
        }
        /*师资力量*/
        .index_teacher .index_teacher_banner .item img{
            width: 100%;
            height: 107%;
            left: 0;
        }
        .index_teacher .index_teacher_banner .item{
            height: 400px;
        }
        .index_teacher .index_teacher_banner .item .carousel-caption{
            width: 100%;
            left: 10%;
        }
        .index_teacher .index_teacher_banner .item .carousel-caption>h1{
            font-size: 20px;
            text-align: center;
            color: #fff;
        }
        .index_teacher .index_teacher_banner .item h3{
            font-size: 20px;
            text-align: center;
        }
        .index_teacher .index_teacher_banner .item p{
            font-size: 12px;
            height: 86px;
            color: #fff;
        }
        .index_teacher_content .left .pre{
            width: 30px;
            height: 30px;
            top: 60%;
            right: 10%;
        }
        .index_teacher_content .right .next{
            width: 30px;
            height: 30px;
            transform: rotateY(180deg);
            top: 60%;
            left: 10%;
        }

        /*学生成绩*/
        .index_grade_content .left .pre{
            width: 30px;
            height: 30px;
            top: 44%;
            right: 10%;
        }
        .index_grade_content .right .next{
            width: 30px;
            height: 30px;
            transform: rotateY(180deg);
            top: 44%;
            left: 10%;
        }
        .index_grade_banner .index_grade_list{
            width: 67%;
            height: 369px;
        }
        /*文章动态*/
        .index_article_content-subheader h1{
            font-size: 25px;
            margin-right: 5px;
        }
        .index_article_content-subheader p{
            font-size: 18px;
        }
        .index_article_content_subcontent ul .media .media-body{
            overflow: fragments;
        }
        .index_article_content_subcontent ul .media .media-body p{
            width: 85%;
            font-size: 12px;
            line-height: 12px;
            margin: 0;
            height: 48px;
        }
        .index_article_content_subcontent ul .media .media-left img{
            width: 120px;
            height: 110px;
        }
        .index_article_content_subcontent ul .media h3{
            font-size: 18px;
            margin-left: 0;
        }
        .index_article_content .col-md-5{
            width: 100%;
        }
        .index_article_content .col-md-offset-2{
            margin-left: 0;
        }
        .index_article_content_subcontent ul .media .dec span{
            margin: 0 3px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(3){
            position: relative;
            left: -4px;
        }
        /*标签*/
        .index_article_content_subcontent ul .media{
            padding: 30px 0;
        }
        .index_article_content_subcontent ul .media .dec{
            left:0;
        }
        .index_article_content_subcontent ul .media .dec span{
            font-size: 12px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(1) img{
            width: 18px;
            height: 18px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(2) img{
            width: 24px;
            height: 24px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(3){
            display:block;
        }
        /*答疑解惑*/
        .index_question_content{
            margin: 20px auto;
            padding-right: 0;
            padding-left: 0;
        }
        .index_question_content .index_question_newmessage{
            padding: 5px;
        }
        .index_question_que .media-body time{
            position: relative;
            left: -32px;
            text-align: left;
        }
        .index_question_que .media-body .studentcontent p,.index_question_an .media-body .teachercontent p{
            font-size: 16px;
        }
        .index_question_an .media-body time{
            left: 20px;
        }
        .index_question_content>div:nth-of-type(1){
            margin-left: 0;
        }
        .index_question_inputquestion input{
            font-size: 12px;
        }
        .btn{
            padding: 5px 0;
        }
        .index_question_commonquestion_content li:nth-of-type(1):hover:after,
        .index_question_commonquestion_content li:nth-of-type(2):hover:after,
        .index_question_commonquestion_content li:nth-of-type(3):hover:after,
        .index_question_commonquestion_content li:nth-of-type(4):hover:after,
        .index_question_commonquestion_content li:nth-of-type(5):hover:after,
        .index_question_commonquestion_content li:nth-of-type(6):hover:after,
        .index_question_commonquestion_content li:nth-of-type(7):hover:after,
        .index_question_commonquestion_content li:nth-of-type(8):hover:after,
        .index_question_commonquestion_content li:nth-of-type(9):hover:after
        {
            width: 278px;
            left:-28px;
        }

        /*悬浮表单*/
        .form_min img{
            width: 50px;
            height: 50px;
        }
        .form_min{
            bottom: 22px;
            right: 12px;
            width: 60px;
            height: 60px;
        }
        /*关闭按钮*/
        .form .header{
            display: inline-block;
            position: absolute;
            top:10px;
            right: -30px;
            z-index: 8001;
        }
        .form .form-content{
            margin-bottom: 0;
        }
        /*输入框*/
        .form .inputname,.inputqq,.inputphone,.inputcity{
            height: 30px;
            width: 110px;
            font-size: 14px;
        }
        .form .inputphone{
            width: 240px;
        }
        .form .select select{
            width: 110px;
            height: 30px;
            font-size: 14px;
            padding: 0 5px;
        }
        .form .inputqq{
            width: 190px;
            position: relative;
            left: 50px;
            border: none;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }
        .form #selectconnectmode{
            height: 30px;
            border: none;
            font-size: 14px;
            width: 50px;
            /*在选择框的最右侧中间显示小箭头图片*/
            background: url("../../../public/image/form/下拉图标.png") no-repeat scroll 35px center transparent;
            background-size: 8px;
            background-color: #fff;
            left: 10px;
            padding-left: 5px;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }
        /*logo*/
        .form .form_logo{
            display: none;
        }
        input{
            height: 30px;
        }
        #form{
            padding: 10px;
        }
        .form .header{
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            padding: 0 14px 0 14px;
            margin: 0;
            font-weight: bold;
        }
        .form .form-group label,.control-input{
            display: inline-block;
        }
        .form .form-group{
            text-align: left;
            margin: 5px 10px 16px -10px;
        }
        .form-group:nth-child(2) div,.form-group:nth-child(6) div{
            padding-left: 0;
        }
        .form #minimize{
            float: right;
            margin-right: 10px;
            cursor: pointer;
        }
        .form .form-content img{
            width: 80px;
            height: 80px;
        }
        .form .form-content{
            text-align: left;
            padding: 0;
        }
        .form .form_item{
            text-align: left;
        }
        .form .form-content div:nth-child(2) p{
            padding: 15px 0 0 0;
            margin-bottom: 0;
            color: #fff;
            font-size: 12px;
            text-align: left;
            position: relative;
            left: -10px;
        }
        .form .form-content div:nth-child(1) img{
            padding: 10px;
        }
        .form .form_item:nth-child(2) div,.form .form_item:nth-child(3) div{
            padding-left: 10px;
        }
        .form .form_item:nth-child(1) div:nth-child(1){
            padding-left: 10px;
        }
        .form .submit input{
            width: 180px;
            height: 40px;
            font-size: 16px;
            padding-left: 5px;
            margin-left: 5px;
        }
    }

</style>
