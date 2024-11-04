import AnimatedCursor from "react-animated-cursor" 
// import React, { useEffect, useState } from 'react';

const CursorTrail = () => {

    return (
        <div className="App">
        <AnimatedCursor
          innerSize={8}
          outerSize={16}
          color='144, 238, 144'
          outerAlpha={0.2}
          innerScale={0.8}
          outerScale={5}
          clickables={[
            'a',
            'span',
            'h1','h2','p','strong',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            // {
            //   target: '.custom',
            //   options: {
            //     innerSize: 12,
            //     outerSize: 12,
            //     color: '255, 255, 255',
            //     outerAlpha: 0.3,
            //     innerScale: 0.7,
            //     outerScale: 5
            //   }
            // }
            {
                target: '.highlight-text',
                options: {
                  innerSize: 20,
                  outerSize: 30,
                  color: '255, 0, 0',  // A noticeable color for highlight
                  outerAlpha: 0.4,
                  innerScale: 0.7,
                  outerScale: 5
                }
              }
          ]}
        />
        </div>
      );
};

export default CursorTrail;