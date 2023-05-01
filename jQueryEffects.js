function initialize() {
    $('.dog-card').hover(
        function addShadow() {
            $(this).css("box-shadow", "0px 0px 10px #999")
        },
        function removeShadow() {
            $(this).css("box-shadow", "none")
        }
    )  
}

$(document).ready(initialize)
