import React from 'react';
import WheelComponent from './../../components/wheel';
import './index.css';

const Home = () => {
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ]
  const getSliceColor = () => {
    let hue = [];
    let color = '';
    for (let index = 0; index < segments.length; index++) {
      color = (360 / segments.length) * index;
      hue = [...hue, `hsl(${color}, 95%, 45%)`]
    }
    return hue;
  };
  const onFinished = (winner) => {
    console.log(winner)
  }
  
  return (
    <div>
      <h1 className='text-center'>Wheel of Name</h1>
      <WheelComponent
        segments={segments}
        segColors={getSliceColor()}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={240}
        upDuration={100}
        downDuration={1000}
      />
    </div>
  );
};

export default Home;