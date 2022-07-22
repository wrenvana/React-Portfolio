import React from 'react';

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Resume() {
    return (
        <MDBCarousel showIndicators showControls>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <MDBCarouselElement src='public/assets/ResumePage1.jpg' alt='Resume Page 1' />
                </MDBCarouselItem>
                <MDBCarouselItem className='active'>
                    <MDBCarouselElement src='public/assets/ResumePage2.jpg' alt='Resume Page 2' />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src='public/assets/ResumePage3.jpg' alt='Resume Page 3' />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src='public/assets/ResumePage4.jpg' alt='Resume Page 4' />
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}