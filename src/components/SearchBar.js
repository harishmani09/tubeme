import './SearchBar.css';
import React from 'react';



class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange = (event) => {
        
        this.setState({term: event.target.value})
        
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

    };

    render () {
    return (
        <div className=' search-bar ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'> 
            <label className='ui label'> Video Search: </label>    
            <input onChange={this.onInputChange} value= {this.state.term} className='ui input' type='text' />
                
            <button className='ui primary button' id='search' >
                Search
            </button>    
            </div>

            </form>
            
        </div>
    );
    };
};

export default SearchBar
