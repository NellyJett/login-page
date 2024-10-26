import './login.css'
// import { InboxArrowDownIcon } from '@heroicons/react/24/outline';

export const Login = () =>{
    return(
        <>
        
        <div className="w-full h-screen bg-[#000] flex justify-center items-center">
            <div className='login w-[60%] h-[600px] relative flex justify-center items-center '>
                <div 
                    className="sm:w-[50%] shadow-xl rounded-lg p-10" 
                style={{ backgroundColor: 'rgba(222, 249, 252, 0.1)' }}
                    >
                    <h2 className="text-2xl font-bold text-center mb-8">
                        <span className="text-[#cba135]">C</span>reative{' '}
                        <span className="text-[#cba135]">L</span>ogin{' '}
                        <span className="text-[#cba135]">F</span>orm
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Email" 
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>

                        <div>
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password" 
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="sm:w-[20%] bg-[#cba135] text-white py-3 rounded-lg hover:bg-[#a38831] transition"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
  
        </div>


        </>
    )
}
