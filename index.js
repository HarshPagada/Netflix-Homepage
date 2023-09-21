    function toggleContentVisibility(contentId) {
        let newBox = document.getElementById(contentId);
        if (newBox.style.display === 'none' || newBox.style.display === '') {
            newBox.style.display = 'block';
        } else {
            newBox.style.display = 'none';
        }
    }
    
    document.getElementById('para1').addEventListener('click', function() {
        toggleContentVisibility('content1');
    });
    
    document.getElementById('para2').addEventListener('click', function() {
        toggleContentVisibility('content2');
    });
    
    document.getElementById('para3').addEventListener('click', function() {
        toggleContentVisibility('content3');
    });
    
    document.getElementById('para4').addEventListener('click', function() {
        toggleContentVisibility('content4');
    });
    
    document.getElementById('para5').addEventListener('click', function() {
        toggleContentVisibility('content5');
    });
    
    document.getElementById('para6').addEventListener('click', function() {
        toggleContentVisibility('content6');
    });
    