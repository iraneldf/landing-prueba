'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";

const InfiniteScrollPosts = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = async (page) => {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
        const data = await res.json();

        if (data.length === 0) {
            setHasMore(false); // No hay más publicaciones para cargar
        } else {
            setPosts((prevPosts) => [...prevPosts, ...data]);
            // Obtener usuarios para las publicaciones cargadas
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
        setUsers((prevUsers) => ({...prevUsers, ...usersMap}));
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
        if (bottom && hasMore && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className='container mx-auto p-6'>
            <h2 className="text-xl font-bold mb-4">Publicaciones con Scroll infinito</h2>
            <div
                className="overflow-auto"
                onScroll={handleScroll}
                style={{height: '400px', margin: '0 auto', width: '100%'}}
            >

                <div className="grid grid-cols-1 gap-4">
                    {posts.map( (post, index) => (
                        <div key={index}
                             className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-200">
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
                {loading && <p className="text-center">Cargando más publicaciones...</p>}
                {!hasMore && <p className="text-center">No hay más publicaciones para cargar.</p>}
            </div>
        </div>
    );
};

export default InfiniteScrollPosts;