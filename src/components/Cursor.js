import React, { useEffect, useRef } from 'react';
import { StyledCursor } from './Cursor.style';

function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() =>{
        // custom mouse
        function getMouseCord(e){
            // dividing by 2 to center the cursor to div
            //use pageX/Y when website has scroll
            const mouseX = e.pageX - cursorRef.current.clientWidth / 2;
            const mouseY = e.pageY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }

        document.addEventListener("mousemove", getMouseCord);
    }, []);

    return (
        <StyledCursor ref={cursorRef} />
    )
}

export default Cursor
