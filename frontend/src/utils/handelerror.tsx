export function handleApiError(error: any) {
    if (error.response) {
        // Laravel or API returned an error
        const { status, data } = error.response;

        if (status === 422 && data.errors) {
            // Laravel validation errors
            const messages = Object.values(data.errors).flat().join('\n');
            alert("❌ Validation Error:\n" + messages);
        } else if (data.message) {
            // General Laravel error
            alert("❌ Error: " + data.message);
        } else {
            alert("❌ Unexpected error occurred.");
        }

        console.error("Response error:", data);
    } else if (error.request) {
        // Request made but no response
        alert("❌ No response from server. Please check your connection.");
        console.error("No response received:", error.request);
    } else {
        // Other errors
        alert("❌ Request setup failed: " + error.message);
        console.error("Axios error:", error.message);
    }
}
