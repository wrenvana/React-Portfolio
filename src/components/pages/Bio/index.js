import React from "react";

// TODO: Write bio and check formatting.

export default function Bio() {
    return (
        <div>
            <div className="p-5 text-center bg-light">
                <h1 class="mb-3">About</h1>
            </div>


            <div className="clearfix">
                <img src="public/assets/profile-2.jpg" className="col-md-6 float-md-end mb-3 ms-md-3" alt="Profile Picture" />

                <p>
                    Wren Sanchez is an aspiring programmer.
                </p>

                <p>
                    Coming from a background in the veterinary industry, Wren decided to pursue a tech career to be able to put her passion for animals into volunteer work and be able to pursue her passion for technology along with it.
                </p>

                <p>
                    Outside of her work with coding and animals, Wren enjoys hiking, swimming, art, and reading.
                </p>

            </div>
        </div>
    );
}