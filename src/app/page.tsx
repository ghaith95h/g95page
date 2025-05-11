'use client'
 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Button} from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { CheckIcon }  from "lucide-react";
 import { Label } from "@radix-ui/react-label";
 import { Eye, EyeOff , Github , Mail } from "lucide-react";
 

export default function Home() {
 
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [showPassword, setShowPassword ] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
    <motion.div
    initial={{opacity: 0, y:-20 }}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    className="w-full max-w-md"  
    >
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6"> 
    <div className="text-center space-y-2"> 
    <h1 className="text-3xl font-extrabold tracking-tighter"> Welcome To This Page  </h1>
    <p className="text-muted-foreground">Enter Your Credentails To Access Your Accont</p>
    </div>
    <form className="space-y-4">
    <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
    id="email"
    type="email"
    placeholder="ghaith@youtube.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    />
    </div>
    <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <div className="relative">
    <Input
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    />
    <button 
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
    >

    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    
    </button>
    </div>
    </div>
    <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
    <CheckIcon id="remember"  />
    <Label htmlFor="remember">Remember Me</Label>

    </div>
    <a href="#" className="text-sm text-primary-500 hover:text-primary-600"> Forgot Password ?</a>
  
    </div>
    <Button type="submit" className="w-full"> Sign In</Button>

    </form>
    <div className="relative">
    <div className="absolute inset-0 flex items-center"> 
    <span className="w-full border-t"/>
    </div>
    <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-white px-2 text-muted-foreground" >or continue with</span>
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
    <Button variant="outline" className="w-full">
    <Github className="mr-2 h-4 w-4"/>Github</Button>
    
    <Button variant="outline" className="w-full">
    <Mail className="mr-2 h-4 w-4"/>Google</Button>
    </div>
    <div className="text-center text-sm">
    Don't Have an Account ? {""}
    <a 
    href="#"
    className="text-primary-500 hiver:text-primary-600 font-medium"
    >
    Sign Up
    </a>
    </div>
    </div>
  
    </motion.div>
    

    </div>
 
    
  );
}
