$.get('./components/header.html', function(response) {
  $("#nav").html(response);
});


function showProducts(response) {
  console.log(response);

  // html variables to be inserted later
  let header_html = '';
  let body_html = '';

  // loop through data to be added
  for (let i = 0; i < response.products.length; i++) {

    // add new card for each product
    body_html += '<div class="card">';

    // add placeholder image for each product
    body_html += '<img class="center card-img-top" src="http://placehold.it/50x50" alt="Placeholder Image">'

    // add card-title with name for each product
    body_html += '<div id="card-title">' + response.products[i].name + '</div>'

    // add card-text with price for each product
    body_html += '<div id="card-text">' + '$' + response.products[i].price + '</div>'

    body_html += '<button class="btn btn-primary center" type="submit">Add To Cart</button>'

    // end each div for card
    body_html += '</div>';
  }


  // inserting header_html variable into table_head id (on employees.html page)
  $("#card-title").html(header_html);

  //inserting body_html into table_body id
  $("#card-text").html(body_html);

}


let url = './assets/products.json';

$.get(url, showProducts);


// make cart appear on clicking add to cart
// document.addEventListener("click", makeCart);


function displayCart(response) {
  // grab headers for table
  let headers = Object.keys(response.products[0]);

  // console.log(headers);

  // html variables to be inserted later
  let header_html = '<tr><th scope="col">#</th>';
  let body_html = '';

  // write the html for table header
  for (let i = 0; i < headers.length; i++) {
    header_html += '<th scope="col">' + headers[i] + '</th>';
  }

  // close header row
  header_html += '</tr>';

  // inserting header_html variable into table_head id
  $("#table_head").html(header_html);

  //inserting body_html into table_body id
  $("#table_body").html(body_html);
}


window.onload = function() {
  let btns = document.getElementsByClassName('btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', displayCart);
  }
}

let url1 = './assets/products.json';

$.get(url1, displayCart);

  // // add new row for each product
  // body_html += '<tr><th scope="row">' + (i + 1) + '</th>';
  //
  // body_html += '<td>'+ response.products[i] + '</td>';
  //
  // body_html += '</tr>';


  // // loop through data to be added
  // for (let i = 0; i < response.products.length; i++) {
  //   // add new row for each product (data)
  //   body_html += '<tr><th scope="row">' + (i + 1) + '</th>';
  //
  //   for (let j = 0; j < headers.length; j++) {
  //     // set current header
  //     let cur_head = headers[j];
  //
  //     body_html += '<td>' + response.products[i][`${cur_head}`] + '</td>';
  //   }
  //
  //   // end each product row
  //   body_html += '</tr>';

  // }

  // // inserting header_html variable into table_head id (on employees.html page)
  // $("#table_head").html(header_html);
  //
  // //inserting body_html into table_body id
  // $("#table_body").html(body_html);
