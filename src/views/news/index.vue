<template>
    <div class="news">
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main class="container">
            <!--logo-->
            <div class="news_logo">
                <h1>戏传新闻</h1>
            </div>
            <!--搜索栏-->
            <div class="row clearfix search">
                <div class="col-md-7 column searchinput">
                    <!--搜索框-->
                    <div class="search">
                        <form class="searchform" enctype="application/x-www-form-urlencoded">
                            <input type="text" placeholder="搜索新闻标题或标签" class="  txt" v-model="searchArg">
                            <button type="button" class="btn" value="搜索"  @click="searchNews">点击搜索</button>
                        </form>
                    </div>
                </div>
                <!--筛选栏-->
                <div class="col-md-5 column searchfilter">
                    <label>按时间筛选：</label>
                    <ul>
                        <li>最近七天</li>
                        <li>最近一月</li>
                        <li>最近半年</li>
                        <li>全部</li>
                    </ul>
                </div>
            </div>
            <!--展示内容区-->
            <div class="row clearfix content">
                <!--文章栏-->
                <div class="col-md-8 column news_content">
                    <!--文章显示区-->
                    <h3 style="text-align: left" v-if="isSearch">搜索结果：</h3>
                    <h3 style="text-align: left" v-if="!isSearch">最新文章：</h3>
                    <ul class="row clearfix">
                        <li class="media" v-for="item in currennews" @click="ToNews(item.id)">
                            <div class="media-left">
                                <!--图片-->
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/1.jpeg" alt="图片">
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
                                        <img src="../../../public/image/news/图标-时钟.png" alt="发布时间">{{item.create_time}}
                                    </span>
                                    <span>
                                        <img src="../../../public/image/news/图标-眼睛.png" alt="浏览数">{{item.view_num}}
                                    </span>
                                    <span>
                                        <ul v-for="item2 in item.news_lable" style="display: inline-block">
                                            <li style=";margin: 0 5px;border-radius: 4px;background-color: white;padding: 5px;box-shadow: 0 0 2px 2px rgba(0,0,0,.1)">{{item2}}</li>
                                        </ul>
                                     </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--页码栏-->
                    <div class="pageContainer">
                        <nav aria-label="Page navigation">
                            <ul class="pagination pagination-lg">
                                <!--上一页-->
                                <li @click="pagePreOrNext(-1)">
                                    <span aria-hidden="true">&laquo;</span>
                                </li>
                                <!--页码-->
                                <li v-for="(item,index) in pages" :key="index" @click="select(item)"><span :class="{actived: item === currentPage}">{{item}}</span></li>
                                <!--下一页-->
                                <li @click="pagePreOrNext(1)">
                                    <span aria-hidden="true">&raquo;</span>
                                </li>
                            </ul>
                        </nav>
                        <div class="jumppage">
                            <input type="number" class="btn" v-model="inputPage"><span>/{{totalPage}}</span>
                            <input type="button" class="btn" value="转到此页" @click="jump">
                        </div>
                    </div>

                </div>
                <!--广告栏-->
                <div class="col-md-4 column adv">
                    <div class="adv_item" v-for="item in adv">
                        <img v-bind:src="item.image_url" alt="adv">
                        <div class="adv_item_txt">
                            {{item.introduce}}
                        </div>
                    </div>
                </div>
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
    import axiosReq from "../../util/axiosConfig"

    //引入util函数
    import util from  "../../util"

    export default {
        name: "news",
        // 数据
        data(){
            return{
                // 文章数据
                news:[],               // 初始化页面获取的总文章
                currennews:[],          //当前页渲染的文章

                // 页码栏数据
                currentPage:1,            //当前页，默认为1
                pageNum:5,                //一页最多显示的文章数
                totalPage:1,             //总页数
                inputPage:1,              //输入跳转的页面

                // 是否搜索
                isSearch:false,

                // 筛选值
                filterArg:366,
                // 搜索参数
                searchArg:null,

                // 广告栏数据
                adv:[],

                // banner类型
                type:"news",
                // banner位置
                loc:"title"
            }
        },
        // 组件
        components:{
            Header,
            Footer,
            Banner
        },
        created() {
            // 初始化页面获取文章请求
            axiosReq.get(`getNews/num/100/day/${this.filterArg}`).then(data=>{
                if(data.data.length > 0){
                    this.totalPage = Math.ceil(data.data.length/this.pageNum);
                    this.news = data.data;
                    // 把标签值分割
                    this.news.forEach((value)=>{
                        value.news_lable = value.news_lable.split(",");
                    });
                    // 默认显示第一页
                    this.currennews = this.news.slice(0,5);
                }else {
                    this.$router.push({
                        path:"/error"
                    })
                }
            });

            // 初始化获取广告信息
            axiosReq.get("getSomeAdv").then(data=>{
                this.adv = data.data;
            });

        },
        // 方法
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.currennews = this.news.slice((this.currentPage-1)*5,(this.currentPage-1)*5+5);

            },
            // 跳转页面
            jump(){
                this.inputPage<1?this.inputPage=1:this.inputPage>this.totalPage?this.inputPage = this.totalPage:null;
                let jumppage = Number.parseInt(this.inputPage);
                this.select(jumppage);
            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.currennews = this.news.slice((this.currentPage-1)*5,(this.currentPage-1)*5+5);

            },
            // 搜索文章
            searchNews(){
                if(this.searchArg == null|| this.searchArg == ""){
                    window.alert("搜索条件不能为空！请重新输入！");
                }else {
                    axiosReq.get(`queryNews/name/${this.searchArg}`).then(data => {
                        if (data.data.length > 0) {
                            this.isSearch = true;
                            this.totalPage = Math.ceil(data.data.length / this.pageNum);
                            this.news = data.data;
                            // 把标签值分割
                            this.news.forEach((value) => {
                                value.news_lable = value.news_lable.split(",");
                            });
                            // 默认显示第一页
                            this.currennews = this.news.slice(0, 5);

                        } else {
                            this.$router.push({
                                path: "/error"
                            })
                        }
                    });
                }
            },
            // 点击文章，跳转到文章页
            ToNews(id){
                this.$router.push({
                    path:`/news/${id}`
                });
            },
            // 筛选日期处理函数
            selectFn(arg){
                axiosReq.get(`getNews/num/1000/day/${arg}`).then(data=>{
                    if(data.data.length > 0){
                        this.totalPage = Math.ceil(data.data.length/this.pageNum);
                        this.news = data.data;
                        // 把标签值分割
                        this.news.forEach((value)=>{
                            value.news_lable = value.news_lable.split(",");
                        });
                        // 默认显示第一页
                        this.currennews = this.news.slice(0,5);

                    }else {
                        this.$router.push({
                            path:"/error"
                        })
                    }
                });
            }
        },
        // 组件
        computed:{
            // 页码计算属性
            pages(){
                let c = Number.parseInt(this.currentPage);
                let t =  Number.parseInt(this.totalPage);
                let p =  Number.parseInt(this.pageNum);
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
        },
        mounted() {
            util.newsInit(this);
        }
    }



</script>

<style scoped>
    /*标题图*/
    .news .news_logo h1{
        background: url("../../../public/image/news/标题图.png") no-repeat center center;
        background-size: 150px 150px;
        font-size: 72px;
        line-height: 150px;
        font-weight: bold;
        text-shadow: 3px 3px 1px #fff;
        height: 150px;
        margin-top: 50px;
    }
    /*搜索栏*/
    .news .search{
        position: relative;
        margin-top: 16px;
        text-align: left;
    }
    .news .search input{
        font-size: 25px;
        padding: 5px 10px 8px 10px;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
        display: inline-block;
        width: 50%;
        /*background-color:hsla(0,100%,100%,0.1);*/
    }
    .news .search input:focus{
        color: #00a1d6;
        box-shadow: 0 0 4px 2px rgba(0,161,214,.8);
    }
    .news .search button{
        width: 20%;
        padding: 4px;
        font-size: 28px;
        display: inline-block;
        background-color: #fff;
        border: 2px solid #ffA500;
        border-radius: 10px;
        color: #ffa500;
        margin-left: 50px;
        height: 50px;
        margin-bottom: 5px;
    }
    .news .search button:hover{
        color:#00a1d6;
    }
    .btn:focus{
        outline: none;
    }
    .news .search select{
        height: 44px;
        font-size: 16px;
        width: 150px;
        border-radius: 4px;
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
        border: none;
        margin-top: 15px;
    }
    .news{
        padding: 0;
        margin-top: 125px;
    }
    .news .searchfilter{
        margin-top: 10px;
    }
    .news .searchfilter label,ul{
        font-size: 18px;
        height: 61px;
        line-height: 61px;
        display: inline-block;
    }
    /*筛选*/
    .filterActive{
        color: #000!important;
        font-weight: bolder;
    }
    .news .searchfilter>ul li{
        display: inline-block;
        font-size: 18px;
        margin-right: 30px;
        color: #aaa;
        cursor: pointer;
    }


    /*内容栏*/
    .content{
        margin: 40px 0 40px 0;
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
    }
    .content .column{
        margin-bottom: 0;
    }

    .content ul .media{
        padding: 30px 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        margin: 15px;
        border-bottom: 2px solid #ccc;
    }
    .content ul .media:hover{
        box-shadow: 0 0 4px 3px rgba(0,0,0,.1);
    }
    .content ul .media:hover .media-heading{
        color: #00a1d6;
    }
    .content ul .media .media-body{
        position: relative;
    }
    .content ul .media .media-body p{
        margin-top: 15px;
        font-size: 18px;
        line-height: 22px;
        overflow: hidden;
        text-align: left;
        margin-left: 20px;
        margin-bottom: 0;
        height: 100px;
    }

    .content ul .media .media-left img{
        width: 200px;
        height: 188px;
        margin: 2px;
        border-radius: 4px;
    }

    .content .news_content>h3{
        margin-bottom: 30px;
    }
    .content ul .media h3{
        font-size: 28px;
        color: #000;
        text-align: left;
        font-weight: bold;
        margin-left: 20px;
        transition: .3s;
        overflow: hidden;
    }
    .content ul .media .dec{
        position: relative;
        left:20px;
        bottom: 2px;
        font-size: 16px;
        height: 40px;
        text-align: left;
        line-height: 40px;
    }
    .content ul .media .dec span{
        margin: 10px 20px;
        color: #99a2aa;
        display: inline-block;
    }
    .content ul .media .dec span img{
        width: 20px;
        height: 20px;
        position: relative;
        top: -2px;
        margin-right: 5px;
    }
    .content ul .media .dec span:nth-of-type(1){
        margin-left: 0;
    }
    .content ul .media .dec span:nth-of-type(2) img{
        width: 30px;
        height: 30px;
    }
    .content ul .media .dec span:nth-of-type(3){
        width: 30.333%;
        text-align: right;
        position: absolute;
        right: 0;
    }
    .content ul .media .dec ul{
        line-height: normal;
        color: #000;
    }



    /*广告栏*/
    .content .adv{
        border-left: 3px solid #ccc;
    }
    .content .adv_item{
        width: 100%;
        height: 440.6px;
        cursor: pointer;
        margin-top: 26px;
        margin-bottom: 55px;
        position: relative;
    }
    .content .adv_item img{
        width: 100%;
        height: 90%;
        position:relative;
    }
    .content .adv_item:after{
        content: '';
        width: 100%;
        height: 30px;
        background: url("../../../public/image/news/广告栏-下横线.png") no-repeat center center;
        position: absolute;
        bottom: -42px;
        left: 0;
    }
    .content .adv_item:nth-of-type(3):after{
        background: none;
    }
    .content .adv{
        padding: 10px 10px -5px 20px;
        padding-top: 50px;
        padding-left: 20px;
        text-align: center;

    }
    .content .adv_item_txt{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20%;
        color: #00a1b6;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    }
    /*页码栏*/
    .pageContainer nav{
        display: inline-block;
        position: relative;
        left: -8%;
    }
    .pageContainer .jumppage{
        display: inline-block;
    }
    .pageContainer .jumppage input{
        height: 45px;
        width: 80px;
        border-radius: 6px;
        position: relative;
        top: -56px;
        left: -30px;
        border: 1px solid #ccc;
    }
    .pageContainer .jumppage input:nth-of-type(1){
        font-size: 20px;
    }
    .pageContainer .jumppage input:nth-of-type(2){
        left: 0;
        background-color: #fff;
    }
    .pageContainer .jumppage input:nth-of-type(2):hover{
        color: #00a1b6;
    }
    .pageContainer .jumppage span{
        position: relative;
        top: -52px;
        left: -30px;
        font-size: 22px;
    }
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
        .news .searchfilter>ul li{
            margin-right: 16px;
        }
        .pageContainer nav{
            left: -5%;
        }
        .pageContainer nav ul{
            height: 29px;
        }
        .pageContainer nav ul li span{
            font-size: 14px;
            width: 40px;
        }
        .pageContainer .jumppage{
            position: relative;
            left:30px;
        }
        .pageContainer .jumppage input{
            height: 39px;
            width: 70px;
            top:-26px;
        }
        .pageContainer .jumppage input:nth-of-type(2){
            padding: 6px 7px;
        }
        .pageContainer .jumppage span{
            top:-22px;
        }

    }
    @media (max-width: 768px) {
        /*内容*/
        .news{
            margin-top: 60px;
        }
        /*搜索框*/
        .news .search input{
            font-size: 13px;
        }
        .news .search button{
            height: 30px;
            font-size: 16px;
            right: 0;
            width: 28%;
            padding: 0;
            margin-left: 60px;
            margin-bottom: 0;

        }

        /*文章内容*/
        .content{
            padding: 0;
        }
        .content ul{
            padding-right: 0;
        }
        .content ul .media{
            margin: 0;
            padding:10px 5px;
        }
        .news_content{
            padding: 0;
        }
        .content ul .media .media-body .dec{
            left: 0;
            bottom: 0;
            text-align: left;
            width: 210px;
            height: auto;
            line-height: 20px;
        }
        .content ul .media .media-body .dec span{
            width: auto;
            text-align: left;
        }
        .content ul .media .dec span:nth-of-type(3){
            position: relative;
            display: block;
        }
        .content ul .media .dec span:nth-of-type(3) ul{
            height: auto;
        }


        .searchinput,.searchfilter{
            display: inline-block;
            padding: 5px;
        }
        .news .search select{
            width: 70px;
            height: 30px;
        }
        .news .search input{
            height: 30px;
        }
        .content{
            margin: 0;
        }
        .content h3{
            font-size: 18px;
        }
        .content .news_content h3{
            margin-bottom: 10px;
        }
        .content ul .media .media-left img{
            width: 120px;
            height: 100px;
        }
        .row{
            margin: 0;
        }
        .content ul .media .media-body p{
            margin: 10px 0 10px 0;
            width: 210px;
            height: auto;
        }
        .content ul .media .media-body span{
            margin: 5px;
            font-size: 12px;
        }
        .content ul .media .media-body .dec li{
            font-size: 12px;
        }
        .content ul .media .media-body .dec ul{
            position: relative;
            left: -8px;
        }
        .content ul .media .media-body .media-heading{
            margin-left: 0;
        }

        /*页码栏*/
        .pageContainer nav{
            left: 0;
        }
        .pagination{
            display: block;
        }
        .pageContainer nav ul li span{
            width: 28px;
            text-align: center;
            padding: 5px;
        }


        /*跳转栏*/
        .pageContainer .jumppage{
            display: block;
            left: 0;
        }
        .pageContainer .jumppage input{
            left: 0;
            top: 0;
        }
        .pageContainer .jumppage span{
            left: 0;
            top: 0;
        }
        .pageContainer .jumppage input:nth-of-type(2){
            left: 20px;
        }

        /*广告栏*/
        .content .adv{
            margin-top: 0;
            padding-left: 10px;
            padding-top: 0;
        }
        .content .adv_item{
            height: 300px;
        }

    }

</style>
