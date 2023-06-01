import "../styles/banner.css"


const Banner = (props) => {
        let title = props.data
        
      

    
    return ( 
        <div className="banner d-flex align-items-center justify-content-center"  >
            <h1 className="text-light text-center fs-1 fw-bolder">{title}</h1>
            
            


        </div>
     );
}
 
export default Banner ;