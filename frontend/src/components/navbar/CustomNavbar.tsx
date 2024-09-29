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
    <Navbar className="bg-linear-gradient">
        <NavbarBrand>
            <p className="font-bold text-inherit">Fitty</p>
        </NavbarBrand>

        <NavbarContent justify="end">
            <NavbarItem>
                <Avatar name="GD" size="md"/>
            </NavbarItem>
            <NavbarItem>
                <Button isIconOnly className="bg-opacity-0  py-2 rounded-md transition-all duration-300">
                    <SettingsIcon stroke="#FFFFFF" />
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button 
                    isIconOnly
                    className="bg-opacity-0 hover py-2 rounded-md transition-all duration-300 "
                    onClick={handleLogout}
                >
                    <LogoutIcon stroke="#FFFFFF" />
                </Button>
            </NavbarItem>
        </NavbarContent>
  </Navbar>
  )
}

export default CustomNavbar