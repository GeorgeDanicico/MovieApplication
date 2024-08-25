'use client'

import LogoutIcon from '@/icons/LogoutIcon'
import SettingsIcon from '@/icons/SettingsIcon'
import { useStore } from '@/store/store'
import { Avatar, Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CustomNavbar = () => {
    const { logout } = useStore();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    }

  return (
    <Navbar className="bg-primary">
        <NavbarBrand>
            <p className="font-bold text-inherit">Sharkness</p>
        </NavbarBrand>

        <NavbarContent justify="end">
            <NavbarItem>
                <Avatar name="GD" size="md"/>
            </NavbarItem>
            <NavbarItem>
                <Button isIconOnly className="bg-primary text-white py-2 rounded-md hover:bg-white transition-all duration-300">
                    <SettingsIcon />
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button 
                    isIconOnly 
                    className="bg-primary text-white py-2 rounded-md hover:bg-white transition-all duration-300"
                    onClick={handleLogout}
                >
                    <LogoutIcon />
                </Button>
            </NavbarItem>
        </NavbarContent>
  </Navbar>
  )
}

export default CustomNavbar