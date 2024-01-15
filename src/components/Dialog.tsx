import React, { useState } from 'react';

import styles from '../App.module.scss';

const Dialog = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.dialog}>
      {step === 1 && (
        <>
          <button 
            className={styles.dialogButton}
            onClick={() => setStep(2)}
          >
            А ты кто?
          </button>
          <button 
            className={styles.dialogButton}
            onClick={() => setStep(0)}
          >
            Я не приду!
          </button>
        </>
      )}
      {step === 0 && (
        <>
          <img className={styles.image} src="./sad.svg" alt="sad" />
        </>
      )}
      {step === 2 && (
        <>
          <div className={styles.text}>
            34 года, программист, художник, стрэйтэйджер
          </div>
          <button 
            className={styles.dialogButton}
            onClick={() => setStep(0)}
          >
            Всё равно не приду!
          </button>
        </>
      )}
      
    </div>
  );
}

export default Dialog;