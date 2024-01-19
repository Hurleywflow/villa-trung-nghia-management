'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Links from './Links';
import ToggleButton from './toggleButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const variants = {
  open: {
    clipPath: 'circle(2000px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    //todo right hand side
    // clipPath: 'circle(30px at 350px 50px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <motion.div
      className='flex flex-col items-center justify-center md:hidden'
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        className='w-[min(100%,200px)] fixed bottom-0 left-0 top-0 z-50 flex items-center justify-center bg-[#03001417] backdrop-blur-md '
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
      {/* right hand side */}
      {/* <motion.div
				className='fixed w-[min(100%,200px)] backdrop-blur-md bottom-0 z-50 top-0 right-0 flex items-center justify-center '
				variants={variants}
			>
				<ToggleButton setOpen={setOpen} />
			</motion.div> */}
    </motion.div>
  );
};
export default Sidebar;
