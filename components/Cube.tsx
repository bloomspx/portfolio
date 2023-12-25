import { motion } from 'framer-motion';

interface CubeProps {
  id: number;
  top?: number;
  left?: number;
  bot?: number;
  right?: number;
  rotation: number;
  animate: any;
  size: string;
  position: 'top' | 'bot';
}

const Cube: React.FC<CubeProps> = ({
  id,
  top,
  left,
  bot,
  right,
  rotation,
  animate,
  size,
  position,
}) => {

  let cubeTop = top;
  let cubeLeft = left;

  if (position === 'bot') {
    cubeTop = undefined;
    cubeLeft = undefined;
  }

  return (
    <motion.div 
      className="rounded-md bg-gradient-to-b from-salmon to-white"
      style={{
        position: 'absolute',
        top: cubeTop,
        left: cubeLeft,
        bottom: bot,
        right: right,
        rotate: rotation,
        width: size,
        height: size,
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
      }}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1,
        duration: 2,
      }}
      animate={animate}
    />
  );
};

export default Cube;