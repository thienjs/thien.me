import React, { FC, useContext } from "react";
import DomainContext from "./DomainContext";
import Icon from "./Icon";
import { motion, Variants, AnimatePresence } from "framer-motion";

type Props = {
  selected: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { default: { duration: 1 } } },
};

const skillsContainer = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const DomainSkills: FC<Props> = ({ selected }) => {
  const { skills } = useContext(DomainContext).byId[selected];
  return (
    <motion.div className="flex flex-col border-2 rounded-sm border-black border-t-0 py-2">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selected}
          variants={skillsContainer}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {skills.map((skill) => (
            <motion.div
              className="flex flex-row p-1 ml-2"
              key={skill.name}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <h3 className="capitalize w-20 mr-1">{skill.name}</h3>
              <motion.div className="flex" variants={container}>
                {[...Array(5)].map((_, key) => (
                  <motion.div key={key} className="self-center" variants={item}>
                    <Icon
                      icon={
                        key + 1 <= skill.stars ? "circleFill" : "circleEmpty"
                      }
                      size="10"
                      className="mr-2"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DomainSkills;