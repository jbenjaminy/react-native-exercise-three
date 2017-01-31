// Data structure is an array of objects, where each individual object
    // represents an individual library.
// By default, the package manager we're using assumes that all file extensions
    // end in '.js'. If we are providing the path to a '.json' or other file, we
    // need to be very explicit with this path.
import data from './library-list.json';

export default () => data;
