import React, { Component } from 'react';
class CategoryList extends Component {
  render() {
    const categories = this.props.categories;

    if (categories.length !== 0) {
      return (
        <ul>
          {categories.map(category => {
            return <li key={category.id}>{category.name} </li>;
          })}
        </ul>
      );
    } else {
      return '';
    }
  }
}

export default CategoryList;
