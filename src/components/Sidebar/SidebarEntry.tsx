
export default function SidebarEntry({ handleClick, title } : any) {
    return (
        <div onMouseDown={handleClick} className={"cursor-pointer active:text-font-color/70 px-2"}>
            {title}
        </div>
    )
}