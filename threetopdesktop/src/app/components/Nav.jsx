import Imgs from '../asset/3top.png'
import '../globals.css';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className='p-2 text-lg text-weight-bolder bg-black'>
        <Image src={Imgs} width="150" className='w-10'/>
    </nav>
  )
}
