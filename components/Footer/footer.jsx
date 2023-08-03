import React from 'react';
import Form from './form'
import Contacts from './contacts';
import Rights from './rights';

const Footer = () => {
    return (
        <footer className="bg-blue-700">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <Form />
                <Contacts />
                <div className="text-center md:text-right lg:text-right">
                    <div className="container p-6 text-gray-300">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div className="mb-6 md:mb-0">
                                <h5 className="mb-2 font-medium">ساختمان مرکز</h5>
                                <p className="mb-4">
                                برای خودش خوشحال بود و کص میگفت و میخندید. من عاشق لواط هستم. بیا تا برویم به بستر. تا بکنم ز مستر. مست و عیان و زیبا. راست میکنم برایت.

                                </p>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h5 className="mb-2 font-medium">کص مادرت</h5>
                                <p className="mb-4">
                                برای خودش خوشحال بود و کص میگفت و میخندید. من عاشق لواط هستم. بیا تا برویم به بستر. تا بکنم ز مستر. مست و عیان و زیبا. راست میکنم برایت.

                                </p>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h5 className="mb-2 font-medium">کیر تو تیلویند</h5>
                                <p className="mb-4">
                                برای خودش خوشحال بود و کص میگفت و میخندید. من عاشق لواط هستم. بیا تا برویم به بستر. تا بکنم ز مستر. مست و عیان و زیبا. راست میکنم برایت.

                                </p>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h5 className="mb-2 font-medium">مادرجنده</h5>
                                <p className="mb-4">
                                برای خودش خوشحال بود و کص میگفت و میخندید. من عاشق لواط هستم. بیا تا برویم به بستر. تا بکنم ز مستر. مست و 343434 عیان و زیبا. راست میکنم برایت.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Rights />
            </div>
        </footer>
    );
}

export default Footer;