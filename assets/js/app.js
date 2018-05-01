
$(document).ready( function startGame() {
    $('#score1').addClass('mybkgd');
    changePlayer();
    activeButton();
});
function changePlayer() {
  $('.player').on('click', function() {
    $('#score1').removeClass('mybkgd');
    $('#score2').removeClass('mybkgd');
    $('#score3').removeClass('mybkgd');
    $(this).addClass('mybkgd');
  });
}
function activeButton() {
  $('.actions').on('click', function() {
    $('#r1').removeClass('activebkgd');
    $('#r2').removeClass('activebkgd');
    $('#r3').removeClass('activebkgd');
    $('#r4').removeClass('activebkgd');
    $('#r1').addClass('mybkgd1');
    $('#r2').addClass('mybkgd1');
    $('#r3').addClass('mybkgd1');
    $('#r4').addClass('mybkgd1');
    $(this).removeClass('mybkgd1');
    $(this).addClass('activebkgd');

  });

  $(document).on('keyup', function(event) {
    var button = String.fromCharCode(event.keyCode);

    if (button == 'r' || button == 'R') {
      $('#r2').addClass('mybkgd1');
      $('#r3').addClass('mybkgd1');
      $('#r4').addClass('mybkgd1');
      $('#r1').removeClass('mybkgd1');
      $('#r1').addClass('activebkgd');
      $('#r2').removeClass('activebkgd');
      $('#r3').removeClass('activebkgd');
      $('#r4').removeClass('activebkgd');
    } else if (button == 's' || button == 'S') {
      $('#r1').removeClass('activebkgd');
      $('#r3').removeClass('activebkgd');
      $('#r4').removeClass('activebkgd');
      $('#r1').addClass('mybkgd1');
      $('#r3').addClass('mybkgd1');
      $('#r4').addClass('mybkgd1');
      $('#r2').removeClass('mybkgd1');
      $('#r2').addClass('activebkgd');
    } else if (button == 'i' || button == 'I') {
      $('#r1').addClass('mybkgd1');
      $('#r2').addClass('mybkgd1');
      $('#r4').addClass('mybkgd1');
      $('#r1').removeClass('activebkgd');
      $('#r2').removeClass('activebkgd');
      $('#r4').removeClass('activebkgd');
      $('#r3').removeClass('mybkgd1');
      $('#r3').addClass('activebkgd');
    } else if (button == 'd' || button == 'D') {
      $('#r1').addClass('mybkgd1');
      $('#r2').addClass('mybkgd1');
      $('#r3').addClass('mybkgd1');
      $('#r1').removeClass('activebkgd');
      $('#r2').removeClass('activebkgd');
      $('#r3').removeClass('activebkgd');
      $('#r4').removeClass('mybkgd1');
      $('#r4').addClass('activebkgd');
    }
  });

}
