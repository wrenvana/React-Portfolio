// Needs completing

import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Portfolio() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard>
                    {/* TODO: Add screenshot */}
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                        alt='Recipe Planner App Screenshot'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://wrenvana.github.io/home-cooking-app-project-1/">Everything but the Kitchen Sink</a></MDBCardTitle>
                        <MDBCardText>
                            My team's goal with this project was to create an application where users can find recipes using the ingredients they have in their kitchen.​ Users will be able to specify what type of meal they are cooking and then select ingredients that they would like to use in a recipe.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    {/* TODO: Add screenshot */}
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                        alt='Inventory Management App Screenshot'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://dry-caverns-71259.herokuapp.com/">Shopkeep</a></MDBCardTitle>
                        <MDBCardText>
                            Shopkeep's purpose is to help businesses manage their inventory. The app will help them keep track of their stock and update it more efficiently.​
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    {/* TODO: Add screenshot */}
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                        alt='SQL Employee Tracker Screenshot'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://github.com/wrenvana/Employee-Tracker">Employee Tracker</a></MDBCardTitle>
                        <MDBCardText>
                            This application uses SQL to allow the user to generate tables displaying their company's employees, departments, and roles. The user will be able to add to the tables and update employee roles.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    {/* TODO: Add link once it is deployed and screenshot */}
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='Band Tracking Page Screenshot'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://git.heroku.com/radiant-chamber-41757.git">Fan Task Tic</a></MDBCardTitle>
                        <MDBCardText>
                            This application allows users to follow along with their favorite bands. They will be able to stream music, search merchandise and band events, and earn rewards for purchases and sharing band related posts on social media.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}