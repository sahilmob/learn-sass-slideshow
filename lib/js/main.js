
    Reveal.addEventListener( 'fragmentshown', function( event ) {
        // event.fragment = the fragment DOM element
        if (event.fragment.id == 'redo-1'){
            event.fragment.classList.add("animated")
            event.fragment.classList.add("rotateIn")
            event.fragment.classList.add("delay-2s")
        }
    } );

    Reveal.addEventListener( 'fragmenthidden', function( event ) {
            // event.fragment = the fragment DOM element
            if (event.fragment.id == 'redo-1'){
                event.fragment.classList.remove("animated")
                event.fragment.classList.remove("rotateIn")
                event.fragment.classList.remove("delay-2s")
            }

    } );
   
