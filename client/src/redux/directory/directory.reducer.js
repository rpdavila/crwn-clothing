import { sections } from "./sections_data";

const INITIAL_STATE = {
    sections: sections
};


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}; 

export default directoryReducer;