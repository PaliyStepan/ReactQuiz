import React, {Component} from 'react'
import  './Layout.css'
import MenuToggle from '../../components/Navigaion/MenuToggle/MenuToggle.js'
import Drawer from '../../components/Navigaion/Drawer/Drawer.js'
import {connect} from 'react-redux'

class Layout extends Component{
	state = {
		menu: false
	};

	toggleMenuHandler = () =>{
		this.setState({
			menu: !this.state.menu
		})
	};

	menuCloseHandler = () => {
		this.setState({
			menu: false
		})
	};

	render(){
		return (
			<div className="Layout">
				<Drawer 
					isOpen={this.state.menu}
					onClose={this.menuCloseHandler}
					isAuthenticated={this.props.isAuthenticated }
				/>
				<MenuToggle
					onToggle={this.toggleMenuHandler}
					isOpen={this.state.menu}
				/>
				<main className="main">
					{this.props.children}
				</main>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token
	}
}

export default connect(mapStateToProps)(Layout);