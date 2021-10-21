$(function() {
    window.addEventListener("message", function(e) {
        let item = e.data;
        $('#Speed').text(`${item.Speed}`);
        if (item.Display) {
            $('#all').fadeOut()

        } else {
            $('#all').fadeIn() 
        }
    })
})