import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Label from 'next/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from '@/components/ui/input'

function create(){
  
}


const Home = () => {
  return (
    <div className="w-full h-full">
        <div className="w-full bg-normal p-10">
          <h1 className="text-white text-5xl font-bold md:text-xl">Welcome to 6-2 Paddlet</h1>
          <p className="text-white text-xl">Make A class And use with Student</p>
        </div>
        <div className="w-1/2 bg-normal p-20 m-10 rounded-lg">
          <h1 className="text-white text-5xl font-bold md:text-xl">Create New Paddlet</h1>
          <br/>
          <br/>
          <Dialog>
          
          <DialogTrigger asChild>
            <Button variant="outline" className="w-1/4">Create New paddlet</Button>
          </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New paddlet</DialogTitle>
                <DialogDescription>
                  <br/>
                  <Input placeholder="paddlet name"/>
                  <br/>
                  <Button onClick={create()}>Create</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>


        </div>
    </div>
  )
}

export default Home
