/* Is this file used anywhere? */

const utils = {
  /**
   * Get nested object values
   */
  getNested: (object, ...keys) => {
    return keys.reduce((a, b) => (a || {})[b], object) !== undefined
  }
}

export default utils
