'use client'

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
import {db} from "/firebase/firebasedb.ts"
import {useGetDocuments} from "/firebase/getData.ts"

import { collection, addDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';
import { getDocs } from "firebase/firestore";


export default function Home(){
  const [search, setSearch] = useState('');
  const [id, setId] = useState('');
  const [find, setfind] = useState('');


  async function get(f) {
    const querySnapshot = await getDocs(collection(db, "classes"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      if (doc.data()["id"] === f){
        setId(doc.id);
        
      }
    });
  }

  async function create(){
    get("abc");
    if (search !== undefined || search != ""){
      await addDoc(collection(db, `classes`),
      {
        "id" : search,
      })
      setSearch(undefined);
    }
  }

  
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
            <Button variant="outline" className="w-1/4">New paddlet</Button>
          </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New paddlet</DialogTitle>
                <DialogDescription>
                  <br/>
                  <Input type='text' onChange={(e)=>setSearch(e.target.value)} />
                  <br/>
                  <Button onClick={create}>Create New Paddlet</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>


        </div>
    </div>
  )
}
