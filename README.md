# node-check-status

This script get webpage title to verify avaliability

### Usage

1. Modify `customer.json` and add a string to array, for example: `https://customer1.com`
2. Execute `npm start` and that's it!

#### Example
```customer.json
[
"https://customer1.com ",
"https://customer2.com",
"https://customer3.com",
]
```
Response
```
[ UP   ] https://customer1.com | Test
[ UP   ] https://customer2.com | Portal
[ DOWN ] https://customer3.com | 
```

Daniel Naranjo. 
March 2022