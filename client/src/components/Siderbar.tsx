import { ActivityIcon, HomeIcon, PersonStanding, UserIcon, UtensilsIcon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"


const Siderbar = () => {

    const navItems =[
        {path:'/',label:'Home',icon:HomeIcon},
        {path:'food',label:'Food',icon:UtensilsIcon},
        {path:'/actiity',label:'Activity',icon:ActivityIcon},
        {path:'/profile',label:'Profile',icon:UserIcon}
    ]

    const {theme,toggleTheme} = useTheme();

  return (
    <nav className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r
    border-slate-100 dark:border-slate-800 p-6 transition-colors duration-200">
        <div className="flex items-center gap-3 mb-8">
            <div className="size-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                <PersonStanding className="size-7 text-white"/>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">FitTrack</h1>
        </div>
    </nav>
  )
}

export default Siderbar