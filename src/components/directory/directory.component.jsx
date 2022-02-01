import React from 'react';
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-items/menu-items.component';

import './directory.styles.scss';

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}
        </div>
    )
};    

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
export default Directory;