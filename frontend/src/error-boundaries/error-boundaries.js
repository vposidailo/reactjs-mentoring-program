import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        error: null, 
      };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      console.log(error);
      this.setState({error: error});
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }