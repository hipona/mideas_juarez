import {useReducer,  createContext} from "react";

export const Store = createContext()

//el estado inicial de nuentra aplicación o variable de estado
const InitialState = {
    cart:{
        cartItem:[]
    }
}

//función reductora donde crea la logica
function reducer(state, action){
      switch (action.type) {
        case "CARD_ADD_ITEM": {
          const nuevoItem = action.props;
          const existItem = state.cart.cartItem.find(
            (item) => item.id === nuevoItem.id
          );

          //Una Condición para actualzar si existe el item i guardar si no existe
          const cartItem = existItem
            ? state.car.cartItem.map((item) =>
                item.titulo === existItem.titulo ? nuevoItem : item
              )
            : // no exite guardamos el primer Item
              [...state.cart.cartItem, nuevoItem];

          return { ...state, cart: { ...state.cart, cartItem } };
        }

        default:
          return state;
      }
}

//Funcion para crear el store y envolver a los comp hijos
export function StoreProvider({children}){
    const [state, setState] = useReducer(reducer, InitialState)
    const value = {state, setState}
    return <Store.Provider 
            value={value}>

    </Store.Provider>
}

