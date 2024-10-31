// src/app/post/page.jsx
import React from 'react';
import Link from "next/link";

const PostsList = async () => {
    // Obtener publicaciones
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // Limitar a las primeras 6 publicaciones
    const limitedPosts = posts.slice(0, 6);

    // Obtener usuarios
    const userIds = [...new Set(limitedPosts.map(post => post.userId))]; // Obtener IDs únicos de usuarios
    const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await usersRes.json();

    // Crear un mapa de usuarios para acceso rápido
    const usersMap = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">6 Publicaciones de JSONPlaceholders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {limitedPosts.map(post => (
                    <div key={post.id} className="bg-white p-4 rounded shadow flex flex-col justify-between
                     transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <h2 className="font-semibold text-lg">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        {/* Mostrar el nombre del usuario */}
                        <p className="mt-2 text-gray-500">Publicado por: {usersMap[post.userId]?.name}</p>

                        <Link href={`/post/${post.id}`}>
                            <h4 className="font-semibold text-lg cursor-pointer hover:text-blue-500">
                                Ver detalles
                            </h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsList;