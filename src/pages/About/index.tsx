import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';
import { teamMembers } from './teamData';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MissionSection />
        <TeamSection members={teamMembers} />
      </div>
    </motion.div>
  );
}