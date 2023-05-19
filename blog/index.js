fetch('./blog/template.html')
    .then(function(res) {
        var body = res.text();
        var title = body.split('<title>')[1].split('</title>')[0]
        console.log(title)
    })
