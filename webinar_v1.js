function format ( d ) {
    // Specify columns to show in the dropdown menu
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
        '<td>'+d.Synopsis+'</td>'+
        '</tr>'+
        '</table>';
}

$(document).ready(function() {

    var table = $('#webinar').DataTable( {

        // Fetch JSON file
        "ajax": "https://raw.githubusercontent.com/xinyu-dev/interactive-datatable/master/webinar_v1.JSON",
        responsive: true,
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "Date" },
            { "data": "Topics" },
            { "data": "Webinar Title" },
            { "data": "Speaker" },
            { "data": "Speaker Title" },
            { "data": "Affiliation"},
            { "data": "Replay"},
            { "data": "Synopsis", "visible": false, "searchable": true}  //hide this column in dropdown menu,  but make it searchable
        ],
        "order": [[1, 'dsc']]
    } );

    // Add event listener for opening and closing details
    $('#webinar tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            // Close dropdown menu if already open
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open dropdown menu
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );

    //mouse hover effects
    $('#webinar tbody').on( 'mouseenter', 'td', function () {
        var colIdx = table.cell(this).index().column;

        $( table.cells().nodes() ).removeClass( 'highlight' );
        $( table.column( colIdx ).nodes() ).addClass( 'highlight' );
    } );
} );