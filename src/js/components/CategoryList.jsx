import React, { Component } from 'react';
class CategoryList extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    this.props.handleCategoryList(id);
  }
  render() {
    const categories = this.props.categories;

    if (categories.length !== 0) {
      return (
        <div>
          <h3>Category</h3>
          <ul>
            {categories.map(category => {
              return <li onClick={this.props.handleCategoryList.bind(this, category.name)} key={category.id}>{category.name} </li>;
              // below is another way of handling prop methods which needs arguments
              //return <li onClick={this.handleClick.bind(this, category.name)} key={category.id}>{category.name} </li>;
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
