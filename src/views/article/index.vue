<template>
    <div class="article">
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <main class="container">
            <div class="row clearfix">
                <!--文章栏-->
                <section class=" col-md-8">
                        <h3>文章标题</h3>
                        <div class="head">
                            <span>作者:{{article.compiler}}</span>
                            <time>时间：{{article.create_time}}</time>
                            <span>浏览：{{article.view_num}}</span>
                        </div>
                        <div class="lable">
                            <span>标签：
                                <ul>
                                    <li v-for="item in article.lable">
                                        {{item}}
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <article class="content">
                            <p>
                                {{article.content}}
                            </p>
                        </article>
                </section>
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

    </div>
</template>

<script>
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"
    import axiosReq from "../../util/axiosConfig"
    export default {
        name: "article",
        components:{
            Header,
            Footer,
            Banner
        },
        props:["id"],
        data(){
            return {
                // banner类型
                type:"article",
                // banner位置
                loc:"title",
                // 广告
                adv:[],
                // 文章
                article:null
            }
        },
        created() {
            // 获取指定id的文章
            axiosReq.get(`getAnArticle/id/${this.id}`).then(data=>{
                if(data.data.length>0){
                    this.article = data.data[0];
                    this.article.lable = this.article.lable.split(",");
                }else{
                    this.$router.push({
                        path:"/error"
                    })
                }
            });
            // 初始化获取广告信息
            axiosReq.get("getSomeAdv").then(data=>{
                this.adv = data.data;
            });

        }
    }

</script>

<style scoped>
section{
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px 3px rgba(0,0,0,.1);
    color: #404040;
    font-weight: 400;
    margin: 250px auto;
    margin-bottom: 100px;
    padding: 20px 20px;
}
.article{
    background-color: #f9f9f9;
}
.article h3{
    font-size: 40px;
    margin: 15px;
    font-weight: bolder;
}
.article .head span,time{
    margin: 15px;
    font-size: 18px;
    color: #000;
}
.article .lable{
    margin-top: 15px;
    font-size: 18px;
}
.article .lable ul{
    display: inline-block;
}
.article .lable ul li{
    display: inline-block;
    font-size: 18px;
}
.article .content p{
    font-weight: bolder;
    margin: 15px;
    text-align: left;
    font-size: 20px;
    text-indent: 36px;
    padding: 10px 36px 10px 36px ;
    line-height: 32px;
    margin-top: 30px;
}
    /*广告栏*/
/*广告栏*/
.article .adv{
    border-left: 3px solid #ccc;
    margin-top: 250px;
}
.article .adv_item{
    width: 100%;
    height: 440.6px;
    cursor: pointer;
    margin-bottom: 55px;
    position: relative;
}
.article .adv_item img{
    width: 100%;
    height: 90%;
    position:relative;
}
.article .adv_item:after{
    content: '';
    width: 100%;
    height: 30px;
    background: url("../../../public/image/guide/广告栏-下横线.png") no-repeat center center;
    position: absolute;
    bottom: -42px;
    left: 0;
}
.article .adv_item:nth-of-type(3):after{
    background: none;
}
.article .adv{
    padding: 10px 10px -5px 20px;
    padding-left: 20px;
    text-align: center;

}
.article .adv_item_txt {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20%;
    color: #00a1b6;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}
@media (max-width: 768px) {
    /*广告栏*/
    .article .adv{
        margin-top: 0;
        padding-left: 10px;
    }
    .article .adv_item{
        height: 300px;
    }
}
</style>
