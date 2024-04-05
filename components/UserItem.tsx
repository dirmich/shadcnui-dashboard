
'use client'
const UserItem = () => {
    return (
        <div className="flex items-center justify-between gap-2 border rounded-lg p-2">
            <div className="avatar rounded-full h-12 w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                <p>GD</p>
            </div>
            <div className="grow">
                <p className="text-sm font-bold">David, Shin</p>
                <p className="text-xs text-neutral-400">oldtv.cf@gmail.com</p>
            </div>
        </div>
    )
}

export default UserItem