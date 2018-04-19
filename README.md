# reactBasics
To teach React basics.

Commands:
```
Run server: node run dev-server
DB Server: node run db-server
To Chnage port num: yarn run dev-server --port 4000
visit [link] (https://react-app-basics.herokuapp.com/) for app
```
Visit [React-Webapp](https://react-app-basics.herokuapp.com/)

### Adding Click event & passing down:
Step1: In app.js define handleCategoryClick
Step 2: pass the handleer to category
Step 3: attach the handler to category item
Step 3 code: 
<li onClick={this.props.handleCategoryClick} key={category.id}>{category.name} </li>;

step 4: when you click category <li>, you are actually calling a handler on handler in appjs
Step 5: in the handler, change state of showProductCategoryList to true/false

Step 6: Based on state, display productCategoryList