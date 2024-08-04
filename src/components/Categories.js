import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    'key': 'all',
                    'name': 'All'
                },
                {
                    'key': 'cloth',
                    'name': 'Cloth'
                },
                {
                    'key': 'boots',
                    'name': 'Boots'
                },
                {
                    'key': 'backpacks',
                    'name': 'Backpacks'
                },
                {
                    'key': 'tents',
                    'name': 'Tents'
                },
                {
                    'key': 'things',
                    'name': 'Useful things'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories;