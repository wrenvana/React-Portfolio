import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>

                    <a className='btn btn-outline-light btn-floating m-1' href='mailto:rensanchez00@gmail.com' role='button'>
                        <MDBIcon fab icon='envelope' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/wrenvana/' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/wrenvana' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                </section>
            </MDBContainer>

        </MDBFooter>
    );
}