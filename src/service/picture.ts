

const load = async () => {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
    return response.json()
}

export default {
    load
}