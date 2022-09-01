google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'President' });
  dataTable.addColumn({ type: 'string', id: 'dummy bar label' });
  dataTable.addColumn({ type: 'string', role: 'tooltip' });
  dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Internship', 'FirstEnergy', 'FirstEnergy', '#005ba1', new Date(2021, 4, 9), new Date(2021, 7, 17)],
    [ 'School Job', 'Center for Design and Manufacturing Excellence', '<div style="color:black;">CDME</div>', '#BB0000', new Date(2021, 1, 1),  new Date()],
    [ 'School Job', 'FEH TA', '<div style="color:black;">CDME</div>', '#BB0000', new Date(2022, 7, 15),  new Date()],
    [ 'Internship', 'Lake Shore Cryotronics', 'Lake Shore', '#123f66', new Date(2022, 4, 10),  new Date(2022, 7, 1)]
    ]);


    var options = {
        timeline: { groupByRowLabel: true},
        // backgroundColor: '#333',
      };
  
      chart.draw(dataTable, options);
}


// <div class="google-visualization-tooltip" style="width: 238px; height: 157px; left: 326.903px; top: 45.912px; pointer-events: none;"><ul class="google-visualization-tooltip-item-list"><li class="google-visualization-tooltip-item"><span style="font-family:Arial;font-size:12px;color:#000000;opacity:1;margin:0;font-style:none;text-decoration:none;font-weight:bold;">George Washington</span></li></ul><div class="google-visualization-tooltip-separator"></div><ul class="google-visualization-tooltip-action-list"><li data-logicalname="action#" class="google-visualization-tooltip-action"><span style="font-family:Arial;font-size:12px;color:#000000;opacity:1;margin:0;font-style:none;text-decoration:none;font-weight:bold;">Washington:</span><span style="font-family:Arial;font-size:12px;color:#000000;opacity:1;margin:0;font-style:none;text-decoration:none;font-weight:none;"> Apr 1789 - Mar 1797</span></li><li data-logicalname="action#" class="google-visualization-tooltip-action"><span style="font-family:Arial;font-size:12px;color:#000000;opacity:1;margin:0;font-style:none;text-decoration:none;font-weight:bold;">Duration:</span><span style="font-family:Arial;font-size:12px;color:#000000;opacity:1;margin:0;font-style:none;text-decoration:none;font-weight:none;"> 7 years, 10 months, 2 days</span></li></ul></div>