import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="course">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">Empower Your Journey, <br /> Master the Skills with IMPORT Courses.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={blog01} date="June 04, 2023" text="PROGRAMMING & COMPUTER SCIENCE Courses starting this month" />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="June 04, 2023" text="Desarrollador de front-end de Meta" />
                <Article imgUrl={blog03} date="June 04, 2023" text="How to become a software engineer after 12 th" />
                <Article imgUrl={blog04} date="June 04, 2023" text="The complete Node.js developer course" />
                <Article imgUrl={blog05} date="June 04, 2023" text="LeetCode's Interview Crash Course" />
            </div>
        </div>
    </div>
);

export default Blog;
