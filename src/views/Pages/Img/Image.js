import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import fire from '../../../config/Fire'
import FileUploader from "react-firebase-file-uploader"

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        };
    }

    handleChangeUsername = event => this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        fire
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };



    render() {
        return (
            <div className="app flex-row align-items-center">
                <form>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChangeUsername}
                    />
                    <label>Avatar:</label>
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.avatarURL && <img src={this.state.avatarURL} width="50px"/>}
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={fire.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </form>
            </div>
        );
    }
}

export default Image;
