// src/app/post/page.jsx
import React from 'react';
import UsersWithPosts from "@/components/Post/UsersWithPost";
import PostsList from "@/components/Post/Post";
import ScrollInfinito from "@/components/Post/Scroll infinito";
import InfiniteScrollPosts from "@/components/Post/Scroll infinito";
import Link from "next/link";
import Image from "next/image";
import PaginatedPosts from "@/components/Post/PaginatedPosts";

const Posts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // Limitar a las primeras 6 publicaciones
    const limitedPosts = posts.slice(0, 6);

    return (
        <div className={'bg-amber-100 h-full flex flex-col items-center'}>
            <header className="z-20 flex justify-between items-center p-[16px] lg:px-[80px] lg:py-[24px] ">
                <Link href={'/'}>
                    <button
                        className={'border-2 border-[#78350F] px-4 py-2 rounded hover:bg-[#78350F] hover:text-white'}>
                        Volver a pagina principal
                    </button>
                </Link>

            </header>

            <h1 className='font-black text-[40px]'>Pagina de publicaciones de JSONPlaceholders</h1>

            <PostsList/>

            <PaginatedPosts/>

            <InfiniteScrollPosts/>

            <UsersWithPosts/>


        </div>
    );
};

export default Posts;