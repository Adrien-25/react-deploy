import React from 'react';
import FullPage,{ FullPageSections,FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

const FullPageScroll = () => {
    const SectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <FullPage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style={{SectionStyle}}>
                    <h1>Présentation</h1>
                </FullpageSection> 
                <FullpageSection style={{SectionStyle}}>
                    <h1>Projets</h1>
                </FullpageSection> 
                <FullpageSection style={{SectionStyle}}>
                    <h1>Qui suis-je ?</h1>
                </FullpageSection> 
                <FullpageSection style={{SectionStyle}}>
                    <h1>Contact</h1>
                </FullpageSection>  
            </FullPageSections>
        </FullPage>
    );
};

export default FullPageScroll;