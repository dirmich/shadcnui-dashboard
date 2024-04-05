'use client'

import { BellIcon } from "lucide-react"
import { useState } from "react"
import { CommandDemo } from "./Command"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

const Header = () => {
    const [notifications, setNotifications] = useState([
        {
            text: 'This is a notification',
            date: '02-01-2015',
            read: true
        },
        {
            text: 'This is another notification',
            date: '02-01-2015',
            read: false
        }
    ])

    return (
        <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <CommandDemo />
            <div className="flex items-center justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant='outline' size='icon' className="relative">
                            <div className={`h-3 w-3 absolute top-0 right-0  rounded-full my-1 ${notifications.find((x) => !!x.read) ? 'bg-green-500' : 'bg-neutral-100'}`}></div>
                            <BellIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {
                            notifications.map((item, key) => <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                                <div className={`h-3 w-3 rounded-full my-1 ${item.read ? 'bg-green-500' : 'bg-neutral-100'}`}></div>
                                <p>{item.text}</p>
                                <p className="text-xs text-neutral-500">{item.date}</p>
                                <span>{item.read ? 'Read' : 'Unread'}</span>
                            </DropdownMenuItem>)
                        }
                        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default Header