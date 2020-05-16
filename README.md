# Build a full stack application using firebase for backend APIs

## TODO 

[ ]Admin-panel

* [x] User
    * [x] Sign in
    * Sign up
    * Log out - fix TypeError: Cannot read property 'loading' of null

*   [x]Products
    * [x] Add new product feature 
            * [x] solve image upload bug
            * [x]  handle validation errors
            * [x]  add modal after action completion
            * [x]  add category field
                * [x]  Fields
                    * [x]  Title
                    * [x]  Item Number
                    * [x]  Brand
                    * [x]  Price
                    * [x]  Currency
                    * [x]  Material
                    * [x]  Weight
                    * [x]  Weight m.u.
                    * [x]  Description
                    * [x]  Category
                    * [x]  Created At
   
        * [x] Add edit product feature
            * [x]  handle image edit
            * [x]  add modal after product edit
            * [x]  validate new inputs
        * [x]  Add view product feature
            * [x]  Delete product feature
            * [x]  Delete image when deleting a product
            * [x]  add a modal after product delete

    * [x] Categories 
        * [x]  New Category
        * [x]  Edit Category
        * [x]  List Categories
        * [x]  Delete Category
        * [x]  View Category
    * [x]  Orders
        * [x]  Fields 
            {
                uid, 
                products: [
                    {productid, quantity}
                ],
                deliveryAddress, 
                billingAddress,
                comments,
                createdAt
            }
        * [x]  Display all orders
        * [x]  View order
        * [x] Mark order as shipped
    * [x]  Home page 
        * [x]  Layout
    * [x]  Users
        * [x]  users
        * [x]  view user
        * [x]  delete user
    * [x] Pagination Component and functionality
    * [ ] sort
    * [ ] add responsiveness
    * [ ] format dates 
    * [ ] add filters 
    * [ ] add sort

* [ ] Firebase functions
    [x] Users functions
    [x] Products functions
    [x] Categories functions
    [x] Orders functions
    [ ] Check for duplicate products

* [ ] View 
    * [ ] Header
        * [ ] implement a dropdown menu for user options
    * [ ] Home page
    * [ ] Category
        * [ ] Category page 
        * [ ] Category item
    * [ ] Product 
        * [ ] Product item 
        * [ ] Product page 
    * [ ] Cart
        * [ ] Cart page
    
    * [ ]Favourites 

    * [ ] About 

    * [ ] Terms and conditions

    * [ ] Search 

    * [ ] Store
        * [ ] Products
        * [ ] Users 