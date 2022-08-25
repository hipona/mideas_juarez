import React from 'react'
import {MDBCarousel,MDBCarouselInner,MDBCarouselItem,MDBCarouselElement,MDBCarouselCaption,} from 'mdb-react-ui-kit';
const Home = () => {
  return (
    <MDBCarousel showIndicators showControls fade className='mt-3'>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://d2r9epyceweg5n.cloudfront.net/stores/001/735/824/themes/idea/1-slide-1657825815707-7018462288-c6e1287423285192713f24ffff6967811657825847-1400-1400.webp?1396088078 1400w' alt='...' />
          <MDBCarouselCaption>
            <h4>Obetos Diseñados para ser utilizados, todos los dias</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://d2r9epyceweg5n.cloudfront.net/stores/001/735/824/themes/idea/1-slide-1657825815707-1675203092-1dc8f913e306da1ed950861f7e335b021657825848-1400-1400.webp?1396088078 1400w' alt='...' />
          <MDBCarouselCaption>
            <h4>Obetos Diseñados para ser utilizados, todos los dias</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://d2r9epyceweg5n.cloudfront.net/stores/001/735/824/themes/idea/1-slide-1657825815707-6679447534-3fbb327c337642cf184a345e9a49f34f1657825850-1400-1400.webp?1396088078 1400w' alt='...' />
          <MDBCarouselCaption>
            <h4>Obetos Diseñados para ser utilizados, todos los dias</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default Home