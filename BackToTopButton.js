import React,{useState} from 'react'

const BackToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500){
          setVisible(true)
        } 
        else if (scrolled <= 500){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
      
  return (
    <>
     <button id="back-to-top" type="button" onClick={scrollToTop}  className="btn btn-primary text-light rounded-circle btn-lg back-to-top" style={{display: visible ? 'inline' : 'none'}} title="Back on top">
        <i className="fas fa-angle-up"></i>
    </button>
    </>
  )
}

export default BackToTop;
