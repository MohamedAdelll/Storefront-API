# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index `/api/v1/products` [GET]
- Show `/api/v1/products/:id` [GET] (args: product id)
- Delete `/api/v1/products/:id` [GET] (args: product id)
- Create `/api/v1/products` [POST] [token required]
- Products by category` /api/v1/products/category/:category(string)` [GET] (args: product category)

#### Users

- Index `/api/v1/users` [GET] [token required]
- Show `/api/v1/users/:id` [GET] (args: id)[token required]
- Create `/api/v1/users` [POST] (args: User)
- Delete `/api/v1/users/:id` [DELETE] (args: id)[token required]
- Auth `/api/v1/users/auth` [POST]

#### Orders

- Index `/api/v1/orders` [GET] [token required]
- Create `/api/v1/orders/create` [POST] [token required]
- Read `/api/v1/orders/:u_id` [GET] (args: user id) [token required]
- Change status `/api/v1/orders/:id` [PUT] [token required]
- Delete `/api/v1/orders/:id` [DELETE] [token required]
- Active Orders by user `/api/v1/orders/active/:id` [GET] (args: user id)[token required]

## Data Shapes

#### Product

Table: store_products (ALL NOT NULL)

- produt_id: `UUID`
- name: `VARCHAR`
- price: `double`
- [ADDED] category:`VARCHAR`

#### User

Table: store_users (ALL NOT NULL)

- id: `UUID` Primary key
- username: `VARCHAR`
- f_name: `VARCHAR`
- l_name: `VARCHAR`
- u_password: `VARCHAR`

#### Orders

Table: order_product (ALL NOT NULL)

- order_idf: `UUID` Foreign key references order id
- product_idf: `UUID` Foreign key references product id
- product_quantity: integer (NOT NULL)

Table: store_orders

- order_id: `UUID` Primary key order id (NOT NULL)
- user_idf: `UUID` Foreign key references user id
- status: `VARCHAR` (NOT NULL)

## Some expected formats

### User

-Create: Req.body must be in this format

{
"newUser":{
"username":string,
"fName":string,
"lName":string,
"password":string
}
}

## Products

-Create: Req.body must be in this format

{
"name":string,
"price":number,
"category":string
}

## Orders

-Create: Req.body must be in this format

{
"order":{
"userID":UUID,
"status":string,
"products":[{"productID":UUID,"quantity":number}]
}
}
