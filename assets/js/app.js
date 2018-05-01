$(document).ready( function startGame() {
    $('#score1').addClass('mybkgd');
    changePlayer();

});
function changePlayer() {
  $('.player').on('click', function() {
    $('#score1').removeClass('mybkgd');
    $('#score2').removeClass('mybkgd');
    $('#score3').removeClass('mybkgd');
    $(this).addClass('mybkgd');
  });
}
