import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions';

class fileUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			files: []
        };
        
        console.log(props);
		this.onFileSelect = this.onFileSelect.bind(this);
	}

	onFileSelect(event) {
		const self = this;
		event.preventDefault();
		if (event.target.files && event.target.files[0]) {
        
			this.setState({
				files: [...this.state.files, event.target.files[0]]
			});
			let reader = new FileReader();
			reader.onloadend = (e) => {
				self.setState({ imageURL: e.target.result });
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	render() {
        const { files, imageURL } = this.state;
		return (
			<div>
				<form encType="multipart/form-data">
					<input type="file" onChange={this.onFileSelect} />
					<button onClick={(e)=>{e.preventDefault();this.props.uploadFile(this.state.files)}}> Upload </button>
					<img src={imageURL}  style={{height:'100px', width:'100px'}} alt="loading" />
				</form>

				{
                   this.props.globalState.UploadedFiles.map((x) => {
                    return <li key={x.name}>
                    <span>{x.name}</span>
                  
                    </li>;
                })
                }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        globalState: state
    }
};


const mapDispatchToProps = (dispatch) => {
	return {
		uploadFile: (files) => {
			dispatch(uploadFile(files));
		}
	};
};

const FileUploadComponent = connect(mapStateToProps, mapDispatchToProps)(fileUpload);
export default FileUploadComponent;
