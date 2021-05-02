# Tools, Techniques, Skills are in use 使用到的工具, 技術, 技巧
* HTML, CSS
* React: component, hooks, router, axios
* Redux: store, reducers, actions
* Node.js, Express
* MongoDB
* Development Tools: VSCode, github

# How to run 如何使用
1. Download project 
```
git clone https://github.com/hunting945/amazon-app-mongodb
```
2. Setup local MongoDB
* Install MongoDB: https://www.mongodb.com/try/download/community
* Create .env file in project folder
* Set MONGODB_URL
``` 
MONGODB_URL=mongodb://localhost/amazon-app-mongodb 
```


3. Install backend packages and run app
```
npm install
cd backend/
npm start
```
4. Install frontend packages and run app
```
cd frontend/
npm install
npm start
```
# Developement steps 開發步驟
### Step1: setup backend project
* init project
```
npm init
npm install express
```
* install babel and add .babelrc file in folder
```
npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
```
```
{
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
}
```
* create product models in data.js as below
```
{
    _id: '1',
    name: 'Slim Shirt',
    category: 'Shirts',
    image: '/images/d1.jpg',
    price: 60,
    brand: ' Nike',
    rating: 4.5,
    numReviews: 10,
    countInStock: 6,
}
```
* add restful api for getting product info
```
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
```
### Step2: 