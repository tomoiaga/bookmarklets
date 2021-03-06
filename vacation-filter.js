function() {
    if (!jQuery) {
        var script = document.createElement('script');
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
        script.onload = runScript;
        document.body.appendChild(script);
    } else {
        runScript();
    }

    function runScript() {
        var hide = ["a", "b"];
        var table = $('.results-grid table');
        for (index = 0; index < hide.length; index) {
            var row = $(table).find("tr:contains('" + hide[index] + "')");
            row.hide();
        }
    }
};