// Range slider
$( function() {
  var handle1 = $( "#handle-min" );
  var handle2 = $( "#handle-max" );
  
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 150,
    values: [ 35, 98 ],
    create: function() {
      handle1.text( $( this ).slider( "values", 0 ) );
      handle2.text( $( this ).slider( "values", 1 ) );
    },
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] );
      $( "#amount-max" ).val( ui.values[ 1 ] );
      handle1.text( ui.values[ 0 ] );
      handle2.text( ui.values[ 1 ] );
    }
  });
});
