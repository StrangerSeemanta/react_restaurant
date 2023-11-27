import ChickenFryPic from "./../assets/ChickenFry_TD.svg"
import Burger from "./../assets/Burger_TD.svg"
import Aglio from "./../assets/aglio_olio.svg"
import Pudding from "./../assets/pudding.svg"
import HBiriyani from "./../assets/hyderabiriyani.svg"
import Kacchi from "./../assets/kacchyi.svg"
import Grill from "./../assets/grilled.svg"
import Mutton from "./../assets/mutton.svg"
import ThaiPack from "./../assets/thai_pack.svg"
import IndianPack from "./../assets/indian_pack.svg"
import BdPack from "./../assets/bd_pack.svg"
import BlueOcean from "./../assets/blue_ocean.svg"
import virginMojito from "./../assets/virgin_mojito.svg"
import Pancake from "./../assets/Pancake_TD.svg"
export interface DataProps {
    title: string;
    img: string;
    price: number;
    originalPrice: number;
    ratings: number;
    reviews: number;
    catagory: string;
    country: string;
    special: boolean;
    top: boolean
}

export const Data =
    [
        {
            "title": "Fried Chicken",
            "img": ChickenFryPic,
            "price": 17.354,
            "originalPrice": 22.00,
            "ratings": 5,
            "reviews": 1123,
            "catagory": "appetizer",
            "country": "American Flavour",
            "special": true,
            "top": true
        },
        {
            "title": "Aglio E Olio",
            "img": Aglio,
            "price": 12,
            "originalPrice": 17,
            "ratings": 4,
            "reviews": 420,
            "catagory": "appetizer",
            "country": "American Flavour",
            "special": true,
            "top": true

        },
        {
            "title": "Pancake",
            "img": Pancake,
            "price": 36,
            "originalPrice": 50,
            "ratings": 5,
            "reviews": 680,
            "catagory": "desert",
            "country": "American Flavour",
            "special": true,
            "top": true

        },
        {
            "title": "Burger",
            "img": Burger,
            "price": 8,
            "originalPrice": 12,
            "ratings": 3,
            "reviews": 123,
            "catagory": "appetizer",
            "country": "Thai Cuisine",
            "special": false,
            "top": false

        },
        {
            "title": "Indian Kheer",
            "img": Pudding,
            "price": 22,
            "originalPrice": 38,
            "ratings": 2,
            "reviews": 73,
            "catagory": "desert",
            "country": "Indian Dish",
            "special": true,
            "top": false
        },
        {
            "title": "Hyderabadi Biriyani",
            "img": HBiriyani,
            "price": 48,
            "originalPrice": 55,
            "ratings": 3,
            "reviews": 123,
            "catagory": "main Course",
            "country": "Indian Dish",
            "special": true,
            "top": false
        }, {
            "title": "Kacchi Biriyani",
            "img": Kacchi,
            "price": 57,
            "originalPrice": 72,
            "ratings": 5,
            "reviews": 123,
            "catagory": "main Course",
            "country": "Bangladeshi Food",
            "special": false,
            "top": false
        },
        {
            "title": "Grilled Chicken ",
            "img": Grill,
            "price": 18,
            "originalPrice": 22,
            "ratings": 5,
            "reviews": 120,
            "catagory": "appetizer",
            "country": "American Flavour",
            "special": false,
            "top": false
        },
        {
            "title": "Cheesed Mutton ",
            "img": Mutton,
            "price": 27,
            "originalPrice": 32,
            "ratings": 2,
            "reviews": 183,
            "catagory": "main Course",
            "country": "Indian Dish",

            "special": false,
            "top": false
        },
        {
            "title": "Thai Package",
            "img": ThaiPack,
            "price": 98,
            "originalPrice": 112,
            "ratings": 4,
            "reviews": 23,
            "catagory": "main Course",
            "country": "Thai Cuisine",
            "special": false,
            "top": false
        },
        {
            "title": "Indian Special Thali",
            "img": IndianPack,
            "price": 157,
            "originalPrice": 212,
            "ratings": 5,
            "reviews": 923,
            "catagory": "main Course",
            "country": "Indian Dish",
            "special": true,
            "top": false
        },
        {
            "title": "Bangladeshi Special Package",
            "img": BdPack,
            "price": 300,
            "originalPrice": 450,
            "ratings": 5,
            "reviews": 363,
            "catagory": "main Course",
            "country": "Bangladeshi Food",

            "special": true,
            "top": false
        },
        {
            "title": "Blue Ocean",
            "img": BlueOcean,
            "price": 17,
            "originalPrice": 32,
            "ratings": 5,
            "reviews": 713,
            "catagory": "mocktail",
            "country": "American Flavour",
            "special": true,
            "top": false
        },
        {
            "title": "Virgin Mojito",
            "img": virginMojito,
            "price": 12,
            "originalPrice": 17,
            "ratings": 3,
            "reviews": 423,
            "catagory": "mocktail",
            "country": "American Flavour",
            "special": false,
            "top": false
        }
    ]

