import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Label Search:</label>
                        <input type="text" value={this.state.term} onChange={e => { this.setState({term: e.target.value}) }}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;