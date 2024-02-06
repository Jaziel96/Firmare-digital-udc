"use client"

import Link from "next/link"
import { SignIn, } from "@supabase/auth-ui-react"


function Navbar () {

  

    return(
       <nav className='bg-slate-900 flex item-center py-3 justify-between px-24 text-white'>
            <Link href="/">
                <h1>Firmare</h1>
            </Link>
            <div className="flex gap-x-2 item-center">
                <Link href="/dashboard">
                    Dashboard
                </Link>
                <button onClick={()=>SignIn()} className="bg-sky-400 px-3 py-2 rounded">
                    Iniciar Sesion
                    </button>
            </div>
       </nav>
)}
export default Navbar