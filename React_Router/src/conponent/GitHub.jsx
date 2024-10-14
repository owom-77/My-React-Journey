import { useLoaderData } from 'react-router-dom';

export default function GitHub() {
    const api = useLoaderData();

    // fetch(`https://api.github.com/users/owom-77`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setApi(res)
    //     })

    return (
        <>
            <div className='bg-gray-700 text-white text-3xl p-4 mb-3'>GitHub Followers: {api.followers}</div>
            <img src={api.avatar_url} />
        </>
    )
}

export async function gitHubApi(){
    const res = await fetch(`https://api.github.com/users/owom-77`)
    return res.json()
}
