import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Label Search:</label>
                        <input type="text" onChange={this.onInputChange} ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;