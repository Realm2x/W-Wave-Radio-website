import { useEffect, useRef } from 'react';
import Choices from 'choices.js';

export const useChoices = () => {
  const selectRef = useRef(null);
  const choicesRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      choicesRef.current = new Choices(selectRef.current, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        classNames: {
          containerInner: ['choices__inner', 'custom-choices-inner'],
          input: ['choices__input', 'custom-choices-input'],
        }
      });

      return () => {
        choicesRef.current?.destroy();
      };
    }
  }, []);

  return selectRef;
};