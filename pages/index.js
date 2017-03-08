import React from 'react';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Map from '../components/Map'

class Home extends React.Component {
  // static getInitialProps ({}) {
  // }

  state = {
    status: 'available',
    name: 'Nome',
    email: 'E-mail',
    comment: 'Deixe seu comentário.',
  }

  handleChange = (name, value) => {
    const change = {};
    change[name] = value;
    this.setState(change);
  }

  handleSubmit = () => {
    event.preventDefault();
    const { name, email, comment } = this.state;
    this.setState({ status: 'pending' });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Contact handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Map />
      </div>
    )
  }
}

export default Home;