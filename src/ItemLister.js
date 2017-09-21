import React from 'react';

export default class ItemLister extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        console.log(this.state.items)

         console.log(
          fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson.movies;
            })
            .catch((error) => {
              console.error(error);
            })
          )

         console.log(
          fetch('http://localhost:4000/posts')
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .catch((error) => {
              console.error(error);
            })
          )



        fetch(this.props.apiUrl)
            .then(result => result.json())
            .then(items => this.setState({items}))
    }

    render() {        
        return(
           <ul>
              {this.state.items.map(item => <li key={item.id}>{item.name}</li>)}
           </ul>
        );
    }
}
