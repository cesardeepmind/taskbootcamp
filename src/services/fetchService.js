export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log(response);
    //we return th json
    return response.json();
}