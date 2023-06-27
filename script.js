document.addEventListener('DOMContentLoaded', (event) => {
    let expandedImg = null;
    let gifs = document.querySelectorAll('.project-gif:not(.no-zoom)');

    gifs.forEach(gif => {
        gif.addEventListener('click', function(e) {
            if(expandedImg) {
                expandedImg.classList.remove('expanded-img');
            }

            if(expandedImg !== this) {
                this.classList.add('expanded-img');
                expandedImg = this;
            } else {
                expandedImg = null;
            }
            
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        if(expandedImg) {
            expandedImg.classList.remove('expanded-img');
            expandedImg = null;
        }
    });
});
