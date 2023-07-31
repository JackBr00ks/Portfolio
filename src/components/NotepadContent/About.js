import React from 'react';

function About({ content }) {
    const { paragraphs } = content;
    const imageSrc = `${process.env.PUBLIC_URL}/ski_pic.jpg`;

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flexGrow: 1, marginRight: '-100px', marginTop: '20px' }}> 
                <h2>About</h2>
                {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
            <div>
                <img
                    src={imageSrc}
                    alt=""
                    style={{
                        width: '120px',         
                        height: '100px',        
                        borderRadius: '50%',   
                    }}
                />
            </div>
        </div>
    );
}

export default About;
