import { createClient, groq } from "next-sanity"

export async function getProjects() {
    const client = createClient({
        projectId: "bufxofzo",
        dataset: "production",
        apiVersion: "2024-01-25",
    });

    return client.fetch(
        groq`*[_type == "event"]{
            _id,
            date,
            "image": image.asset->url
        }`
    )
}