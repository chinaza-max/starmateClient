import React from 'react'
import "./Price.css"
import AnimatedText from 'react-animated-text-content';
import TextAnimation from "react-text-animations";

export default function Price() {
  return (
    <div className='Price'>
        <ul>
            <li>
                <h2>
                    <span>
                        
                        <TextAnimation.Slide target="5" text={['5', '10', '15']}  animation={{
                            duration:3000,
                            delay:5000,
                            timingFunction:'ease-out',
                        }}>
                        5
                        </TextAnimation.Slide>
                    </span>
                </h2>
            </li>
            <li>
                <h3>
                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '10px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="diagonal"
                        interval={0.06}
                        duration={2}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                        >
                        Deep cleaning : 
                    </AnimatedText>
                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '10px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="diagonal"
                        interval={0.06}
                        duration={2}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                        >
                        Bedroom Apartment 
                    </AnimatedText>
                    <small className='small'>From</small> <span className='amount'>
                        
                        
                         <TextAnimation.Slide target="1000" text={['1000', '1500', '2000']}  animation={{
                            duration:3000,
                            delay:5000,
                            timingFunction:'ease-out',
                        }}>
                         NGN 1000
                        </TextAnimation.Slide>
                    </span>
                </h3>   
            </li>
        </ul>
    </div>
  )
}
