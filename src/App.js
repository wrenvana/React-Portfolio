import Nav from './components/Nav';
import Footer from './components/Footer'
import React, { useState } from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
const [currentPage, setCurrentPage] = useState('Home');
function RenderPage({ currentPage }) {
    if(currentPage === 'Home') {
        return < Home/>;}
    if(currentPage === 'Bio') {
        return < Bio/>;}
    if(currentPage === 'Portfolio') {
        return < Portfolio/>;}
    if(currentPage === 'Resume') {
        return < Resume/>;}
    }

const handlePageChange = (page) => setCurrentPage(page);
return (
    <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <RenderPage currentPage={currentPage} />
        <Footer/>
    </div>
);
};

export default App;
