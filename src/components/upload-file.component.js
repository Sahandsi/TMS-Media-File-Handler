import React, {Component} from 'react';
import axios from 'axios';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class CreateFile extends Component {


    constructor(props) {
        super(props);

        this.onChangeFileDescription = this.onChangeFileDescription.bind(this);
        this.onChangeEmployeeResponsible = this.onChangeEmployeeResponsible.bind(this);
        this.onChangeEditActive = this.onChangeEditActive.bind(this);
        this.onChangeFileExtension = this.onChangeFileExtension.bind(this);
        this.onChangeFileSize = this.onChangeFileSize.bind(this);
        this.onChangeFileDuration = this.onChangeFileDuration.bind(this);
        this.onChangeFileArtist = this.onChangeFileArtist.bind(this);
        this.onChangeFileBitrate = this.onChangeFileBitrate.bind(this);
        this.onChangeFileCodec = this.onChangeFileCodec.bind(this);
        this.onChangeFileTag = this.onChangeFileTag.bind(this);
        this.onChangeFileChannels = this.onChangeFileChannels.bind(this);
        this.onChangeFileDimensions = this.onChangeFileDimensions.bind(this);
        this.onChangeFileProfile = this.onChangeFileProfile.bind(this);
        this.onChangeFileDimensions = this.onChangeFileDimensions.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file_description: '',
            file_employeeResponsible: '',
            file_editActive: '',
            file_completed: false,
            file_size: '',
            file_duration: '',
            file_artist: '',
            file_bitrate: '',
            file_codec: '',
            file_audioChannels: '',
            file_dimensions: '',
            file_colorProfile: '',
            file_extension: '',
            file_tag: '',
            key: 'audio',
            isloggedin: true
        };
        this.handleSelect = this.handleSelect.bind(this);
        axios
            .get("http://localhost:4000/api/isloggedin")
            .then(res => {
                if (!res.data) {
                    return this.setState({isloggedin: false});
                }
            });

    }

    handleSelect(key) {
        console.log('selected' + key);
        this.setState({key: key});
    }

    onChangeFileDescription(e) {
        this.setState({
            file_description: e.target.value
        });
    }

    onChangeFileTag(e) {
        this.setState({

            file_tag: e.target.value
        });
    }


    onChangeFileExtension(e) {
        this.setState({
            file_extension: e.target.value
        });
    }

    onChangeFileSize(e) {
        this.setState({
            file_size: e.target.value
        });
    }

    onChangeFileDuration(e) {
        this.setState({
            file_duration: e.target.value
        });
    }

    onChangeFileArtist(e) {
        this.setState({
            file_artist: e.target.value
        });
    }

    onChangeFileBitrate(e) {
        this.setState({
            file_bitrate: e.target.value
        });
    }

    onChangeFileChannels(e) {
        this.setState({
            file_audioChannels: e.target.value
        });
    }


    onChangeFileDimensions(e) {
        this.setState({
            file_dimensions: e.target.value
        });
    }

    onChangeFileProfile(e) {
        this.setState({
            file_colorProfile: e.target.value
        });
    }

    onChangeFileCodec(e) {
        this.setState({
            file_codec: e.target.value
        });
    }


    onChangeEmployeeResponsible(e) {
        this.setState({
            file_employeeResponsible: e.target.value
        });
    }

    onChangeEditActive(e) {
        this.setState({
            file_editActive: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`File Description: ${this.state.file_description}`);
        console.log(`File Size: ${this.state.file_size}`);
        console.log(`File Duration: ${this.state.file_duration}`);
        console.log(`File Artist: ${this.state.file_artist}`);
        console.log(`File Tag: ${this.state.file_tag}`);
        console.log(`File Bitrate: ${this.state.file_bitrate}`);
        console.log(`File Codec: ${this.state.file_codec}`);
        console.log(`File Audio Channels: ${this.state.file_audioChannels}`);
        console.log(`File Dimensions: ${this.state.file_dimensions}`);
        console.log(`File Color Profile: ${this.state.file_colorProfile}`);
        console.log(`File Extension: ${this.state.file_extension}`);
        console.log(`Employee Responsible: ${this.state.file_employeeResponsible}`);
        console.log(`Edit Active: ${this.state.file_editActive}`);
        console.log(`Completed: ${this.state.file_completed}`);

        const newFile = {
            file_description: this.state.file_description,
            file_size: this.state.file_size,
            file_duration: this.state.file_duration,
            file_artist: this.state.file_artist,
            file_bitrate: this.state.file_bitrate,
            file_codec: this.state.file_codec,
            file_tag: this.state.file_tag,
            file_audioChannels: this.state.file_audioChannels,
            file_dimensions: this.state.file_dimensions,
            file_colorProfile: this.state.file_colorProfile,
            file_extension: this.state.file_extension,
            file_employeeResponsible: this.state.file_employeeResponsible,
            file_editActive: this.state.file_editActive,
            file_completed: this.state.file_completed
        }

        axios.post('http://localhost:4000/files/add', newFile)
            .then(res => console.log(res.data));

        this.setState({
            file_description: '',
            file_size: '',
            file_duration: '',
            file_tag: '',
            file_artist: '',
            file_bitrate: '',
            file_codec: '',
            file_audioChannels: '',
            file_dimensions: '',
            file_colorProfile: '',
            file_extension: '',
            file_employeeResponsible: '',
            file_editActive: '',
            file_completed: false
        })
    }

    render() {
        return this.state.isloggedin ? (
            <div style={{marginTop: 20}}>

                <h3>Upload a New File</h3>


                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({key})}
                >
                    <Tab eventKey="audio" title="Audio">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}

                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Duration: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_duration}
                                       onChange={this.onChangeFileDuration}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Artist: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_artist}
                                       onChange={this.onChangeFileArtist}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Bitrate: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_bitrate}
                                       onChange={this.onChangeFileBitrate}
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       name="tag"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                />




                                console.log("axios response:", result)






                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeNo"
                                           value="No"
                                           checked={this.state.file_editActive === 'No'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeYes"
                                           value="Yes"
                                           checked={this.state.file_editActive === 'Yes'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="video" title="Video">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Duration: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_duration}
                                       onChange={this.onChangeFileDuration}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Codec: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_codec}
                                       onChange={this.onChangeFileCodec}
                                />
                            </div>
                            <div className="form-group">
                                <label>File audio channels: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_audioChannels}
                                       onChange={this.onChangeFileChannels}
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                />
                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeNo"
                                           value="No"
                                           checked={this.state.file_editActive === 'No'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeYes"
                                           value="Yes"
                                           checked={this.state.file_editActive === 'Yes'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="image" title="Image">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Dimensions: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_dimensions}
                                       onChange={this.onChangeFileDimensions}
                                />
                            </div>
                            <div className="form-group">
                                <label>File colour profile: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_colorProfile}
                                       onChange={this.onChangeFileProfile}
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                />
                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeNo"
                                           value="No"
                                           checked={this.state.file_editActive === 'No'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeYes"
                                           value="Yes"
                                           checked={this.state.file_editActive === 'Yes'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="Other" title="Other">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                />

                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                />
                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeNo"
                                           value="No"
                                           checked={this.state.file_editActive === 'No'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="editActiveOpt"
                                           id="activeYes"
                                           value="Yes"
                                           checked={this.state.file_editActive === 'Yes'}
                                           onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Upload File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>

                </Tabs>

            </div>
        ) : (
            <h3>Please login</h3>
        );
    }
}

