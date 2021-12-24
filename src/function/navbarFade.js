import { useEffect, useState, useRef } from "react";

const FadeIn = () => {
    const element = useRef();

    useEffect(()=> {
        if(element.current) {
            const {current} = element;
            current.style.top = "0";
            setTimeout(()=>{
                current.style.background = "#fff";
            }, 2000);
        }
    }, []);

    return {ref: element, style: {background: "#0071e3", top: "-3em"}};
}

export default FadeIn;