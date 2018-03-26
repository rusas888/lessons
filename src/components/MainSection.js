import React, {Component} from 'react'
import axios from 'axios'
import Post from './Post'

class MainSection extends Component {
	constructor(props){
		super(props)
		this.state = {
			list: [],
			change: -1
		}
	}

	componentWillMount(){
		axios.get('/news')
		.then((res) => {
			this.setState({
				...this.state,
				list: res.data
			})
		})
		.catch((err) => {
			console.log(err.response)
		})
	}


	addPost(title, text) {
		axios.put('/news', {
			title: title,
			text: text
		})
		.then ((res) => {
			this.setState({
				...this.state,
				list: [
					...this.state.list,
					res.data
				]
			})
		})
	}

	selectChange = (index) => {
		this.setState({
			...this.state,
			change: index
		})
	}

	updatePost = (index, _id, title, text) => {
		axios.post('/news', {
			index: index,
			title: title,
			text: text,
			_id: _id
		})
		.then((res) => {
			this.setState({
				...this.state,
				change: -1,
				list: [
					...this.state.list.slice(0, index),
					{
						...this.state.list[index],
						...res.data
					},
					...this.state.list.slice(index + 1)
				]
			})
		})
		.catch((err) => {
			console.log(err.response)
		})
	}

	deletePost = (index, _id) => {
		axios.delete('/news/' + _id)
		.then((res) => {
			this.setState({
				...this.state,
				list: [
					...this.state.list.slice(0, index),
					...this.state.list.slice(index + 1)
				]
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	render(){
		return(
			<section>
				<input type='text' ref='title' />
				<input type='text' ref='text' />
				<button onClick={() => this.addPost(this.refs.title.value, this.refs.text.value)}>Add new post</button>

				{
					this.state.list.map((value, index) => {
						return <Post key={index} _id={value._id} index={index} deletePost={this.deletePost} updatePost={this.updatePost} selectChange={this.selectChange} change={index == this.state.change ? true : false} title={value.title} text={value.text} />
						}
					)
				}

			</section>
			)
	}
}

export default MainSection