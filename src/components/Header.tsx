import React from 'react'

const Header = React.memo(({ setUser }) => {
  console.log('header rendered')
  const user = setUser()
  console.log(user);
  
  return <div className='bg-zinc-600 w-screen py-2'>{user}</div>
})

export default Header
// export default React.memo(Header)
