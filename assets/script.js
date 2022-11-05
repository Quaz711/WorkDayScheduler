$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        saveupDate.style.display = "";
        console.log($(this).parent().attr("id"), $(this).siblings(".description").val());

        if ($(this).parent().attr("id"), $(this).siblings(".description").val() != ""){
            console.log(localStorage.getItem($(this).parent().attr("id")));
            if ($(this).parent().attr("id"), $(this).siblings(".description").val() == localStorage.getItem($(this).parent().attr("id"))) {
                var word = "localstorage"
                saveupDate.style.backgroundColor = "transparent";
                saveupDate.style.color = "black";
                $("#saveupDate").html("Nothing was changed in " + word + " 😐");
                var element = document.getElementById("saveupDate");
                var originalHtml = element.innerHTML;
                var newHtml = originalHtml.replace(word, word.fontcolor("red"));
                element.innerHTML = newHtml;
            }

            else if (localStorage.getItem($(this).parent().attr("id")) == null) {
                console.log("we have an empty spot");
                localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
                var word = "localstorage"
                saveupDate.style.backgroundColor = "transparent";
                saveupDate.style.color = "black";
                $("#saveupDate").html("Appointment Added to " + word + " ✔️");
                var element = document.getElementById("saveupDate");
                var originalHtml = element.innerHTML;
                var newHtml = originalHtml.replace(word, word.fontcolor("red"));
                element.innerHTML = newHtml;
            }

            else {
                console.log("we changed successfully")
                localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
                var word = "localstorage"
                saveupDate.style.backgroundColor = "transparent";
                saveupDate.style.color = "black";
                $("#saveupDate").html("Appointment Updated in " + word + " 🙂");
                var element = document.getElementById("saveupDate");
                var originalHtml = element.innerHTML;
                var newHtml = originalHtml.replace(word, word.fontcolor("red"));
                element.innerHTML = newHtml;
            }
        }

        else {
            var word = "localstorage"
            saveupDate.style.backgroundColor = "transparent";
            saveupDate.style.color = "black";
            $("#saveupDate").html("Nothing was added to " + word + " ❌");
            var element = document.getElementById("saveupDate");
            var originalHtml = element.innerHTML;
            var newHtml = originalHtml.replace(word, word.fontcolor("red"));
            element.innerHTML = newHtml;
        }
        
        setTimeout(function() {
            saveupDate.style.display = "none";
        }, 3000);
    })

    function timePeriod () {
        $(".time-block").each(function () {
            if (parseInt($(this).attr("id").split("time")[1]) < moment().hour()) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (parseInt($(this).attr("id").split("time")[1]) === moment().hour()) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    timePeriod();

    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm a"));
    $("#time9 .description").html(localStorage.getItem("time9"));
    $("#time10 .description").html(localStorage.getItem("time10"));
    $("#time11 .description").html(localStorage.getItem("time11"));
    $("#time12 .description").html(localStorage.getItem("time12"));
    $("#time13 .description").html(localStorage.getItem("time13"));
    $("#time14 .description").html(localStorage.getItem("time14"));
    $("#time15 .description").html(localStorage.getItem("time15"));
    $("#time16 .description").html(localStorage.getItem("time16"));
    $("#time17 .description").html(localStorage.getItem("time17"));
});