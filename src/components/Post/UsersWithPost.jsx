// src/app/users/page.jsx
import React from 'react';

const UsersWithPosts = async () => {
    // Obtener usuarios
    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersRes.json();

    // Obtener publicaciones para cada usuario
    const usersWithPosts = await Promise.all(
        users.slice(0, 3).map(async (user) => {
            const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            const posts = await postsRes.json();
            return { ...user, posts: posts.slice(0, 6) }; // Limitar a 6 publicaciones
        })
    );

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">3 Usuarios y 6 de sus Publicaciones de JSONPlaceholders</h1>
            {usersWithPosts.map(user => (
                <div key={user.id} className="mb-8 bg-gray-100 p-4 rounded shadow">
                    <h2 className="font-semibold text-xl">{user.name}</h2>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg">Publicaciones:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                            {user.posts.map(post => (
                                <div key={post.id} className="bg-white p-4 rounded shadow">
                                    <h4 className="font-semibold text-md">{post.title}</h4>
                                    <p className="text-gray-700">{post.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersWithPosts;