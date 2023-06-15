$(function() {


    var forma = $('#formaID');
    if (forma.length) {
        forma.validate({
            rules: {
                username: {
                    required: true
                },
                age: {
                    required: true,
                    min: 20,
                    max: 60
                }

            },
            messages: {
                required: 'Username is mandatory'
            },
            messages: {
                required: 'Ages is required',
                min: 'You must be older than 20'
            }
        })
    }




})