<template>
    <div class="achievement">
        <!--头部-->
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main class="container">
            <div class="achievement_header">
                <h1>历届成绩</h1>
            </div>
            <!--成绩展示区-->
            <div class="row clearfix">
                <div class="col-sm-6 col-md-3 content" v-for="item in currentGrade">
                    <div class="thumbnail">
                        <!--图片-->
                        <div class="achievement_img">
                            <div class="util"></div>
                            <img v-bind:src="item.picture" alt="grade">
                        </div>
                        <!--描述-->
                        <div class="lable">
                        </div>
                        <div class="caption">
                            <h3>{{item.name}}</h3>
                            <p>学校：{{item.school}}</p>
                            <p>专业：{{item.major}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--页码栏-->
            <div class="pageContainer">
                <nav aria-label="Page navigation">
                    <ul class="pagination pagination-lg">
                        <!--上一页-->
                        <li @click="pagePreOrNext(-1)">
                            <span aria-hidden="true">&laquo;</span>
                        </li>
                        <!--页码-->
                        <li v-for="(item,index) in pages" :key="index"  @click="select(item)"><span :class="{actived: item === currentPage}">{{item}}</span></li>
                        <!--下一页-->
                        <li @click="pagePreOrNext(1)">
                            <span aria-hidden="true">&raquo;</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
        <!--底部-->

    </div>
</template>

<script>
    // 引入组件
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"

    // 引入axios
    import axiosReq from  "../../util/axiosConfig"
    export default {
        name: "achievement",
        data(){
            return{
                // 成绩数据
                grades:[],               // 初始化页面获取的总成绩数
                currentGrade:[],          //当前页渲染的成绩

                // 页码栏数据
                currentPage:1,            //当前页，默认为1
                pageNum:12,                //一页最多显示的成绩数
                totalPage:1,             //总页数

                // banner类型
                type:"achievement",
                // banner位置
                loc:"title"

            }
        },
        components:{
            Header,
            Footer,
            Banner
        },
        created() {
            // 初始化页面获取成绩请求
            axiosReq.get("getStudentGrade/num/20").then(data=>{
                this.totalPage = Math.ceil(data.data.length/this.pageNum);
                this.grades = data.data;
                // 默认显示第一页
                this.currentGrade = this.grades.slice(0,12);
            });
        },
        // 方法
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.currentGrade = this.grades.slice((this.currentPage-1)*12,(this.currentPage-1)*12+12);

            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.currentGrade = this.grades.slice((this.currentPage-1)*12,(this.currentPage-1)*12+12);

            }
        },
        // 组件
        computed:{
            // 页码计算属性
            pages(){
                let c = this.currentPage;
                let t = this.totalPage;
                let p = this.pageNum;
                let arr = [];
                if(t <= 9 && t >0){
                    while (t > 0){
                        arr.push(t);
                        t--;
                    }
                    return arr.reverse();
                }else {
                    if(c <= 5){
                        return [1,2,3,4,5,6,7,"...",t];                              //第一种情况
                    }else if (c >= t - 5) {
                        return [1, '...', t-6, t-5, t-4, t-3, t-2, t-1, t] //第二种情况
                    } else {
                        return [1, '...',  c-2, c-1, c, c+1, c+2,  '...', t] //第三种情况
                    }
                }
            }

        }
    }

</script>

<style scoped>
.achievement{
    margin-top: 125px;
    background-color: #f6f6f6;
}
.achievement .thumbnail{
    background:none ;
}
.achievement .achievement_header{
    background: url("../../../public/image/teacher/标题容器.png") no-repeat center center;
    background-size:433px 163px;
    height: 200px;
    padding-top: 25px;
}
.achievement .achievement_header h1{
    text-align: center;
    font-size: 71px;
}
.achievement .achievement_img{
    width: 100%;
    position: relative;
    overflow: hidden;
}
.achievement .achievement_img .util{
    height: 0;
    width: 0;
    padding-top: 110%;
}
.achievement .achievement_img img{
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
}
.achievement .thumbnail{
    border: none;
}
.achievement .caption p{
    text-align: left;
    font-size: 16px;
    margin-bottom: 6px;
}
.achievement .thumbnail h3{
    font-size: 20px;
    position: relative;
    margin-bottom: 10px;
    margin-top: 10px;
    border-left: 1px solid #000;
    text-align: left;
    font-weight: bolder;
    padding-left: 7px;
}
.achievement .thumbnail h3:after{
    content: '';
    height: 3px;
    width: 110px;
    position: absolute;
    top:40px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.achievement .thumbnail .caption{
    position: relative;
    top:-66px;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding-left: 18px;
}
.achievement .thumbnail:hover .caption{
    background-color: #f58635;
    color: #fff;
    transition: all .3s ease;
}
.achievement .thumbnail:hover .caption:before{
    opacity: 1;
    transition: all .3s ease;
}
.achievement .thumbnail:hover .lable{
    opacity: 0.5;
    transition: all .3s ease;
}
.achievement .thumbnail .caption:before{
    content: "名校直通车";
    position: absolute;
    left: 0;
    top:-22px;
    right: 0;
    color: #fff;
    font-size: 16px;
    opacity: 0;
    transition: all .3s ease;
}
.achievement .thumbnail .lable{
    position: relative;
    top: -66px;
    width: 80%;
    height: 24px;
    margin: 0 auto;
    opacity: 0;
    background-color: #000;
    transition: all .3s ease;
}

main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
main nav{
    height: 100px;
}
/*页码栏*/
.pageContainer li{
    cursor: pointer;
}
.pageContainer li span{
    width: 50px;
}
.actived{
    background-color:#ffe284;
}
@media (max-width: 1600px) {
    .achievement .thumbnail img{
        height: 273px;
    }
}
@media (max-width: 768px) {
    /*头部*/
    .achievement{
        margin-top: 60px;
    }
    .achievement .achievement_header h1{
        font-size: 58px;
    }
    .achievement .achievement_header{
        background-size:300px 150px;
    }
    .achievement .thumbnail h3:after{
        top: 20px;
    }

    /*内容*/
    .achievement .thumbnail img{
        width: 130px;
        height: 130px;
    }
    .achievement .content{
        display: inline-block;
    }
    .achievement .thumbnail h3{
        font-size: 18px;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .achievement .thumbnail p{
        font-size: 14px;
    }
    .pageContainer li span{
        width: 30px;
        text-align: center;
        padding: 5px;
    }
}
</style>
