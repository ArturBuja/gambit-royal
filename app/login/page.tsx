function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='bg-white rounded-lg shadow-lg px-12 pt-6 pb-8'>
        <div className='mb-4'>
          <label
            htmlFor='login'
            className='block text-sm font-medium text-gray-700'>
            Login
          </label>
          <input
            type='text'
            id='login'
            name='login'
            placeholder='Wpisz login'
            className='w-full px-3 py-2 mt-1 text-base text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'>
            Hasło
          </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Wpisz hasło'
            className='w-full px-3 py-2 mt-1 text-base text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <button className=' flex ml-auto px-4 py-2 text-white bg-blue-600 rounded-md bottom-4 right-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 '>
          Zaloguj
        </button>
      </div>
    </div>
  );
}

export default Login;
