var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d, month, year, today;
$(function(){
    d = new Date();
    month = d.getMonth();
    year = d.getFullYear();
    today = d.getDate();
    //get the weekday of first week and remove the additional empty spaces
    printCalendar();
});
function printNewCalendar(nb){
    month += nb;
    if(month<0){
        d.setFullYear(--year);
        month = 11;
    }
    if(month>=12){
        d.setFullYear(++year);
        month = 0;
    }
    d.setMonth(month);
    $(".empty").css("display", "inline-block");
    printCalendar();
}
function printCalendar(){
    d.setDate(1);
    var firstDayOfMonth = d.getDay();
    if(firstDayOfMonth == 0){firstDayOfMonth = 6;
    }else{firstDayOfMonth--;}
    var spaceToRemove = 6 - firstDayOfMonth;
    for(;spaceToRemove > 0; spaceToRemove--){
        $(".empty:nth-child(" + spaceToRemove + ")").css("display", "none");
    }
    //remove extra days
    //0 1 2 3 4 5 6 7 8 9 10 11
    //0 2 4 6 7 9 11
    if(month !=0 && month !=2 && month !=4 && month !=6 && month !=7 && month !=9 && month !=11){
        $(".days li:last-child").css("display", "none");
    }else{
        $(".days li:last-child").css("display", "inline-block");
    }
    if(month == 1){
        $(".days li:nth-last-child(2)").css("display", "none");
        if(year%4 !== 0){
            $(".days li:nth-last-child(3)").css("display", "none");
        }
    }else{
        $(".days li:nth-last-child(2)").css("display", "inline-block");
        $(".days li:nth-last-child(3)").css("display", "inline-block");
    }
    var monthText = monthArr[month];
    $(".month").text(monthText);
    $(".year").text(year);
    var testCalendar = new Date();
    var testYear = testCalendar.getFullYear();
    var testMonth = testCalendar.getMonth();
    if(month === testMonth && year === testYear){
        $(".days li:nth-child(" + (today+6) + ")").addClass("active");
    }else{
        $(".days li:nth-child(" + (today+6) + ")").removeClass("active");
    }
}
