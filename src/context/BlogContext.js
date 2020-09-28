import React from 'react';

const BlogContext = React.createContext();
export const BlogProvider = ({children}) => {
    const blogPosts = [
        { title:'BlogPost #1' },
        { title:'BlogPost #2' },
        { title:'BlogPost #3' },


    ];
    return <BlogContext.Provider value={[1,2,3]}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;