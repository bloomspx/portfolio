import Cube from './Cube';

const BackgroundCubes = () => {

    const animateLeft = {
        x: [-50, 25, 0],
        y: [0, -50, 25],
    }

    const animateRight = {
        x: [0, -50, 25],
        y: [-50, 0, 25],
    }
    
    const cubesTop = [
        { id: 1, top: 50, left: 100, rotation: 45, size: '1rem', animate:animateLeft },
        { id: 2, top: 200, left: 300, rotation: 135, size: '1.5rem', animate:animateLeft },
        { id: 3, top: 150, left: 600, rotation: 120, size: '2rem', animate:animateLeft},
        { id: 4, top: 550, left: 150, rotation: 190, size: '2.5rem', animate:animateRight },
        { id: 5, top: 50, left: 900, rotation: 250, size: '1.25rem', animate:animateRight },
    ];
    const cubesBot = [
        { id: 6, bot: 50, right: 100, rotation: 45, size: '1rem', animate:animateRight },
        { id: 7, bot: 200, right: 300, rotation: 315, size: '1.5rem', animate:animateRight },
        { id: 8, bot: 150, right: 600, rotation: 90, size: '2rem', animate:animateRight },
        { id: 9, bot: 550, right: 150, rotation: 10, size: '2.5rem', animate:animateLeft },
        { id: 10, bot: 50, right: 900, rotation: 70, size: '1.25rem', animate:animateLeft },
    ]

    return (
        <>
          {cubesTop.map((cube) => (
            <Cube key={cube.id} 
                position="top"
                {...cube} />
          ))}
          {cubesBot.map((cube) => (
            <Cube key={cube.id} 
                position="bot" 
                {...cube} />
          ))}
        </>
      );
};


export default BackgroundCubes;