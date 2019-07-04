import React from 'react';

import './Note.less'

const Note = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };
        return (
            <div className = 'Note' style = {style}>
                <span className = 'Note__del_icon' onClick = {this.props.onDelete}> x </span>
                {
                    this.props.title ? <h4 className = 'Note__title'>{this.props.title}</h4> : null
                }
                <div className = 'Note_text'>{this.props.children}</div>
            </div>
        );
    }
});

export default Note;