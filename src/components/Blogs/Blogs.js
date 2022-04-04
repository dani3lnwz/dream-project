import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>What is Context API?</h2>
            <p className='text-2xl font-serif'>Its a one Kind of new feature,that added in version 16.3 of React.It allows one to share state across the entire app lightly and with ease.This is the alternative to prop drilling or moving props from grandparent to child parent.For context api you all need just React.createContext().In a word we can say that- The Context API is a react structure,that help us to exchange unique details and also assists in solving prop-drilling from all levels of our application.</p>
            <h2 className='text-4xl font-bold'>What is Symantec tag?</h2>
            <p className='text-2xl font-serif'>It is a  Symantec HTML elements,that clearly describe their meaning in a human and also machine readable way.At First we can say that - it is much easier to read.Its a one kind of a small example,like as a programmer it's really hard  to reading through hundreds or thousands of lines of code.By using Symantec teg easy to read and understand the code. Symantec markup is HTML that introduces meaning to the web pages rather than just presentation.There are many symantec tag's like:header,nav,section,article,main, aside,footer etc.</p>
        </div>
    );
};

export default Blogs;