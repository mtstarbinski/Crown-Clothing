import React from "react"
import MenuItem from "../Menu-Item/Menu-Item";
import "./Directory.styles.scss"
import { sections } from "../../data/directory.data";

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: sections
        }
    }
    
    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...menuItemProps}) => (
                    <MenuItem key={id} {...menuItemProps} />
                ))}
            </div>
        )
    }
}

export default Directory;