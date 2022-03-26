import React,{useState} from 'react';

const Algo = () => {
    const [apel,getApel]= useState("a");

    const cargar  =  (e,vln ) => {
        e.preventDefault();
        console.log(apel);
        // output: a //* Sale el valor inicial = OK
        getApel(vln);
        console.log(apel);
        // output: a //? Porque no sale el texto "cc"
    };

    return ( 
        <a href="https://github.com/" onClick={(e) => cargar(e,"cc")}>dale</a>
     );
}
 
export default Algo;