$(document).ready(function()
{
  $('.plus-bt').on('click',function(e)
  {
    e.preventDefault();
    $(this).toggleClass('active');

    if($(this).hasClass('active'))
    {
      $(this).parent().find('.plus').stop().slideDown();
    }
    else
    {
      $(this).parent().find('.plus').stop().slideUp();
    }
  });

  // setTimeout(function()
  // { 
  //   $('#wrapper').removeClass('scene_element scene_element--fadeindown');
  // }, 300);
  
});