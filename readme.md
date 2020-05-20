# Interactive Data Table
A simple implementation of a responsive, interactive data table using jquery, dataTables.js, and bootstrap

# Examples: 

The following examples share these similarities: 

1. Fetches data from JSON file (The example JSON file provided as `webinar_v2.JSON`. 

2. One search box for all data fields in the table, including fields shown in the dropdown menu

3. Row sorting

The differences lie in the way child rows are handled. 


## Version 1: Specify child row to hide

Expandable dropdown menu for each row to hide certain user-defined columns.

- Data file: `webinar_v1.JSON`, `webinar_list_v1.csv` (only the JSON file is needed as the data source. CSV file is included for convenience. CSV can be converted to JSON using other online tools.)
- Javascript: `webinar_v1.js`
- [Demo 1](https://xinyu-dev.github.io/interactive-datatable/webinar_v1.html) 

## Version 2: Reponsively hide child rows

Automatically hide whatever number of rows needed, depending on the screen size.
