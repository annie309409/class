var action={
    on(dom,i){
        dom.children('ul.paging').children('li').removeClass('on');
        dom.children('ul.paging').children('li').eq(i).addClass('on');
    },
    fullSlide(dom,j,dir){
        if(dir == 'top'){
            dom.css('margin-top',j*-200+'px');
        }else{
            dom.css('margin-left',j*-100+'%');
        }
    },
    acor(dom,ind){
        dom.children('li').removeClass('show');
        ind.addClass('show');
    },
    artSlide(dom,j){
        dom.css('margin-left',j*-33.33+'%');
    },
    indNum(i,max,min){
        if(i >= max){
           return i = max;
        }else if(i <= min){
            return i = min;
        }else{
            return i=i;
        }
    }
};

export default action;