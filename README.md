# Aantariksh_challenge


// For Saving Meal

[]: # Title: Save Meal
[]: # Method: POST
[]: # URL: /api/meal
[]: # URL Params: None
[]: # Data Params: {
    "hashtags":["new","love","taste"],
    "foodItems":["6339383ff7f01c75abae4a33","6339383ff7f01c75abae4a34"],
    "userId":"63393aa0f7a74687144415a7"
}
[]: # Success Response: {
    "success": true,
    "mealId": "633947bc1386b255b19cadaa"
}
[]: # Error Response:{
    "error": true,
    "message": $error_message
}

// For Geting Meals for user

[]: # Title: Get Meals
[]: # Method: GET
[]: # URL: /api/meals/:userID
[]: # URL Params: None
[]: # Data Params: None
[]: # Success Response:{
    "success": true,
    "meal": [
        {
            "_id": "633947bc1386b255b19cadaa",
            "hashtags": [
                {
                    "_id": "63392fcac3d5309a03b99838",
                    "name": "new"
                },
                {
                    "_id": "63392fcac3d5309a03b99839",
                    "name": "love"
                },
                {
                    "_id": "6339314324ed981d28c1eb50",
                    "name": "taste"
                }
            ],
            "user": {
                "_id": "63393aa0f7a74687144415a7",
                "name": "Elixir 🤗"
            },
            "foodItems": [
                {
                    "_id": "6339383ff7f01c75abae4a33",
                    "name": "3 Chicken Wings"
                },
                {
                    "_id": "6339383ff7f01c75abae4a34",
                    "name": "Chicken Livers and Portuguese Roll"
                }
            ],
            "timestamp": "2022-10-02T08:11:40.758Z",
            
        }
    ]
}
[]: # Error Response:{
    "error": true,
    "message": $error_message
}

// For Geting Food Items

[]: # Title: Get Food Items
[]: # Method: GET
[]: # URL: /api/fooditems
[]: # URL Params: None
[]: # Data Params: {
    page: 1,
    limit: 5
}
[]: # Success Response:{
    "success": true,
    "foodItems": [
        {
            "_id": "6339383ff7f01c75abae4a33",
            "name": "3 Chicken Wings"
            
        },
        {
            "_id": "6339383ff7f01c75abae4a34",
            "name": "Chicken Livers and Portuguese Roll"
            
        },
        {
            "_id": "6339383ff7f01c75abae4a35",
            "name": "Spicy Mixed Olives (V)"
            
        },
        {
            "_id": "6339383ff7f01c75abae4a36",
            "name": "Hummus with PERI-PERI Drizzle (V)"
            
        },
        {
            "_id": "6339383ff7f01c75abae4a37",
            "name": "Red Pepper Dip (V)"
            
        }
    ]
}
[]: # Error Response:{
    "error": true,
    "message": $error_message
}


//  Get Hash tags 
    
[]: # Title: Get Hash Tags
[]: # Method: GET
[]: # URL: /api/hashtags
[]: # URL Params: None
[]: # Data Params: {
    page: 1,
    limit: 5
}
[]: # Success Response:{
"success": true,
"hashtags": [
        {
            "_id": "63392fcac3d5309a03b99838",
            "name": "new"
        },
        {
            "_id": "63392fcac3d5309a03b99839",
            "name": "love"
        },
        {
            "_id": "6339314324ed981d28c1eb50",
            "name": "taste"
        }
    ]
}
[]: # Error Response:{
    "error": true,
    "message": $error_message
}
