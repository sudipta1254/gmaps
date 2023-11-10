var inp = $('input')

$('button').click(function() {
   get()
})
$('input').change(function() {
   get()
})
function get() {
   $('iframe').attr('src', `https://maps.google.com/maps?width=600&height=400&hl=en&q=${inp.val().trim()}&t=&z=11&ie=UTF8&iwloc=B&output=embed`)
}
