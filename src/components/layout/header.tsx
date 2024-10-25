'use client';
import { Menu, Layout, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import logo from "@/assets/images/eco-mama.png";
import Image from 'next/image';
import Link from 'next/link';
import useWindowDimensions from '@/hooks/useScreenSize';
import BurgerButton from './burger';
import { usePathname } from 'next/navigation'; // Import usePathname

const { Header } = Layout;

const items = [
    {
        key: 1,
        label: <Link href="/">Home</Link>,
    },
    {
        key: 2,
        label: <Link href="/about">About</Link>,
    },
    {
        key: 3,
        label: <Link href="/programs">Programs</Link>,
    },
    {
        key: 4,
        label: <Link href="/hubs">Hubs</Link>,
    },
    {
        key: 5,
        label: <Link href="/contacts">Contacts</Link>,
    },
];

function NavHeader() {
    const { isDesktop } = useWindowDimensions();
    const [isClosed, setIsClosed] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const currentPath = usePathname();

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Determine the selected key based on the current path
    const selectedKey = items.find(item => item.label.props.href === currentPath)?.key || '1';

    return (
        <header
            style={{
                display: 'flex',
                background: '#fff',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                paddingRight: isDesktop ? 80 : 40,
                paddingLeft: isDesktop ? 80 : 40,
            }}
            className="sticky top-0 header-blur z-50 rounded-s-none"
        >
            {isDesktop ? (
                <>
                    <Image src={logo} alt="logo" width={60} height={60} />
                    <div>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[String(selectedKey)]} // Set the active key here
                            items={items}
                            style={{ flex: 1, borderWidth: 0, border: 'none', borderBottom: 'none' }}
                            className="fixed-menu"
                        />
                    </div>
                    <div>
                        <Button type="primary">Get Started</Button>
                    </div>
                </>
            ) : (
                <>
                    <Image src={logo} alt="logo" width={60} height={60} />
                    {isClosed && (
                        <div className='absolute top-14 right-0 w-full bg-white flex flex-col p-10 gap-2'>
                            {items.map(item => (
                                <Link
                                    key={item.key}
                                    href={item.label.props.href}
                                    className={`p-2 rounded-md ${currentPath === item.label.props.href ? 'text-primary bg-primary/10' : ''}`} // Add active style
                                    onClick={() => setIsClosed(!isClosed)}
                                >
                                    {item.label.props.children}
                                </Link>
                            ))}
                            <Button type="primary">Get Started</Button>
                        </div>
                    )}
                    {isClient && <BurgerButton isClosed={isClosed} setIsClosed={setIsClosed} />}
                </>
            )}
        </header>
    );
}

export default NavHeader;
