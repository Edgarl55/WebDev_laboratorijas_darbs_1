$(document).ready(function() {

    const initialColor = 'rgb(127, 0, 255)';
    const hoverColor = 'rgb(255, 0, 255)';
    
    // 1. Effect: background color change on mouse hover
    $('#band p').hover(
        function() {
            $(this).css('background-color', hoverColor);
        },
        function() {
            $(this).css('background-color', initialColor);
        }
    );
	
    // 2. Effect: On click hiding sold out element from list 
    $('#tour ul li span.w3-red').on('click', function() {
        $(this).parent().slideUp(200);
    });
	
    // 3. Effect: Change of image size on mouse hover
    $('#band .w3-third img').hover(
        function() {
            $(this).stop().animate({
                'width': '100%' 
            }, 300); 
        },
        function() {
            $(this).stop().animate({
                'width': '60%' 
            }, 300);
        }
    );
	
    // Animation: Button color change animation
    const highlightClass = 'highlight'; 
    const holdTime = 1000;

    const buttons = [
        $('#nyCard button'),
        $('#parisCard button'),
        $('#sfCard button')
    ];
    let currentIndex = 0; 

    function sequentialButtonHighlight() {
        buttons[currentIndex].addClass(highlightClass);

        setTimeout(() => {
            buttons[currentIndex].removeClass(highlightClass);
            
            currentIndex = (currentIndex + 1) % buttons.length; 

            sequentialButtonHighlight();
        }, holdTime);
    }

    sequentialButtonHighlight();

});