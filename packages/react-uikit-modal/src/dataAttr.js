'use strict';

const dataAttr = {

  /**
   * Gets a list of DOM nodes matching a data atrribute value
   * @param  {string} value  - atrribute value
   * @return {nodes}          - list of DOM nodes
   */
  selectorAll: (value) => {
    return document.querySelectorAll(`[data-kitid="${value}"]`);
  },

  /**
   * Gets the first DOM node matching a data atrribute value
   * @param  {string} value  - Array to be filtered
   * @return {dom}     - unique time-based id
   */
  selector: (value) => {
    return document.querySelector(`[data-kitid="${value}"]`);
  }
};

export default dataAttr;
