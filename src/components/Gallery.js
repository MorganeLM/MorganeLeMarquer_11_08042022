import { useState } from 'react';
import '../styles/Gallery.css';

function Gallery(props) {
    //const allImageSrc = [props.cover, ...props.pictures];
    const allImageSrc = [ ...props.pictures]
    const indexMax = allImageSrc.length - 1;
    const areAtLeastTwoImages = indexMax > 0 ? true : false;
    let imageIndex = localStorage.getItem('index') || 0;
    localStorage.setItem('index', 0);
    const [imageSrc, changeImage] = useState(allImageSrc[imageIndex]);

    function previousImage(){
        if(imageIndex > 0){
            imageIndex--;
        }
        else{
            imageIndex = indexMax;
        }
        localStorage.setItem('index', imageIndex);
        changeImage(allImageSrc[imageIndex])
    }

    function nextImage(){
        if(imageIndex < indexMax){
            imageIndex++;
        }
        else{
            imageIndex = 0;
        }
        localStorage.setItem('index', imageIndex);
        changeImage(allImageSrc[imageIndex])
    }


   return (
            <div className="gallery">
                <img src={imageSrc} alt=''/>
                {areAtLeastTwoImages && (
                    <span className='gallery-counter'>{Number(imageIndex)+1}/{indexMax+1}</span>
                )}
                {areAtLeastTwoImages && (
                    <span className='gallery-nav gallery-nav-left' onClick={() => previousImage()}>
                        <i className="las la-angle-left"></i>
                    </span>
                )}
                {areAtLeastTwoImages && (
                    <span className='gallery-nav gallery-nav-right' onClick={() => nextImage()}>
                        <i className="las la-angle-right"></i>
                    </span>
                )}
            </div>
    );
  }
  
  export default Gallery;