import { Component } from 'react'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: 'sarnath'
    }
  }
  render () {
    const { name } = this.props
    return (
      <div className='bg-zinc-900 h-screen text-white'>
        hello {name}
        <h1
          onClick={() =>
            this.setState({
              address: 'varanasi'
            })
          }
        >
          {this.state.address}
        </h1>
      </div>
    )
  }
}
export default Profile
