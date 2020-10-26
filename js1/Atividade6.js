function generate_table(){

    var body = document.getElementsByTagName('body')[0];


    for(var i=1; i<11; i++){

        var table = document.createElement('table');
        var table_body = document.createElement('tbody');

        var header = document.createElement('thead');
        var header_row = document.createElement('tr');
        var title = document.createElement('th');
        title.setAttribute('colspan', '2');
        var title_text = document.createTextNode('Produtos de ' + i);
        title.appendChild(title_text);
        header_row.appendChild(title);
        header.appendChild(header_row);
        table.appendChild(header);

        for(var j=1; j<11;j++){

            var row = document.createElement('tr');

            


            var cell_form = document.createElement('td');
            var cell_form_text = document.createTextNode(i + 'x' + j);
            cell_form.appendChild(cell_form_text);

            var cell_result = document.createElement('td');
            var cell_result_text = document.createTextNode(i*j);
            cell_result.appendChild(cell_result_text);

            row.appendChild(cell_form);
            row.appendChild(cell_result);

            table_body.appendChild(row);
            
        }

        
        table.appendChild(table_body);
        body.appendChild(table);

        table.setAttribute("border", "2");
    }

    
}

generate_table();