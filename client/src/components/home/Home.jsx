import React from 'react';
import '../../index.css';

const Home = () => {
  return (
    <div class='Main-div flex justify-around gap-6 p-5 h-full w-screen'>
        <div class="todo-div bg-red-400 flex flex-col min-h-160 w-screen p-3 rounded-xl">
            <h1 class='text-2xl font-semibold '>To-Do</h1>
            <hr class='bg-black mt-1 mb-2'/>
            <div class="todotask flex flex-col bg-black p-2 gap-2 rounded-xl h-50">
                <div class='taskheading'>
                    <input class=' text-white placeholder:text-gray-300 outline-0 w-full' maxlength={50} placeholder='Heading' type='text'/>
                </div>
                <div class='taskdescription flex flex-wrap'>
                    <textarea wrap='soft' maxlength={120} rows={6} class='text-white resize-none placeholder:text-gray-300 outline-0 w-full ' placeholder='Description...'/>
                </div>
            </div>
        </div>

        <div class="todo-div bg-green-400 flex flex-col w-screen p-3 rounded-xl">
            <h1 class='text-2xl font-semibold '>Ongoing</h1>
            <hr class='bg-black mt-1 mb-2'/>
            <div class="todotask flex flex-col bg-black p-2 gap-2 rounded-xl h-50">
                <div class='taskheading'>
                    <input class=' text-white placeholder:text-gray-300 outline-0 w-full' maxlength={50} placeholder='Heading' type='text'/>
                </div>
                <div class='taskdescription flex flex-wrap'>
                    <textarea wrap='soft' maxlength={120} rows={6} class='text-white resize-none placeholder:text-gray-300 outline-0 w-full ' placeholder='Description...'/>
                </div>
            </div>
        </div>

        <div class="todo-div bg-blue-400 flex flex-col w-screen p-3 rounded-xl">
            <h1 class='text-2xl font-semibold '>Completed</h1>
            <hr class='bg-black mt-1 mb-2'/>
            <div class="todotask flex flex-col bg-black p-2 gap-2 rounded-xl h-50">
                <div class='taskheading'>
                    <input class=' text-white placeholder:text-gray-300 outline-0 w-full' maxlength={50} placeholder='Heading' type='text'/>
                </div>
                <div class='taskdescription flex flex-wrap'>
                    <textarea wrap='soft' maxlength={120} rows={6} class='text-white resize-none placeholder:text-gray-300 outline-0 w-full ' placeholder='Description...'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home