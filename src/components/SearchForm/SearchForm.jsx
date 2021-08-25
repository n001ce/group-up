import React, { Component } from 'react'

import SearchBar from './SearchBar';

class Search extends Component {
  state = {
    invalidForm: true,
		formData: {
      query: '',
      type: "games",
		},
  }
  
	formRef = React.createRef();

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value}
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = e => {
		e.preventDefault();
    if(this.state.formData.type === 'games'){
      this.props.history.push(`/search/games/${this.state.formData.query}`)
    }else{
      this.props.history.push(`/search/streams/${this.state.formData.query}`)
    }
  };
  
  render() {
    return (
      <>
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >
      <SearchBar state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </form>
      </>
    )
  }
}

export default Search