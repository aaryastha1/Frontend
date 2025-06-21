export const getBackendImageUrl = (imagePath) => {
    if (!imagePath) return null

    const baseUrl = import.meta.env.VITE_BACKEND_URL ||
        "http://localhost:5006"
    return baseUrl + "/" + imagePath

}