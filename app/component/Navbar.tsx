import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavLinkProps)
{
    return(
        <li className="hover:bg-slate-600 py-2 px-2">
            <Link href = {props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar(){
    return(
        <nav className="bg-slate-800 text-slate-50 shadow-xl py-2">
            <ul className="flex flex-col md:flex-row container mx-auto gap-4">
                <NavLink href={"/"}>Accueil</NavLink>
                <NavLink href={"/booking"}>Booking</NavLink>
                
            </ul>
        </nav>
    )
}