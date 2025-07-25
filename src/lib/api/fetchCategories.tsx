export async function fetchCategories() {
    const res = await fetch('/api/categories')
    if (!res.ok) {
        const errorBody = await res.json()
        const error = new Error(errorBody.message || 'Error occurred') as any
        error.status = res.status
        throw error
    }
    return res.json()
}