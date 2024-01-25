import { createClient, groq } from "next-sanity"

export async function getBooks() {
    const client = createClient({
        projectId: "bufxofzo",
        dataset: "production",
        apiVersion: "2024-01-25",
    });

    return client.fetch(
        groq`*[_type == "book"]{
            _id,
            "image": image.asset->url
        }`
    )
}