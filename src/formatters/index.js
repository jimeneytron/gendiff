import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const getFormat = (format) => {
  switch (format) {
    case 'stylish':
      return stylish;
    case 'plain':
      return plain;
    case 'json':
      return json;
    default:
      throw new TypeError(`Incorrect format - '${format}'`);
  }
};

export default getFormat;
