module.exports = function(
  initialState = {},
  {
    navHtml,
    modalHtml,
    galleryHtml,
    descriptionHtml,
    relatedListingsHtml,
    bookingHtml
  }
) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <link rel="dns-prefetch" href="https://picsum.photos">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
      crossorigin="anonymous">

    <title>FEC</title>

    <base href="/" target="_blank">
    <link rel="stylesheet" href="styles.css" />

    <!-- styles from other services --> 
    <!-- styles from other services --> 

  </head>
  
  <body>
    <div id="root">
      <div id="nav-app">${navHtml || ''}</div>
      <div id="modal-app">${modalHtml || ''}</div>
      <div id="gallery-app">${galleryHtml || ''}</div>
      <div id="app-body" class="container m-auto p-0">
        <div id="description-app">${descriptionHtml || ''}</div>
        <div id="reviews-app" style="height: 30px"></div>
        <div id="booking-app" class="pr-2">${bookingHtml || ''}</div> 
        <div id="related-listings-app">${relatedListingsHtml || ''}</div>
      </div>
      
      
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em"
      crossorigin="anonymous"></script>
  
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  
    <script>window.__initialState__ = ${JSON.stringify(initialState)}</script>
    <script src="index.bundle.js"></script>

    <!-- scripts from other services --> 
    <!-- scripts from other services --> 

  </body>
  </html>
  `;
};