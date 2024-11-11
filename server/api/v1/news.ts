// export default defineEventHandler(async (event, page = 1, pageSize = 10) => {
//     console.log(getRequestURL(event));
//     const req = getRequestURL(event);
//     const searchParams = req.searchParams.get("q");
//     console.log(searchParams)
//     return await $fetch(`https://newsapi.org/v2/everything?q=${searchParams}&page=${page}&pageSize=${pageSize}&apiKey=997d0c892ccc46f9bef6a7fa8331482d`)
// })

export default defineEventHandler(async (event, page = 1, pageSize = 10) => {
    console.log(getRequestURL(event));
    const req = getRequestURL(event);
    const searchParams = req.searchParams.get("q");
    console.log(searchParams)
    try {
        return await $fetch(`https://newsapi.org/v2/everything?q=${searchParams}&page=${page}&pageSize=${pageSize}&apiKey=997d0c892ccc46f9bef6a7fa8331482d`)
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
})
