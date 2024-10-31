// src/app/post/[id]/page.jsx
import React from 'react';
import Link from 'next/link';

const PostDetails = async ({params}) => {
    const {postid} = await params; // Asegúrate de que el nombre del parámetro coincida con la ruta

    // Obtener la publicación específica
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    const post = await postRes.json();

    // Obtener el usuario correspondiente
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userRes.json();

    return (
        <div className='p-6 bg-amber-100 w-full h-screen'>
            <div className="container mx-auto ">
                <h1 className="text-2xl font-bold mb-4">Detalles del Post {post.id}</h1>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.body}</p>

                {/* Sección de detalles del usuario */}
                <div className="bg-white shadow-lg rounded-lg p-6 mt-6 border border-gray-300">
                    <h2 className="font-semibold text-xl border-b pb-2 mb-4">Detalles del Usuario (Autor del Post)</h2>
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Nombre:</span>
                            <span>{user.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>{user.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Teléfono:</span>
                            <span>{user.phone}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Ciudad:</span>
                            <span>{user.address.city}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Compañía:</span>
                            <span>{user.company.name}</span>
                        </div>
                        {/* Información adicional */}
                        <div className="flex justify-between">
                            <span className="font-medium">Dirección:</span>
                            <span>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Sitio Web:</span>
                            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer"
                               className="text-blue-600 hover:underline">{user.website}</a>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Eslogan de Compañía:</span>
                            <span>{user.company.catchPhrase}</span>
                        </div>
                    </div>
                </div>

                {/* Botón para volver */}
                <div className="mt-6">
                    <Link href="/post" passHref>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                            Volver a Publicaciones
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;