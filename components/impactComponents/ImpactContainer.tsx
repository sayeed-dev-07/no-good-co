import React from 'react';
import ImpactItems from './ImpactItems';

const ImpactContainer = () => {
    return (
        <div className='py-[5%]'>
            <ImpactItems name='programs' index={1}/>
            <ImpactItems name='approach' index={2}/>
            <ImpactItems name='theory' index={3}/>
            <ImpactItems name='testimonials' index={4}/>
        </div>
    );
};

export default ImpactContainer;