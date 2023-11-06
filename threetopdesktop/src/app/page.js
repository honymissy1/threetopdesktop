import Link from "next/link";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';


export async function getData() {
     const snapshot = await getDocs(collection(db, 'users'));

  return snapshot
}

export default async function Home() {
    const data = await getData();
    const update = []
    const result = data.forEach((doc) =>{
      update.push(doc)
      console.log(doc.id);
     })

    return (
      <main className="min-h-screen p-4 w-full mx-auto md:w-4/5">
        <div className="w-full h-auto my-4 mx-auto flex gap-3 sm:w-4/5">
          <input className="w-full p-2 rounded-sm" type="text" placeholder="Search..." />
          <input type="submit" value="Search" className="h-full p-2 rounded-sm bg-green-700 text-white"/>
        </div>



                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {
                    update.map((ele) =>(
                      <Link key={ele?.data().passportNumber} href={`/${ele?.id}`} className="shadow">
                      <div className="p-3 h-35 bg-white rounded flex flex-col gap-5">
                        <div>
                          <h1 className="truncate"><span className="font-bold">Name:</span> {ele?.data().fullName}</h1>
                          <p><span className="font-bold">Passport Number:</span> {ele?.data().passportNumber} </p>
                          <p><span className="font-bold">Date Of Birth:</span> {ele?.data().dob}</p>
                        </div>
                        <span className="text-end text-sm text-purple-900">3 Minutes Ago</span>
                      </div>
                    </Link>
                    ))
                  }

                </div>
          

          {/* <div className="h-20 bg-white rounded"></div>
          <div className="h-20 bg-white rounded"></div> */}
      </main>
    )
  }