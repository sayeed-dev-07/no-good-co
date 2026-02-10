import React from 'react';

const page = async({params}: {params: Promise<{name: string}>}) => {
    const {name} = await params;
    return (
        <div></div>
    );
};

export default page;