export const initialState = {
    basket: [],
    user: null 
};

//Selector
export const getBasketTotal= (basket) => basket?.reduce((amount,item)=> item.price + amount, 0);  //item price to add to the total amount and the initial amt wil be xzero

const reducer = (state, action) =>{  //action means what are you doing pushing or pulling
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,   //original state
                basket: [...state.basket, action.item],  //basket cuurently is and what items you are adding
            };

        case "EMPTY_BASKET":
            return{
                ...state,
                basket: []  // emptying out the basket
            }

        case "REMOVE_FROM_BASKET":
            const index= state.basket.findIndex(
                (basketItem) => basketItem.id===action.id    //first find the index and does any of the basket item matches the action
            );
            let newBasket=[...state.basket]; //copy the basket into the new basket

            if (index >=0){
                newBasket.splice(index,1); //new basket will be spliced up 
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return{
                ...state, 
                basket: newBasket
            }

        case "SET_USER":
            return{
                ...state, 
                user: action.user
            }    
            

        default:
            return state;    
    }
};

export default reducer;