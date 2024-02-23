import React, {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog} from "@headlessui/react";
import {Link} from "react-router-dom";
import {Image} from "@nextui-org/react";

const navigation = [
    {id: '1', name: 'Home', href: '/'},
    {id: '2', name: 'About', href: '/about'},
    {id: '3', name: 'Groups', href: '/groups'},
    {id: '4', name: 'Chest CT imaging', href: '/findings'},
    {id: '5', name: 'Educational tool', href: '/diagnosis'},
];

/**
 * Render navigation items with provided CSS class name.
 *
 * @param {string} itemClassName - The class name to apply to the navigation items.
 * @returns {Array} - An array of React elements representing the navigation items.
 */
const renderNavigationItems = (itemClassName) =>
    navigation.map((item) => (
        <Link key={item.id} to={item.href} className={itemClassName}>{item.name}</Link>
    ));

const MobileMenu = ({open, setOpen}) => {
    return (
        <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
            <div className="fixed inset-0 z-50"/>
            <Dialog.Panel
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">UNIUD</span>
                        <Image src="https://github.com/Denel91/uniud-app/blob/master/public/logo_header.svg" height={40} width={40} alt="logo_header"/>
                    </Link>
                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setOpen(false)}>
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {renderNavigationItems("-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#d7f2ef]")}
                        </div>
                        <div className="py-6">
                            <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#d7f2ef]">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

const LinkSection = ({className}) => {
    return (
        <Link to="/" className={className}>
            <span className="sr-only">Uniud</span>
            <Image src="https://github.com/Denel91/uniud-app/blob/master/public/logo_header.svg" height={40} width={40} alt="logo_header"/>
        </Link>
    );
};

const LogLink = ({className}) => {
    return (
        <Link to="/login" className={className}>
            Log in <span aria-hidden="true">&rarr;</span>
        </Link>
    );
};

const MenuButton = ({setOpen}) => {
    return (
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
        </button>
    );
};

/**
 * Represents the header component of the website.
 * The header contains a navigation bar with a logo, menu button, and navigation items.
 * It also includes a mobile menu for responsive design.
 * @returns {JSX.Element} - The header component.
 * @since 1.0.0
 */
export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <LinkSection className="-m-1.5 p-1.5"/>
                </div>
                <div className="flex lg:hidden">
                    <MenuButton setOpen={setMobileMenuOpen}/>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {renderNavigationItems("text-base font-semibold leading-6 text-gray-900 border-b-3 border-transparent hover:border-[#80BFAD]")}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <LogLink className="text-sm font-semibold leading-6 text-gray-900"/>
                </div>
            </nav>
            <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen}/>
        </header>
    );
};

