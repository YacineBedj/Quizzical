const BASE_URL = "https://opentdb.com/api.php?type=multiple"

export default async function getData(amount, difficulty){
    const request = new Request(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
    const response = await fetch(request)
    const data = await response.json()
    // console.log("in func",data)
    return data
}