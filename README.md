# Project: Vanilla NodeJs API
[Visit this link to see the a better documentaion of this](https://documenter.getpostman.com/view/26642367/2s93RTSYpk#5f01fb7b-d100-406f-9249-25a3e62fcd13)
This is a Vanilla NodeJS API that I made to understand the basic of what does Frameworks like express do under the hood to manage RESTful processes.

## End-point: /api/products
## GET

_**Route:**_ `/api/products/`

For this project a set of 5 products is used, the **GET** request just ask the server to callback all the information that is stored in the JSON file used for the project.
### Method: GET
>```
>http://localhost:5000/api/products
>```
### Response: 200
```json
[
    {
        "id": "1",
        "name": "Airpods Wireless Bluetooth Headphones",
        "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
        "price": 89.99
    },
    {
        "id": "2",
        "name": "iPhone 11 Pro 256GB Memory",
        "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
        "price": 599.99
    },
    {
        "id": "3",
        "name": "Cannon EOS 80D DSLR Camera",
        "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
        "price": 929.99
    },
    {
        "id": "4",
        "name": "Sony Playstation 4 Pro White Version",
        "description": "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
        "price": 399.99
    },
    {
        "id": "5",
        "name": "Logitech G-Series Gaming Mouse",
        "description": "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        "price": 49.99
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products/:id
_**Route:**_ `/api/products/:id`

Requesting single data takes in cosiderention the ID of that data, in the route, ID of that specific data to should be specified.

In the following request, the product with **id:1** is requested.
### Method: GET
>```
>http://localhost:5000/api/products/1
>```
### Response: 200
```json
{
    "id": "1",
    "name": "Airpods Wireless Bluetooth Headphones",
    "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    "price": 89.99
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products
_**Route:**_ `/api/products/`

Posting a new data should follow the properties used in the JSON file, you can add everything, or can just a a single product with a single property.

A random ID is generated with [uuid v4](https://www.npmjs.com/package/uuid), so ID input is not needed, added data is always added at the end of the database.
### Method: POST
>```
>http://localhost:5000/api/products
>```
### Body (**raw**)

```json
{
    "title": "Test product from body",
    "description": "This a product test from body",
    "price": "None"
}
```

### Response: 200
```json
[
    {
        "id": "1",
        "name": "Airpods Wireless Bluetooth Headphones",
        "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
        "price": 89.99
    },
    {
        "id": "2",
        "name": "iPhone 11 Pro 256GB Memory",
        "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
        "price": 599.99
    },
    {
        "id": "3",
        "name": "Cannon EOS 80D DSLR Camera",
        "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
        "price": 929.99
    },
    {
        "id": "4",
        "name": "Sony Playstation 4 Pro White Version",
        "description": "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
        "price": 399.99
    },
    {
        "id": "5",
        "name": "Logitech G-Series Gaming Mouse",
        "description": "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        "price": 49.99
    },
    {
        "id": "5df4b457-cbcc-4958-9a49-095f4d12cc8c",
        "title": "Test product from body",
        "description": "This a product test from body",
        "price": "None"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products/:id
_**Route:**_ `/api/products/:id`

Updating a data property requires the ID of it, by requesting an upadte, properties with newer data should be introduced in the body, in this case, this is how it would look an updated title for the product "_5df4b457-cbcc-4958-9a49-095f4d12cc8c_", generated before by the **POST request** example.

Updated data is returned.
### Method: PUT
>```
>http://localhost:5000/api/products/5df4b457-cbcc-4958-9a49-095f4d12cc8c
>```
### Body (**raw**)

```json
{
    "title": "Updated Product Title"
  }
```

### Response: 200
```json
{
    "id": "5df4b457-cbcc-4958-9a49-095f4d12cc8c",
    "title": "Updated Product Title",
    "description": "This a product test from body",
    "price": "None"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products/:id
_**Route:**_ `/api/products/:id`

Deleting a data, requires the data ID of the product, this method is as simple as going to the route "api/products/**:id**" and make a DELETE request.

Message saying that this element was sucessfully removed is returned.
### Method: DELETE
>```
>http://localhost:5000/api/products/5df4b457-cbcc-4958-9a49-095f4d12cc8c
>```
### Response: 200
```json
{
    "message": "Product of id(5df4b457-cbcc-4958-9a49-095f4d12cc8c) was sucessfully removed."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
