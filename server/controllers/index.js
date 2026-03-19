const express = require('express');
const router = express.Router();

const getPortfolioData = (req, res) => {
    const portfolioData = {
        projects: [
            { title: 'Project 1', description: 'Description of project 1' },
            { title: 'Project 2', description: 'Description of project 2' },
        ],
        resume: {
            education: 'Bachelor of Science in Computer Science',
            experience: '3 years of experience in web development',
        },
        contact: {
            email: 'your-email@example.com',
            phone: '123-456-7890',
        },
    };
    res.json(portfolioData);
};

module.exports = { getPortfolioData };