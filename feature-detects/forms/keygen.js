/*!
{
  "name": "keygen",
  "property": "keygen",
  "authors": ["Micole"],
  "notes": [{
    "name": "Github Issue W/example",
    "href": "https://github.com/Modernizr/Modernizr/issues/212#issuecomment-839230"
  }],
  "polyfills": ["keygen"]
}
!*/
define(['Modernizr'], function( Modernizr ) {
  Modernizr.addTest('keygen', function(){
    var x = document.createElement('keygen');
    return x.type == 'keygen';
  });
});
