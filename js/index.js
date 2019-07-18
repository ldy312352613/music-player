
//因为无论进入按钮，还是进入ul，都要保证ul显示
//因为无论从按钮出，还是从ul出，都要关闭ul
//又因为按钮和ul都是包含在一个div内的
//所以，应该把鼠标进入和移出事件绑定在共同的父元素div上
//1. 查找触发事件元素:
$("li.dropdown")
//2. 绑定事件处理函数
//当鼠标进入div时
        .mouseover(function(){
            //3. 查找要修改的元素
            $(".dropdown-menu")
                //4. 修改元素
                .css("display","block")
                    //dropdown-menu.show();
        })
//当鼠标移出div时
        .mouseout(function(){
            //3. 查找要修改的元素
            $(".dropdown-menu").hide();
                //4. 修改元素
                  //  .css("height",0)
        })
