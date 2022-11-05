import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import { Dialog } from '@headlessui/react';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

import { supabase } from '../src/utils/SupabaseClient';
import Link from 'next/link';
import Header from '../components/Header';

const Home: NextPage = () => {
    const { data } = useAccount();
    const { isConnected } = useConnect();

    let [isOpen, setIsOpen] = useState(true);

    const DisplayNameComp = () => {
        if (isConnected && data) {
            return <span>Your wallet is connected!</span>;
        } else {
            return <></>;
        }
    };

    const router = useRouter();
    const [user, setUser] = useState<User | null>();

    const handleLogOut: MouseEventHandler = async (e) => {
        e.preventDefault();

        const { error } = await supabase.auth.signOut();

        if (error) {
            alert(JSON.stringify(error));
        } else {
            router.push('/signin');
        }
    };

    useEffect(() => {
        const getProfile = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                setUser(user);
            } else {
                router.push('/signin');
            }
        };

        getProfile();
    }, []);

    if (!user) {
        // Currently loading asynchronously User Supabase Information
        return null;
    }

    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Adadis</title>
                <meta name="description" content="Adadis" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="pt-4 pb-2 bg-white flex flex-row justify-between items-center ">
                <div className="pl-4">
                    <Link href="/">
                        <a>
                            <img
                                src="/assets/adadis_logo_small.png"
                                className="object-cover w-24"
                                alt="background image"
                            />
                        </a>
                    </Link>
                </div>
                <div className="flex flex-row justify-between w-1/5">
                    <div className="text-xl font-bold">Men</div>
                    <div className="text-xl font-bold">Women</div>
                    <div className="text-xl font-bold">Kids</div>
                    <div>Gifts</div>
                    <div>Sale</div>
                </div>
                <div>
                    <div className="text-2xl p-4 font-bold border-black">
                        Hello Jan
                    </div>
                    {/* <ConnectButton */}
                    {/* // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    /> */}
                </div>
            </header>
            <main className="flex-grow w-full bg-[url('/assets/adadis_clean_background.png')]">
                <div className="p-6">
                    <div className="text-center text-4xl font-bold text-white">
                        Welcome to the adadis Metaverse!
                    </div>
                    <div className="text-center text-2xl text-white">
                        Solve challenges, become part of the team and earn cool
                        rewards.
                    </div>
                </div>

                <div className="grid grid-cols-2 mx-auto w-4/5 justify-between gap-y-4">
                    <div className="bg-white/20 rounded-md border-2 w-4/5 mx-auto mb-28">
                        <div className="bg-white text-3xl">
                            #1 Getting Started
                        </div>
                        <div className="p-4">
                            <div className="text-white text-xl">
                                First connect your wallet and to receive your
                                membership pass to adadis!
                            </div>
                            <div className="mt-4">
                                <ConnectButton
                                    chainStatus="none"
                                    showBalance={false}
                                    accountStatus="address"
                                />
                                <div className="text-green-900 font-bold mt-2">
                                    <DisplayNameComp />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/20 rounded-md border-2 h-44 w-4/5 mx-auto mb-28">
                        <div className="bg-white text-3xl">#2 Level up</div>
                    </div>
                    <div className="bg-white/20 rounded-md border-2 h-44 w-4/5 mx-auto mb-28">
                        <div className="bg-white text-3xl">#3 Join the fam</div>
                    </div>
                    <div className="bg-white/20 rounded-md border-2 h-44 w-4/5 mx-auto mb-28">
                        <div className="bg-white text-3xl">
                            #4 Connect with your idol
                        </div>
                    </div>
                </div>
                {/* Content
                <DisplayNameComp /> */}

                {/* <section className="w-full h-screen"> */}
                {/* <img
                    src="/assets/adidas_simple.png"
                    className="object-cover w-full h-full"
                    alt="Image alt text"
                /> */}

                {/* </section> */}
            </main>
            {/* <footer className="">Adiads original</footer> */}
            {/* <footer className="p-4 bg-blue-500">Footer</footer> */}
        </div>
    );
};

export default Home;
