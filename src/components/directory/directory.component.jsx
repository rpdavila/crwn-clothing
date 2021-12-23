import React from 'react';
import MenuItem from '../menu-items/menu-items.component';
import { sections } from './directory.data';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section: sections
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {this.state.section.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;