import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
const Account = () => {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Account', link: '/account' },
  ];
  return (
    <div className='account'>
 <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="banner" >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: '-10%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-10%' }}
              transition={{ duration: 1.2 }}
            >Account</motion.h1>
            <BreadCrumb items={breadcrumbItems} />
          </div>
        </motion.div>
    </div>
  )
}

export default Account