<template>
    <div class="message">
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main class="container">
            <div class="message_header">
                <img src="../../../public/image/question/图标-标题.png" alt="问答">
                <h1>留言板</h1>
            </div>
            <div class="message_inner">
                <div class="row clearfix message_content" v-for="item in currentMessage">
                    <!--学生留言-->
                    <div class="message_item message_student col-md-offset-2 col-md-8">
                        <div class="media">
                            <div class="media-left">
                                <!--头像-->
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/question/图标-问答Q.png" alt="student">
                                </a>
                            </div>
                            <!--内容-->
                            <div class="media-body">
                                <h3 class="media-heading">{{item.access}}</h3>
                                <time>{{item.create_time}}</time>
                                <div class="studentcontent">
                                    <p>{{item.question}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--老师答复-->
                    <div class="message_item message_teacher col-md-offset-2 col-md-8">
                        <div class="media">
                            <!--内容-->
                            <div class="media-body">
                                <h3 class="media-heading">{{item.answer_name}}</h3>
                                <time>{{item.answer_time}}</time>
                                <div class="teachercontent">
                                    <p>{{item.answer}}</p>
                                </div>
                            </div>
                            <div class="media-left">
                                <!--头像-->
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/question/图标-问答A.png" alt="teacher">
                                </a>
                            </div>
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
                <div class="jumppage">
                    <input type="number" class="btn"><span>/{{totalPage}}</span>
                    <input type="button" class="btn" value="转到此页">
                </div>
            </div>

            <!--留言表单-->
            <div class="row clearfix message_form">
                <div class="col-md-2 studentheadimg">
                    <!--头像-->
                    <img src="../../../public/image/question/图标-问答Q.png" alt="student">
                </div>
                <div class="col-md-9">
                    <form class="form-horizontal" id="form">
                        <div class="form-group">
                            <!--留言内容-->
                            <label for="inputtext" class="col-sm-3 control-label">留言内容 <span class="isneed">*</span></label>
                            <div class="col-sm-9">
                                <textarea class="form-control" rows="3" id="inputtext" name="content" v-model="message.msg" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <!--手机号码-->
                            <label for="inputphone" class="col-sm-3 control-label">请输入您的手机号码</label>
                            <div class="col-sm-9">
                                <input type="number" class="form-control" id="inputphone" v-model="message.phone" placeholder="phone">
                                <button type="button" class="btn" id="buttonsubmit" @click="messagesubmit">提交</button>
                            </div>
                        </div>
                    </form>
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

    export default {
        name: "message",
        // 数据
        data(){
            return{
                // 文章数据
                messages:[],               // 初始化页面获取的总文章
                currentMessage:[],          //当前页渲染的文章

                // 页码栏数据
                currentPage:1,            //当前页，默认为1
                pageNum:4,                //一页最多显示的文章数
                totalPage:1,             //总页数

                // 留言参数
                message:{
                    msg:null,
                    phone:null
                },
                // banner类型
                type:"message",
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
        // 组件创建
        created() {
            // 初始化页面获取文章请求
            axiosReq.get("https://api.wulixianzhi.cn/index.php/index/index/getQuestion/num/20").then(data=>{
                this.totalPage = Math.ceil(data.data.length/this.pageNum);
                this.messages = data.data;
                window.console.log(data);
                // 默认显示第一页
                this.currentMessage = this.messages.slice(0,4);
            });
        },
        // 方法
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.currentMessage = this.messages.slice((this.currentPage-1)*4,(this.currentPage-1)*4+4);

            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.currentMessage = this.messages.slice((this.currentPage-1)*4,(this.currentPage-1)*4+4);
            },
            // 留言提交
            messagesubmit(){
                if(this.message.msg == null||this.message.msg == ""){
                    window.alert("留言不能为空！请重新输入");
                }else {
                    axiosReq.post("commit_question",{user_name:"游客",tel:this.message.phone,content:this.message.msg}).then(data=>{
                        if(data.status == 200){
                            window.alert("留言成功！");
                        }
                    });
                }
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

        },
        // 组件挂载
        mounted() {
        }
    }

</script>

<style scoped>
main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
.message{
    margin-top: 125px;
}
.message_inner{
    border: 1px solid #000;
    border-radius: 8px;
}
.message .message_header img{
    width: 140px;
    height: 85px;
    margin-bottom: 40px;
}
.message .message_header h1{
    display: inline-block;
    text-align: center;
    font-size: 75px;
    font-weight: 900;
    text-shadow: 1px 1px 5px #fff;
    -webkit-text-stroke: 1px #fff;
}


.message .message_teacher .media{
    text-align:right;
}
.message_teacher h3{
    text-align:right;
    padding-right: 20px;
    font-size: 30px;
}
.message_teacher time{
    float: right;
    margin-right: 30px;
    font-size: 25px;
    width: 100%;
}
.message_student time{
    float: left;
    margin-left: 15px;
    font-size: 25px;
    width: 100%;
    text-align: left;
}
.message_student .media-body{
    text-align: left;
}
.message_student .media-body .studentcontent{
    position: relative;
    left: 0;
}

.message_student .media-body .studentcontent p{
    display: inline-block;
}
.message_teacher .media-body{
    text-align:right;
}
.message_teacher .media-body .teachercontent{
    position: relative;
    right: -2%;
}
.message_teacher .media-body .teachercontent p{
    display: inline-block;
}




/*留言表单*/
.message_content{
    padding: 20px 0;
    background: url("../../../public/image/question/尖端横线.png") no-repeat bottom center;
}
.message_content:nth-of-type(4){
    background: none;
}
.message_content .media-left img{
    border-radius: 50%;
}
.message_form {
    padding: 15px;
    margin-top: 20px;
}
.message_form label{
    font-size: 18px;
}
.message_form .studentheadimg img{
    width: 100%;
    border-radius: 50%;
}

.message_form .submit button{
    height: 40px;
    width: 100px;
}
.message_form .isneed{
    color: red;
}

.message_form .form-group{
    text-align: left;
    font-size: 16px;
}
.message_form .form-group #inputtext{
    width: 90%;
    height: 150px;
    font-size: 18px;
}
.message_form .form-group #inputphone{
    width: 50%;
    height: 50px;
    font-size: 18px;
    display: inline-block;
}
.message_form .form-group #buttonsubmit{
    height: 50px;
    width: 100px;
    background: #fff;
    color: #FFA500;
    border: 2px solid #FFA500;
    border-radius: 12px;
    font-size: 25px;
    margin-left: 80px;
}
.message_form .form-group #buttonsubmit:focus{
    outline: none;
}
/*页码栏*/
.pageContainer li{
    cursor: pointer;
}
.pageContainer li span{
    width: 50px;
}
.pageContainer nav{
    display: inline-block;
    position: relative;
    left: -30px;
}
.actived{
    background-color:#ffe284;
}
.pageContainer .jumppage{
    display: inline-block;
}
.pageContainer .jumppage input{
    height: 45px;
    width: 80px;
    border-radius: 6px;
    position: relative;
    top: -40px;
    left: 10px;
    border: 1px solid #ccc;
}
.pageContainer .jumppage input:nth-of-type(2){
    left: 40px;
    background-color: #fff;
}
.pageContainer .jumppage input:nth-of-type(2):hover{
    color: #00a1b6;
}
.pageContainer .jumppage span {
    position: relative;
    top: -35px;
    left: 10px;
    font-size: 25px;
}

@media (max-width: 768px) {
    /*内容*/
    .message{
        margin-top: 60px;
    }
    .message_item{
        margin: 10px 0 20px 0;
    }
    .message_item .media .teachercontent{
        margin-left: -7px;
    }
    .message .message_header img{
        margin-bottom: 0;
    }
    .message_content .media-left img{
        width: 60px;
        height: 60px;
    }
    .message_content .media-body h3{
        margin-bottom: 10px;
        font-size: 18px;
    }
    .message_content .teachercontent, .message_content .studentcontent{
        margin-top: 0;
    }
    .message_content .teachercontent p, .message_content .studentcontent p{
        padding: 5px;
    }
    .message_content .teachercontent p:before, .message_content .studentcontent p:before{
        top:-7px;
    }
    .message_content .teachercontent p:after, .message_content .studentcontent p:after{
        top:-7px;
    }

    .message_content{
        padding: 10px 0;
        background-size: 90%;
    }
    .pageContainer li span{
        width: 30px;
        text-align: center;
        padding: 5px;
    }
    .message_form{
        margin-top: 0;
    }
    .message_form .studentheadimg img{
        width: 80px;
    }
    .message_form>div,.message_form .studentheadimg{
        display: inline-block;
    }
    .message_form .form-group #inputtext {
        height: 100px;
    }
    .message_form .form-group #inputphone{
        height: 30px;
    }
    .message_form .submit button{
        height: 30px;
        width: 60px;
    }
    .message_form label{
        font-size: 14px;
    }
    /*页码栏*/
    .pageContainer nav{
        display: block;
    }
    .pagination{
        position: relative;
        left: 20px;
    }
    /*页码跳转*/
    .pageContainer .jumppage input{
        top:0;
        left: -20px;
        height: 35px;
    }
    .pageContainer .jumppage input:nth-of-type(2){
        left: 20px;
    }
    .pageContainer .jumppage span{
        top:0;
        left: -10px;
    }
    /*输入框*/
    .message_form .form-group #buttonsubmit{
        margin-left: 24px;
        height: 35px;
        font-size: 21px;
        margin-bottom: 4px;
    }

}
</style>
