import React from 'react';
import Box from '@mui/material/Box';

const About = () => {
    return (
        <>
            <Box height={50} />
            <Box component="div" sx={{ padding: 20 + 'px' }}>
                <Box component="div" >
                    In web development create, read, update, and delete (often referred to via the acronym CRUD) are the four basic operations of persistent storage. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information.
                </Box>
                <Box component="div" pt={3}>
                    In this project, MERN stack technology used. MERN means MongoDB, Express.js, React and NodeJs. MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. React is a free and open-source front-end JavaScript library for building user interfaces based on components. Node.js is a cross-platform, open-source server environment. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
                </Box>
            </Box>
        </>
    )
}

export default About