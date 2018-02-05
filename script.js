$(function(){
    var sendtweet = function(){
        $("#Tweetstorm-tweet-box-0").find(".SendTweetsButton").click();    
    }
    $(".nav.right-actions").append('<li role="complementary" aria-labelledby="global-new-kusotweet-button" class="topbar-tweet-btn"><button id="global-new-kusotweet-button" class="js-tooltip js-dynamic-tooltip EdgeButton EdgeButton--primary"><span class="text">んほぉぉ！</span></button></li>');
    $("#global-new-kusotweet-button").on('click',function(){ 
        $("#global-new-tweet-button").click();
        $(".tweet-box.rich-editor.is-showPlaceholder").append('<div>んほぉぉ！イッぐぅぅ！！</div>');
        setTimeout(sendtweet,100);
    });
});