/**
* TimeSplitter jQuery plugin - makes time inputs more friendly in a simple way, with hours, minutes, and am/pm inputs replacing a single text input.
* Author: Colby Palmer
* Email: colby [at] colbypalmer dot com
* URL: http://www.github.com/colbypalmer/timesplitter
* Version: 0.0.1a
* Licensed under the FreeBSD License: http://www.opensource.org/licenses/bsd-license.php
*
* Example usage:
* $(selector).timesplitter();
**/

function timeupdate(t){

    var t = $(t);
    var x = t.parent();
    x.children(".timesplitter_hour, .timesplitter_minute").removeClass("timesplitter_error");
    var hour = x.children(".timesplitter_hour").val();
    var min = x.children(".timesplitter_minute").val();
    var ampm = x.children(".timesplitter_ampm").val();
    err = 0;
    if(isNaN(hour) || (hour > 12)  || (String(hour).length < 1)){ 
        x.children(".timesplitter_hour").addClass("timesplitter_error");
        err = 1;
    }
    if(isNaN(min) || (min > 59) || (String(min).length < 2)){ 
        x.children(".timesplitter_minute").addClass("timesplitter_error");
        return false; 
        err = 1;
    }
    if((hour == 12) && (ampm == 0)){
        hour = 0;
    } else if((hour == 12) && (ampm == 1)){
        hour = 12;
    } else {
        hour = parseInt(hour, 10);
        hour = (ampm == "1") ? (hour + 12) : hour;
    }
    if(err) return false;
    newtime = hour+":"+min;
    oldval = t.parent().prev().val();
    t.parent().prev().val(newtime);
}

(function($){
    
    $.fn.timesplitter = function() {
        
        // bind keyup actions to update the original input
        $(".timesplitter_hour, .timesplitter_minute").live("keyup", function(t){
            t = $(this);
            timeupdate(t);
        });
        $(".timesplitter_ampm").live("change", function(t){
            t = $(this);
            timeupdate(t);
        });
        
        return this.each(function() {
            var $this = $(this);
            
            $this.wrap('<span class="timesplitter_wrap" />');

            var oldval = $this.val();
            if($this.attr("required")){
                var reqd = ' required="required"';
            } else {
                var reqd = '';
            }
            var obj = oldval.split(":");
            var hours = obj[0];
            var minutes = obj[1];
            var ampm = hours - 12;
            if(ampm < 0){
                hour_display = hours;
                var am_select = ' selected="selected"';
                var pm_select = '';
            } else if(ampm == 0) {
                hour_display = hours;
                var am_select = '';
                var pm_select = ' selected="selected"';
            } else {
                hour_display = ampm;
                var am_select = '';
                var pm_select = ' selected="selected"';
            }
            if(oldval == ""){
                hours = "";
                minutes = "";
                ampm = 0;
                // $this.val("00:00");
            }
            $this.hide().after('<div class="timesplitter_wrap"><input type="text" name="timesplitter_hour" class="timesplitter_hour" value="'+hour_display+'" maxlength="2"'+reqd+' />:<input type="text" name="timesplitter_minute" class="timesplitter_minute" value="'+minutes+'" maxlength="2"'+reqd+' /><select name="timesplitter_ampm" class="timesplitter_ampm"><option value="0"'+ am_select +'>AM</option><option value="1"'+ pm_select +'>PM</option></select></div>');
        });
    }
})( jQuery );
