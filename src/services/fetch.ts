const Fetch = async <T>(url: string, options?: RequestInit | undefined): Promise<T> => {
    const request = new Request(`http://localhost:4000/${url}`, options);
    const response = await fetch(request);
    return await response.json();
}

export default Fetch;
