<template>
    <div class="teacher">
        <!--内容-->
        <main class="container teacher">
            <!--&lt;!&ndash;搜索框&ndash;&gt;-->
            <!--<div class="search row clearfix">-->
                <!--<form class="searchform col-md-offset-1 col-md-9">-->
                    <!--<input type="text" placeholder="搜索老师" class="form-control txt">-->
                    <!--<button type="button" value="搜索" class="btn form-control glyphicon glyphicon-search"></button>-->
                <!--</form>-->
            <!--</div>-->
            <div class="teacher_header">
                <h1>大咖往事</h1>
            </div>
            <!--老师内容-->
            <div class="row clearfix">
                <div class="col-md-12 content">
                    <div class="row clearfix teachercontent">
                        <!--文本-->
                        <div class="col-md-6  name">
                            <h1>{{teacher.name}}</h1>
                            <p>毕业院校：{{teacher.school}}</p>
                            <p>执教起点：1996年</p>
                            <div class="teacher_lable">
                                <p>标签：</p>
                                <ul>
                                    <li v-for="item in teacher.lable">{{item}}</li>
                                </ul>
                            </div>
                            <div class="teacher_achievement">
                                <p>教学成果：</p>
                                <ul>
                                    <li>中央戏剧学院 <span style="font-size: 34px;font-weight: bolder;">15</span> 名</li>
                                    <li>北京电影学院 <span style="font-size: 34px;font-weight: bolder;">15</span> 名</li>
                                    <li>中国传媒大学 <span style="font-size: 34px;font-weight: bolder;">15</span> 名</li>
                                </ul>
                            </div>
                        </div>
                        <!--轮播图片-->
                        <div class=" col-md-3 img">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                <!-- Wrapper for slides -->
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="../../../public/image/teacherheader/2.jpeg" alt="teacher">
                                    </div>
                                    <div class="item">
                                        <img src="../../../public/image/teacherheader/3.jpg" alt="teacher">
                                    </div>
                                    <div class="item">
                                        <img src="../../../public/image/teacherheader/1.jpeg" alt="teacher">
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
                        </div>
                        <img src="../../../public/image/teacher/尖端横线.png" alt="尖端横线" width="100%">
                    </div>
                    <!--简介-->
                    <h3 style="text-align: left;margin-left: 80px;font-weight: bold">简介</h3>
                    <div class="row clearfix synopsis">
                        <article>
                            <p style="white-space: pre-wrap">
                                {{teacher.introduce}}
                            </p>
                        </article>
                    </div>
                </div>
            </div>

            <!--导航条-->
            <!--<div class="row clearfix control col-md-offset-1 col-md-9">-->
                <!--<div class="col-lg-3 teacher_banner">-->
                     <!--<input type="button" value="上一个老师" class="btn btn-primary form-control">-->
                <!--</div>-->
                <!--<div class="col-lg-6 teacher_banner"></div>-->
                <!--<div class="col-lg-3 teacher_banner">-->
                    <!--<input type="button" value="下一个老师" class="btn btn-primary form-control">-->
                <!--</div>-->
            <!--</div>-->
        </main>

    </div>
</template>

<script>
    // 引入组件
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    // 引入axios
    import axiosReq from "../../util/axiosConfig"
    export default {
        name: "teacher",
        // 老师数据
        data(){
          return{
              teacher:null
          }
        },
        // 路由传参
        props:["id"],
        // 组件
        components:{
            Header,
            Footer
        },
        created(){
            axiosReq.get(`getTeacher/id/${this.id}`).then(data=>{
                this.teacher = data.data[0];
                // 拆分标签
                this.teacher.lable = this.teacher.lable.split(",");

            });
        },
        mounted() {
            // 老师图片轮播
            $(function () {
                $('.carousel').carousel({
                    // 切换时间
                    interval: 3000
                })
            });
        }
    }

</script>

<style scoped>
/*老师内容*/
.teacher{
    margin-top: 125px;
    margin-left: 7.5%;
    margin-bottom: 50px;
}
.teacher .teacher_header{
    background: url("../../../public/image/teacher/标题容器.png") no-repeat;
    background-size:433px 163px;
    background-position: 45% 10%;
    height: 200px;
    padding-top: 5px;
}
.teacher .teacher_header h1{
    text-align: center;
    margin-right: 7%;
    font-size: 71px;
}
.teacher .content{
    border: 1px solid #e5e5e5;
    /*margin: 15px;*/
    border-radius: 4px;
}
.teachercontent{
    margin: 0;
}
.teachercontent .name{
    padding: 30px 0 15px 84px;
    line-height: 40px;
    margin-right: 15px;
}
.teachercontent .name ul li{
    font-size: 30px;
}
.teachercontent .name h1{
    font-size: 60px;
    position: relative;
}
.teachercontent .name h1:after{
    content: "______";
    position: absolute;
    left:0;
    right: 0;
    top:8px;

}
.teachercontent .name p{
    font-size: 35px;
    color:#000;
    text-align: left;
    margin-left: 30px;
    margin-top: 30px;
}
.teachercontent .img{
    width: 380px;
    margin: 30px 0 10px 50px;
    border-radius: 4px;
}
.teachercontent .img img{
    height: 350px;
    border-radius: 4px;
}
.teachercontent .left,.right{
    background-image: none;
}
.teachercontent .left .pre{
    display: inline-block;
    background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
    background-size: 77px 77px;
    width: 77px;
    height: 77px;
    position: relative;
    top: 30%;
    left: -180%;
}
.teachercontent .right .next{
    display: inline-block;
    background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
    background-size: 77px 77px;
    width: 77px;
    height: 77px;
    transform: rotateY(180deg);
    position: relative;
    top: 30%;
    right: -132%;
}
.teacher .content .synopsis{
    padding: 45px 95px;
    line-height: 25px;
    text-align: left;
    text-indent:35px
}
.teacher .content .synopsis p{
    font-size: 20px;
}
/*导航条*/
.teacher  .control{
    padding: 40px 0;
}
.teacher  .control .btn{
    height: 50px;
    margin-right: 15px;
}

/*搜索栏*/
.teacher .search{
    position: relative;
    margin: 30px 15px;
}
.teacher .search input{
    font-size: 16px;
    height: 48px;
    padding: 0 15px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
    /*background-color:hsla(0,100%,100%,0.1);*/
}
.teacher .search input:focus{
    color: #00a1d6;
    box-shadow: 0 0 4px 2px rgba(0,161,214,.8);
}
.teacher .search button{
    position: absolute;
    right: 14px;
    top:0;
    width: 52px;
    height: 48px;
    border: none;
    padding: 0;
    font-size: 28px;
}
.teacher .search button:hover{
    color:#00a1d6;
}
@media (max-width: 1600px) {
    .teacher{
        margin: 250px auto;
    }
}
@media (max-width: 768px) {
    .teachercontent .img{
        width: 320px;
    }
    .teachercontent .img img{
        width: 300px;
        height: 300px;
    }
    .teachercontent .name p,h1{
        margin: 10px;
    }
    .teacher_banner{
        display: inline-block;
    }
}
</style>
