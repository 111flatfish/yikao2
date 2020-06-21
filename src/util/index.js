import qs from "qs"

// 公共函数
// index页jQuery初始化
function indexInit(that) {
    $(function () {
        // 表单缩放
        // 最小化
        // let formflag = that.$state.getformflag;
        let formflag = that.$store.getters.getformflag;
        if(formflag == false) {
            $(".form").css("display","none");
            $(".form_min").show();
        }
        $(".form #minimize").click(function () {
                that.$store.commit("setformflag",false);
                $(".form").hide(function () {
                    $(".form_min").show();
                });
        });
        // 最大化
        $(".form_min").click(function () {
                $(".form_min").hide(0,function () {
                    $(".form").show(200);
                });
        });
        // 当来源为其他时弹出输入框
        $("#form #selectFrom").click(function () {
            if($(this).val() == "other"){
                $(this).next("#selectFromTxt").show();
            }
        });
    });
}
function index_grade(that) {
    // 学生成绩轮播图
    $(function () {
        // 初始化位置
        let group = $(".index_grade_banner .index_grade_list .item");
        let len = group.first().outerWidth()+30;
        window.console.log(len);
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        // 轮播
        that.timer = setInterval(function () {
            group = $(".index_grade_banner .index_grade_list .item");
            group.first().clone(true).appendTo(".index_grade_banner .index_grade_list").css("left",`${len*(group.length)}px`);
            let group2 = $(".index_grade_banner .index_grade_list .item");
            group2.stop(true).animate({
                left:`-=${len}`
            },500,function () {
                group2.first().remove();
            })
        },3000);

        // 点击图片切换
        $(".index_grade_banner .index_grade_list,.index_grade_banner .left,.index_grade_banner .right").mouseenter(function () {
            clearInterval(that.timer);
        }).mouseleave(function () {
            that.timer = setInterval(function () {
                group = $(".index_grade_banner .index_grade_list .item");
                group.first().clone(true).appendTo(".index_grade_banner .index_grade_list").css("left",`${len*(group.length)}px`);
                let group2 = $(".index_grade_banner .index_grade_list .item");
                group2.stop(true).animate({
                    left:`-=${len}`
                },500,function () {
                    group2.first().remove();
                })
            },3000);
        });

        // 点击上一张或下一张
        let left = $(".index_grade_banner .left");
        let right = $(".index_grade_banner .right");
        let isClick = false;
        left.click(function () {
            if(!isClick){
                isClick = true;
                let group3 = $(".index_grade_banner .index_grade_list .item");
                group3.first().clone(true).appendTo(".index_grade_banner .index_grade_list").css("left",`${len*(group.length)}px`);
                let group4 = $(".index_grade_banner .index_grade_list .item");
                group4.stop(true).animate({
                    left:`-=${len}`
                },500,function () {
                    group4.first().remove();
                    isClick = false;
                })
            }
        });
        right.click(function () {
            if(!isClick){
                isClick = true;
                let group3 = $(".index_grade_banner .index_grade_list .item");
                group3.last().clone(true).prependTo(".index_grade_banner .index_grade_list").css("left",`${-len}px`);
                let group4 = $(".index_grade_banner .index_grade_list .item");
                group4.stop(true).animate({
                    left:`+=${len}`
                },500,function () {
                    group4.last().remove();
                    isClick = false;
                })
            }
        });
    });
}

// 专业介绍页jQuery初始化
function majorInit(that) {
    //上方内容展示区
    // 下方内容展示区
    $(function () {
        $(".showcontent2 .common_showcontent .free").mouseenter(function () {
            $(this).children(".freebackground").text("描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字").fadeTo(500,0.5);
        }).mouseleave(function () {
            $(this).children(".freebackground").text("").fadeOut(500);
        });
    });
}

// 艺考指南页初始化
function guideInit(that) {
    // 广告栏初始化
    $(function () {
        // 初始筛选为全部
        $(".searchfilter ul li").last().addClass("filterActive");
        $(".searchfilter ul li").click(function () {
            switch ($(this).text()) {
                case "最近七天":
                    that.filterArg = 7;
                    break;
                case "最近一月":
                    that.filterArg = 30;
                    break;
                case "最近半年":
                    that.filterArg = 183;
                    break;
                case "全部":
                    that.filterArg = 366;
                    break;
            }
            that.selectFn(that.filterArg);
            $(this).addClass("filterActive").siblings().removeClass("filterActive");
        });
    });
}

// 新闻详情页初始化
function newsInit(that) {
    // 广告栏初始化
    $(function () {
        // 初始筛选为全部
        $(".searchfilter ul li").last().addClass("filterActive");
        $(".searchfilter ul li").click(function () {
            switch ($(this).text()) {
                case "最近七天":
                    that.filterArg = 7;
                    break;
                case "最近一月":
                    that.filterArg = 30;
                    break;
                case "最近半年":
                    that.filterArg = 183;
                    break;
                case "全部":
                    that.filterArg = 366;
                    break;
            }
            that.selectFn(that.filterArg);
            $(this).addClass("filterActive").siblings().removeClass("filterActive");
        });
    });
}

// marjor页数据请求
function majorReq(axios,majorstyle,that) {
    axios.get(`getMajor/${majorstyle}/id/`).then(data=>{
        that.majorLeft = data.data;
    });
    axios.get(`getMajor/${majorstyle}/`).then(data=>{
        that.majorRight = data.data;
    });
    axios.get(`getMajor/${majorstyle}/mid`).then(data=>{
        that.majorMid = data.data;
    });
    axios.get(`getMajor/${majorstyle}/down`).then(data=>{
        that.majorDown = data.data;
    });

}

// about页jQuery初始化
function aboutInit(that) {
    $(function () {
        // 初始化位置
        let group = $(".about_evi_content ul li");
        let len = group.first().outerWidth();
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        group.eq(1).children("img").addClass("active");
        // 轮播
        that.timer = setInterval(function () {
            group = $(".about_evi_content ul li");
            group.first().clone(true).appendTo(".about_evi_content ul").css("left",`${len*(group.length)}px`);
            let group2 = $(".about_evi_content ul li");
            group2.stop(true).animate({
                left:`-=${len}`
            },500,function () {
                group2.first().remove();
                let src = group2.eq(2).children("img").attr("src");
                group2.eq(2).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                $(".showaboutimg").attr("src",src);
            })
        },3000);

        // 点击图片切换
        $(".about_evi_content ul").mouseenter(function () {
            clearInterval(that.timer);
        }).mouseleave(function () {
            that.timer = setInterval(function () {
                group = $(".about_evi_content ul li");
                group.first().clone(true).appendTo(".about_evi_content ul").css("left",`${len*(group.length)}px`);
                let group2 = $(".about_evi_content ul li");
                group2.stop(true).animate({
                    left:`-=${len}`
                },500,function () {
                    group2.first().remove();
                    let src = group2.eq(2).children("img").attr("src");
                    group2.eq(2).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                    $(".showaboutimg").attr("src",src);
                })
            },3000);
        });

        // 点击上一张或下一张
        let group3 = $(".about_evi_content ul li");
        let isClick = false;
        group3.click(function () {
            if(!isClick){
                isClick = true;
                // window.console.log($(this).index());
                let index = $(this).index();
                switch (index) {
                    // 上一张
                    case 0:
                        let group4 = $(".about_evi_content ul li");
                        group4.last().clone(true).prependTo(".about_evi_content ul").stop(true).css("left",`${-len}px`);
                        let group5 = $(".about_evi_content ul li");
                        group5.stop(true).animate({
                            left:`+=${len}`
                        },500,function () {
                            group5.last().remove();
                            let src = group5.eq(1).children("img").attr("src");
                            group5.eq(1).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                            $(".showaboutimg").attr("src",src);
                            isClick = false;
                        });
                        break;
                    // 中间
                    case 1:
                        isClick = false;
                        break;
                    // 下一张
                    case 2:
                        let group = $(".about_evi_content ul li");
                        group.first().clone(true).appendTo(".about_evi_content ul").stop(true).css("left",`${len*(group.length)}px`);
                        let group2 = $(".about_evi_content ul li");
                        group2.stop(true).animate({
                            left:`-=${len}`
                        },500,function () {
                            group2.first().remove();
                            let src = group2.eq(2).children("img").attr("src");
                            group2.eq(2).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                            // window.console.log(src);
                            $(".showaboutimg").attr("src",src);
                            isClick = false;
                        });
                        break;
                }
            }
        });
    });
    $(function () {
        // 初始化位置
        let group = $(".about_honor ul li");
        let len;
        if(group.first().outerWidth()<400&&group.first().outerWidth()>120){
            len = 368;
        }else if(group.first().outerWidth() <= 120){
            len = 120;
        }else {
            len = 467;
        }
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        // 初始化大小
        group.eq(1).css({
            zIndex:"2005"
        }).children("img").css({
            opacity:"1",
            transform:"scale(1.8,1.5)",
            transition:"1s"
        });
        // 轮播
        that.timer2 = setInterval(function () {
            group = $(".about_honor ul li");
            group.first().clone(true).appendTo(".about_honor ul").css("left",`${len*(group.length)}px`);
            let group2 = $(".about_honor ul li");
            group2.eq(2).siblings().css("z-index","1005").children("img").css({
                opacity:"0.5",
                transform:"scale(1,1)",
                transition:"1s"
            });
            group2.eq(2).css({
                zIndex:"2005",
            }).children("img").css({
                opacity:"1",
                transform:"scale(1.8,1.5)",
                transition:"1s"
            });
            group2.stop(true).animate({
                left:`-=${len}`
            },1000,function () {
                group2.first().remove();
            });

        },3000);


        // 点击图片切换
        $(".about_honor ul").mouseenter(function () {
            clearInterval(that.timer2);
        }).mouseleave(function () {
            that.timer2 = setInterval(function () {
                group = $(".about_honor ul li");
                group.first().clone(true).appendTo(".about_honor ul").css("left",`${len*(group.length)}px`);
                let group2 = $(".about_honor ul li");
                group2.eq(2).siblings().css("z-index","1005").children("img").css({
                    opacity:"0.5",
                    transform:"scale(1,1)",
                    transition:"1s"
                });
                group2.eq(2).css({
                    zIndex:"2005",
                }).children("img").css({
                    opacity:"1",
                    transform:"scale(1.8,1.5)",
                    transition:"1s"
                });
                group2.stop(true).animate({
                    left:`-=${len}`
                },1000,function () {
                    group2.first().remove();
                });
            },3000);
        });

        // 点击上一张或下一张
        let group3 = $(".about_honor ul li");
        let isClick = false;
        group3.click(function () {
            if(!isClick){
                isClick = true;
                // window.console.log($(this).index());
                let index = $(this).index();
                switch (index) {
                    // 上一张
                    case 0:
                        let group4 = $(".about_honor ul li");
                        group4.last().clone(true).prependTo(".about_honor ul").stop(true).css("left",`${-len}px`);
                        let group5 = $(".about_honor ul li");
                            group5.eq(1).siblings().css("z-index","1005").children("img").css({
                                opacity:"0.5",
                                transform:"scale(1,1)",
                                transition:"1s"
                            });
                            group5.eq(1).css({
                                zIndex:"2005",
                            }).children("img").css({
                                opacity:"1",
                                transform:"scale(1.8,1.5)",
                                transition:"1s"
                            });
                            group5.stop(true).animate({
                                left:`+=${len}`
                            },1000,function () {
                                group5.last().remove();
                                isClick = false;
                            });
                        break;
                    // 中间
                    case 1:
                        isClick = false;
                        break;
                    // 下一张
                    case 2:
                        let group = $(".about_honor ul li");
                        group.first().clone(true).appendTo(".about_honor ul").stop(true).css("left",`${len*(group.length)}px`);
                        let group2 = $(".about_honor ul li");
                            group2.eq(2).siblings().css("z-index","1005").children("img").css({
                                opacity:"0.5",
                                transform:"scale(1,1)",
                                transition:"1s"
                            });
                            group2.eq(2).css({
                                zIndex:"2005",
                            }).children("img").css({
                                opacity:"1",
                                transform:"scale(1.8,1.5)",
                                transition:"1s"
                            });
                            group2.stop(true).animate({
                                left:`-=${len}`
                            },1000,function () {
                                group2.first().remove();
                                isClick = false;
                            });
                        break;
                }
            }
        });
    });
}


export default {
    indexInit,
    index_grade,
    majorInit,
    guideInit,
    newsInit,
    aboutInit
}
