import React from 'react'

const Header = React.memo(({user}) => {
  console.log('header rendered')

  return <div className='bg-zinc-600 w-screen py-2'>{user}</div>
})

export default Header
// export default React.memo(Header)