import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/router';
import { supabase } from '../src/utils/SupabaseClient';
import Link from 'next/link';

const Home: NextPage = () => {
    let [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(JSON.stringify(error));
        } else {
            router.push('/');
        }
    };

    // const DisplayNameComp = () => {
    //     if (isConnected && data) {
    //         return <div>Your address is: {data.address}</div>;
    //     } else {
    //         return <></>;
    //     }
    // };

    // const { error } = await supabase.auth.signUp({
    //     email,
    //     password,
    // });

    // if (error) {
    //     alert(JSON.stringify(error));
    // } else {
    //     router.push('/signin');
    // }

    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Adadis</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
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
                    <div className="text-2xl p-4 font-bold border-black hover:bg-black hover:text-white rounded-md border-2 mr-4">
                        <button
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className="text-2xl font-bold"
                        >
                            Login
                        </button>
                    </div>
                    {/* <ConnectButton */}
                    {/* // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    /> */}
                </div>
            </header>
            <main className="flex-grow w-full bg-[url('/assets/adidas_simple.png')]">
                {/* Content
                <DisplayNameComp /> */}

                {/* <section className="w-full h-screen"> */}
                {/* <img
                    src="/assets/adidas.png"
                    className="object-cover w-full h-full"
                    alt="Image alt text"
                /> */}

                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50"
                >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <div
                        className="fixed inset-0 bg-black/60"
                        aria-hidden="true"
                    />

                    {/* Full-screen container to center the panel */}
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        {/* The actual dialog panel  */}
                        <Dialog.Panel className="mx-auto w-2/6 rounded bg-white">
                            <Dialog.Title className="text-xl p-4">
                                Login to your adadis world!
                            </Dialog.Title>
                            <p className="p-4">
                                Get free shipping, discount vouchers and members
                                only products when you’re in adiClub
                            </p>

                            <div className="w-3/6 mx-auto">
                                <form
                                    className="flex flex-col p-2"
                                    onSubmit={handleSignIn}
                                >
                                    <label
                                        htmlFor="email"
                                        className="text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 border-2"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />

                                    <label
                                        htmlFor="password"
                                        className="mt-6 text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 border-2"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />

                                    <button
                                        className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
                                        type="submit"
                                    >
                                        Sign in with Email
                                    </button>
                                </form>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>

                {/* </section> */}
            </main>
            <footer className=""></footer>
            {/* <footer className="p-4 bg-blue-500">Footer</footer> */}
        </div>
    );
};

export default Home;
