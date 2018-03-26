import React from 'react'

const Post = ({index, title, _id, text, change, selectChange, updatePost, deletePost}) => {
	if (!change){
		return (
			<div className='post'>
				<div>Title: {title}</div>
				<div>Text: {text}</div>
				<button onClick={() => selectChange(index, _id)}>Изменить</button>
				<button onClick={() => deletePost(index, _id)}>Удалить</button>
				<hr />
			</div>
		)
	} else {
		return (
			<div className='post'>
				<div>Title: <input type='text' id='title' defaultValue={title} /></div>
				<div>Text: <input type='text' id='text' defaultValue={text} /></div>
				<button onClick={() => updatePost(index, _id, document.getElementById('title').value, document.getElementById('text').value)}>Сохранить</button>
				<hr />
			</div>
		)
	}
}

export default Post