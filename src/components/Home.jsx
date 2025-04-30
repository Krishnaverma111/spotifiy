import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import gta from '../assets/Images/gta.jpg';
import crowd from '../assets/Images/crowd.jpg';
import vidyasagar from '../assets/Images/vidyasagar.jpg';
import backlash from '../assets/Images/backlash.jpg';
import maand from '../assets/images/maand.jpg';
import pritam from '../assets/Images/pritam.jpg'
import ar from  '../assets/Images/ar.jpg'
import Arijit from '../assets/Images/Arijit.jpg'
import atif from '../assets/Images/atif.jpg'
import sachin from '../assets/Images/sachin.jpg'
import vishal from '../assets/Images/vishal.jpg'
const songs = [
  { img: gta, title: "Pal Pal", artist: "Afusic, AliSoomro Music" },
  { img: crowd, title: "Superstar", artist: "dox, JASKARAN, Rita Kim" },
  { img: vidyasagar, title: "Thottu Thottu", artist: "Swarnalatha, Pushpavanam" },
  { img: vidyasagar, title: "Finding Her", artist: "Kushagra, Bharath, Saaheal" },
  { img: backlash, title: "BACKLASH", artist: "Prem Dhillon, The Kidd" },
  { img: maand, title: "Maand", artist: "Bayaa, Hasan Raheem, Rovalio" },

 
];
const artists =[
  {img:pritam,Name:"Pritam"},
  {img:ar,Name:"A.r rahman"},
  {img:Arijit,Name:"Arijit Singh"},
  {img:atif,Name:"Atif-aslam"},
  {img:sachin,Name:"Sachin-jigar"},
  {img:vishal,Name:"Vishal-shekhar"},

]
const SongCard = ({ img, title, artist }) => (
  <div className='w-[155px]'>
    <img className='h-[170px] w-full rounded-lg' src={img} alt={title} />
    <h1 className='text-white font-semibold mt-2'>{title}</h1>
    <h2 className='text-gray-400 text-[14px] font-medium'>{artist}</h2>
  </div>
);

const Home = () => {
  
  return (
    <div className='flex bg-black min-h-screen p-2 gap-[10px]'>
      {/* Sidebar */}
      <aside className='bg-zinc-900 text-white md:w-[420px] w-[1000px] rounded-md p-4 space-y-6 overflow-y-auto pb-4'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-xl'>Your Library</h1>
          <IoMdAdd className='text-2xl' />
        </div>
        
        <div className='bg-zinc-700 p-4 rounded-md mt-0'>
          <h2 className='font-bold mb-1'>Create your first playlist</h2>
          <p className='text-sm'>It’s easy, we’ll help you</p>
          <button className='mt-3 bg-white text-black font-bold py-1 px-4 rounded-full hover:scale-105 transition'>
            Create Playlist
          </button>
        </div>

        <div className='bg-zinc-700 p-4 rounded-md'>
          <h2 className='font-bold mb-1'>Find podcasts to follow</h2>
          <p className='text-sm'>We’ll keep you updated on new episodes</p>
          <button className='mt-3 bg-white text-black font-bold py-1 px-4 rounded-full hover:scale-105 transition'>
            Browse Podcasts
          </button>
        </div>

        <div className='text-[12px] text-gray-400 space-y-2 pt-6'>
          <div className='flex flex-wrap gap-4'>
            <span>Legal</span>
            <span>Safety & Privacy</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
            <span>About Ads</span>
            <span>Accessibility</span>
          </div>
          <div className='mt-4 w-fit px-4 py-1 border border-gray-500 rounded-2xl flex items-center gap-2'>
            <CiGlobe className='text-lg' />
            <span className='text-white font-bold'>English</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex flex-col bg-zinc-900 rounded-md p-4 overflow-y-auto h-screen'>
        <h1 className='text-white text-2xl font-bold mb-6'>Trending Songs</h1>
        
        <div className='flex flex-wrap gap-4 '>
          {songs.map((song, idx) => (
            <SongCard key={idx} {...song} />
          ))}
        </div>
        <div className='mt-16 flex flex-col left-0 '>
          <h1 className='h-[18px] font-bold text-2xl text-white'>Popular Artists</h1>
          <div className='flex w-full gap-6'>
          {artists.map((item,key)=>(
            <div className='flex flex-col h-[300px] w-[150px]   justify-center ' key={key}>
            <img className="h-[150px] rounded-[50%] w-[150px] " src={item.img} alt="" />
            <h1 className='text-white '>{item.Name}</h1>
            <h1 className='text-gray-400 font-semibold '>Artist</h1>

          </div>
          ))}
          </div>
          
          
        </div>
        <div className='mt-16 flex flex-col left-0 '>
          <h1 className='h-[18px] font-bold text-2xl text-white'>Popular Artists</h1>
          <div className='flex w-full gap-6'>
          {artists.map((item,key)=>(
            <div className='flex flex-col h-[300px] w-[150px]   justify-center ' key={key}>
            <img className="h-[150px] rounded-[50%] w-[150px] " src={item.img} alt="" />
            <h1 className='text-white '>{item.Name}</h1>
            <h1 className='text-gray-400 font-semibold '>Artist</h1>

          </div>
          ))}
          </div>
          
          
        </div>
      
      </main>
    </div>
  );
};

export default Home;
