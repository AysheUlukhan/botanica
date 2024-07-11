import supabase from "../../config/connectdb";

export const GetProduct = (product) => ({
    type: "GET_PRODUCT",
    product
})

export const addProducToDatabase = async (product)=>{
    const {data, error} = await supabase.from('product').insert(product); 
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}


export const deleteProductToDatabase = async (id)=>{
    const {data, error} = await supabase.from('product').delete().eq("id", id); 
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}



export const editProductToDatabase = async (id, update)=>{
    const {data, error} = await supabase.from('product').update(update).match({id:id}); 
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}