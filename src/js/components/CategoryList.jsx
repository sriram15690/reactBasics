import React, { Component } from 'react';
class CategoryList extends Component {

  render() {
    const categories = this.props.categories;

    if (categories.length !== 0) {
      return (
        <div>
          <h3>Category</h3>
          <ul>
            {categories.map(category => {
              return <li onClick={this.props.handleCategoryList} key={category.id}>{category.name} </li>;
            })}
          </ul>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default CategoryList;
