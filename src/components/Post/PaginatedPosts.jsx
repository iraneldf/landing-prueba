'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";

const PaginatedPosts = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPosts, setTotalPosts] = useState(0);
    const postsPerPage = 6; // Número de publicaciones por página

    const fetchPosts = async (page) => {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`);
        const data = await res.json();
        const totalRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const totalData = await totalRes.json();

        setTotalPosts(totalData.length); // Total de publicaciones
        setPosts(data);
        await fetchUsers(data.map(post => post.userId));
        setLoading(false);
    };

    const fetchUsers = async (userIds) => {
        const uniqueUserIds = [...new Set(userIds)];
        const userPromises = uniqueUserIds.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
        );

        const usersData = await Promise.all(userPromises);
        const usersMap = usersData.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, {});
        setUsers(usersMap);
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Publicaciones de 5 en 5 con Paginación</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {posts.map(post => (
                    <div key={post.id} className="bg-white p-4 rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <h2 className="font-semibold text-lg">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        {/* Mostrar el nombre y email del usuario */}
                        {users[post.userId] && (
                            <div className="mt-2 border-t pt-2 text-gray-600">
                                <p><strong>Autor:</strong> {users[post.userId].name}</p>
                                <p><strong>Email:</strong> {users[post.userId].email}</p>
                            </div>
                        )}

                        <Link href={`/post/${post.id}`}>
                            <h4 className="font-semibold text-lg cursor-pointer hover:text-blue-500">
                                Ver detalles
                            </h4>
                        </Link>
                    </div>
                ))}
            </div>

            {loading && <p className="text-center">Cargando publicaciones...</p>}
            {!loading && (
                <div className="flex justify-center gap-32 mt-4">
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => setPage(prev => Math.min(prev + 1, Math.ceil(totalPosts / postsPerPage)))}
                        disabled={page * postsPerPage >= totalPosts}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Siguiente
                    </button>
                </div>

            )}
        </div>
    );
};

export default PaginatedPosts;