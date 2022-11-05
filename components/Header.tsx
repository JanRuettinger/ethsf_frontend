import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
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
                    <button className="text-xl rounded-md border-2 p-4 border-black hover:bg-black hover:text-white">
                        Login / Signup
                    </button>
                    {/* <ConnectButton */}
                    {/* // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    /> */}
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
