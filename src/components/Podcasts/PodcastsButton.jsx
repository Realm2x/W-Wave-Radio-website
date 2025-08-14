import { motion } from 'framer-motion';
import { buttonAnimation } from './animations';

export const PodcastsButton = ({ onClick, label, count }) => (
  <motion.button
    className="podcasts__btn btn btn-reset"
    onClick={onClick}
    {...buttonAnimation}
  >
    {label} {count && `(${count})`}
  </motion.button>
);