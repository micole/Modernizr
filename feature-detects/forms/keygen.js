/*!
{
  "name": "keygen",
  "property": "keygen",
  "authors": ["Micole"]
  
}
!*/
define(['Modernizr', 'createElement', 'testStyles'], function( Modernizr, createElement, testStyles ) {
  Modernizr.addTest('keygen', function(){
    var form = createElement('form');
      if ( !('checkValidity' in form) || !('addEventListener' in form) ) {
        return false;
      }
      //var invaildFired = false;
      var input;

      //Modernizr.formvalidationapi =  true;

      // Prevent form from being submitted
      form.addEventListener('submit', function(e) {
        //Opera does not validate form, if submit is prevented
        if ( !window.opera ) {
          e.preventDefault();
        }
        e.stopPropagation();
        var $form = $(this);
        var values = {};
        $.each($form.serializeArray(), function(i, field){
          values[field.name] = field.value;
        });
      }, false);

      // Calling form.submit() doesn't trigger interactive validation,
      // use a submit button instead
      //older opera browsers need a name attribute
      form.innerHTML = '<keygen /><button></button>';

      testStyles('#modernizr form{position:absolute;top:-99999em}', function( node ) {
        node.appendChild(form);

        /*input = form.getElementsByTagName('input')[0];

        // Record whether "invalid" event is fired
        input.addEventListener('invalid', function(e) {
          invaildFired = true;
          e.preventDefault();
          e.stopPropagation();
        }, false);*/

        //Opera does not fully support the validationMessage property
        //Modernizr.formvalidationmessage = !!input.validationMessage;

        // Submit form by clicking submit button
        input = form.getElementsByTagName('button')[0].click();
      });

      return input == "?";
  });
});