import React, {useState} from 'react';

const BtnUp = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)

    return (         
        <div className={(showScroll) ? "btn_up active" : "btn_up"}>
            <span className="fas fa-arrow-circle-up fa-3x" onClick={scrollTop}></span>
        </div>
     );
}
 
export default BtnUp;