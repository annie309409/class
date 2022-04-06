$(function(){
    var btn = $('.btns');
    var ag = $('.artGroup');
    var pg = $('.paging');
    var i = 0;
    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var onOff = true;

    function slideLeft(){
        if(onOff){
            i++;
            i=i%6;
            onOff= false;
        }
        ag.find('.article').css({width:'0'});
        ag.find('.article').eq(i).css({width: 'calc(100% / 6)'});
        
    }

    var inter  =  setInterval(slideLeft,1000);

    btn.find('button').first().click(slideLeft);

    btn.find('button').last().click(function(){
        if(onOff){
            i--;
            i=(6+i)%6;
            onOff= false;
        }
        ag.find('.article').css({width:'0'});
        ag.find('.article').eq(i).css({width: 'calc(100% / 6)'});
    });
    
    
    ag.find('.article').on(events,function(){
        onOff= true;
    });

    pg.find('li').click(function(){
        var ind = $(this).index();
        ag.find('.article').css({width:'0'});
        ag.find('.article').eq(ind).css({width: 'calc(100% / 6)'});


        pg.find('li').removeClass('show');
        $(this).addClass('show');


        i=ind;

        clearInterval(inter);
        
    });    
});