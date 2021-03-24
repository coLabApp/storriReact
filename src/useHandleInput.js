// useHandleInput.js
import { useState, useEffect, useRef } from 'react';
function useHandleInput(initialValue) {
    const [inputData, setInputData] = useState(initialValue);
    
    return {
      handleChange: (e) => { setInputData(e.target.value) },
      value: inputData,
      reset: () => { setInputData('') }
    }
  }
  
  export default useHandleInput;