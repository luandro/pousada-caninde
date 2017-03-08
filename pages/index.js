import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Pictures from '../components/Pictures'
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
    menu: false,
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

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        <Navbar toggle={this.toggleMenu} open={menu} />
        <Hero />
        <About />
        <Services />
        <Pictures />
        <Contact handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state} />
        <Map />
      </div>
    )
  }
}

export default Home;