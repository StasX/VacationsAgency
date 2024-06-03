import { PayloadAction } from "@reduxjs/toolkit";
// import { ProductModel } from "../Models/ProductModel";
import { UserModel } from "../Models/UserModel";

// Functions for performing changes on the Slice data: 

// Function for adding one product to the global state: 
// export function add(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
//     const newState = [...currentState]; // Duplicate currentState.
//     const productToAdd = action.payload; // Here, the payload is a product to add.
//     newState.push(productToAdd); // Make the change.
//     return newState; // Return the new state.

//     // One-liner - same as the above:
//     // return [...currentState, action.payload];
// }

// // Function for updating one product from the global state: 
// export function update(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
//     const newState = [...currentState]; // Duplicate currentState.
//     const productToUpdate = action.payload; // Here, the payload is a product to update.
//     const index = newState.findIndex(p => p.id === productToUpdate.id); // Find product index.
//     newState[index] = productToUpdate; // Make the update.
//     return newState; // Return the new state.
// }

// // Function for deleting one product from the global state: 
// export function remove(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
//     const newState = [...currentState]; // Duplicate currentState.
//     const productIdToDelete = action.payload; // Here, the payload is the id of the product to delete.
//     const index = newState.findIndex(p => p.id === productIdToDelete); // Find product index.
//     newState.splice(index, 1); // 1 --> Number of items to delete.
//     return newState; // Return the new state.
// }

// // Function for initializing all products in the global state: 
// export function init(currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[] {
//     const newState = action.payload; // Here, the payload is product array to initialize.
//     return newState; // Return the new state which is the product array.
// }

// --------------------------------------------------------

// Function for setting the logged-in user into the global state:
export function login(currentState: UserModel, action: PayloadAction<UserModel>): UserModel {
    const newState = action.payload; // Here the payload is the new user logged-in.
    return newState;
}

// Function for setting the register user into the global state:
// export function register(currentState: UserModel, action: PayloadAction<UserModel>): UserModel {
//     const newState = action.payload; // Here the payload is the new user logged-in.
//     return newState;
// }

// Function for deleting the logged-in user from the global state:
export function logout(currentState: UserModel, action: PayloadAction): UserModel {
    return null;
}

