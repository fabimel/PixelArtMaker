function makeGrid() {
  // Select size input
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  // Set the grid value
  const table = $('#pixel_canvas');
  // Clear previous grid
  table.empty();
  // Create grid height
  for (let i= 0; i < height; i++) {
    table.append('<tr></tr>');
  }
  // Create grid width
  let j= 0;
  // Use of while as an alternative to for
  while (j < width) {
    $('tr').append('<td></td>');
    j++;
  }
}
// Listen for button click to submit the grid size
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function(e) {
  // Prevent the page reload
  e.preventDefault();
  makeGrid();
});
// Click to paint the cell
$('#pixel_canvas').on('click', 'td', function(){
  const colors = $('#colorPicker').val();
  $(this).css('background-color', colors);
});
// Remove color with double click
$('#pixel_canvas').on('dblclick', 'td', function() {
  $(this).css('background-color', '');
});
