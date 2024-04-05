'use client'

import UserItem from "./UserItem"
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "./ui/command"

const Sidebar = () => {
    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: '/',
                    text: 'Profile'
                },
                {
                    link: '/',
                    text: 'Inbox'
                },
                {
                    link: '/',
                    text: 'Billing'
                },
                {
                    link: '/',
                    text: 'Notifications'
                },
            ]
        },
        {
            group: 'Settings',
            items: [
                {
                    link: '/',
                    text: 'General Settings'
                },
                {
                    link: '/',
                    text: 'Privacy'
                },
                {
                    link: '/',
                    text: 'Logs'
                },
            ]
        }
    ]
    return (
        <div className="fixed flex flex-col gap-4 min-w-[300px] border-r min-h-screen p-4">
            <div>
                <UserItem />
            </div>
            <div className="grow">
                <Command style={{ overflow: 'visible' }}>
                    {/* <CommandInput placeholder="Type a command or search..." /> */}
                    <CommandList style={{ overflow: 'visible' }}>
                        {/* <CommandEmpty>No results found.</CommandEmpty> */}
                        {
                            menuList.map((group, key) => (
                                <>
                                    <CommandGroup heading={group.group} key={`_${key}`}>
                                        {
                                            group.items?.map((item, idx) => (
                                                <CommandItem key={`__${idx}`} className="flex gap-2 cursor-pointer">
                                                    <span>{item.text}</span>
                                                </CommandItem>
                                            ))
                                        }
                                    </CommandGroup>
                                    <CommandSeparator />
                                </>
                            ))
                        }
                        {/* <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <Smile className="mr-2 h-4 w-4" />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem>
                                <Calculator className="mr-2 h-4 w-4" />
                                <span>Calculator</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup> */}
                    </CommandList>
                </Command>
            </div>
            <div>Settings / Notifications</div>
        </div>
    )
}

export default Sidebar