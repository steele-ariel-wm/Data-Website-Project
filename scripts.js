google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Industrialized Country', 'Developing Country'],
        ['Global', 49, 19],
        ['United States', 20, 0],
        ['United Kingdom', 89, 0],
        ['Canada', 74, 0],
        ['Asia & The Pacific', 19, 0],
        ['European Union', 59, 0],
        ['Mexico', 0, 37],
        ['China', 84, 0]
    ]);

    var options = {
        title: 'Employment Rate of People with Disabilities',
        chartArea: {width: '50%'},
        colors: ['#84A98C', '#354F52'],
        hAxis: {
            title: 'Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Country'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['City', 'Percentage of Children with That Disability',],
        ['ADHD & ADD', 5],
        ['Autism & Aspergers', 2],
        ['Cerebral Palsy', .3],
        ['Down Syndrome', .144],
        ['Dyslexia', 17],
        ['Fetal Alcohol Syndrome', .13],
        ['Learning Disabilities', 17],
        ['Mental Retardation', 2],
        ['Seizure Disorders', 3.8],
        ['Visual Impairment', 11]
    ]);

    var options = {
        title: 'Most Common Disabilities in Children',
        chartArea: {width: '50%'},
        colors: ['#2F3E46'],
        hAxis: {
            title: 'Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Disability'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['City', 'Percentage of Disability',],
        ['Kids 5 to 17', 5],
        ['People 18 to 64', 10],
        ['Adults 65 and older', 37],
    ]);

    var options = {
        title: 'Disability by Age',
        chartArea: {width: '50%'},
        colors: ['#52796F'],
        hAxis: {
            title: 'Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Age'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));

    chart.draw(data, options);
}






google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic2);

function drawBasic2() {

    var data = google.visualization.arrayToDataTable([
        ['City', 'Amount of People',],
        ['Hearing Difficulty', 10200000],
        ['Vision Difficulty', 6000000],
        ['Difficulty concentrating, remembering or making decisions', 13500000],
    ]);

    var options = {
        title: 'Specific Disabilities',
        chartArea: {width: '50%'},
        colors: ['#84A98C'],
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'Specific Disability'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div4'));

    chart.draw(data, options);
}




