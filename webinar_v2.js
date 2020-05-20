

$(document).ready(function() {

    var table = $('#webinar').DataTable( {

        // Fetch JSON file
        "ajax": "https://raw.githubusercontent.com/xinyu-dev/interactive-datatable/master/webinar_v2.JSON",
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true,
        responsive: {
            details: {
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                            '<td>'+col.title+':'+'</td> '+
                            '<td>'+col.data+'</td>'+
                            '</tr>' :
                            '';
                    } ).join('');

                    return data ?
                        $('<table/>').append( data ) :
                        false;
                }
            }
        },
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "Webinar Title" },
            { "data": "Date" },
            { "data": "Topics" },
            { "data": "Speaker" },
            { "data": "Speaker Title" },
            { "data": "Affiliation"},
            { "data": "Replay"},
            { "data": "Synopsis"}  //hide this column in dropdown menu,  but make it searchable
        ],
        "order": [[2, 'dsc']]
    } );



} );