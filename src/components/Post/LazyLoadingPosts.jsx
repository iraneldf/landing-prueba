'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";

const LazyLoadingWithButton = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const postsPerPage = 5; // Número de publicaciones por carga

    const fetchPosts = async (page) => {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`);
        const data = await res.json();

        if (data.length === 0) {
            setHasMore(false); // No hay más publicaciones para cargar
        } else {
            setPosts((prevPosts) => [...prevPosts, ...data]);
            await fetchUsers(data.map(post => post.userId));
        }
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
            <h2 className="text-xl font-bold mb-4">Publicaciones de 5 en 5 con Lazy Loading</h2>
            <div className="grid grid-cols-1 gap-4">
                {posts.map((post,index) => (
                    <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-200">
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
            {!hasMore ? (
                <p className="text-center">No hay más publicaciones para cargar.</p>
            ) : (
                <button
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Ver más
                </button>
            )}
        </div>
    );
};

export default LazyLoadingWithButton;