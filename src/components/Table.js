import React, { Component } from "react";
import Modal from "./Modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class Table extends Component {
    state = {
        checked: []
    }

    handleOpenModal = (element) => {
        document.querySelector('.modal-body').style.opacity = '1';
        document.querySelector('.modal-body').style.transform = 'translate(-50%, 0)';

        const checkedAll = document.querySelectorAll('input[type=checkbox]');
        if (element.target.value === 'checkedAll') {
            if (!element.target.checked === true) {
                checkedAll.forEach(e => {
                    e.checked = false;
                })
                this.setState({ checked: [] });
            } else {
                let array = [];
                checkedAll.forEach(e => {
                    e.checked = true;
                    array.push(e.value)
                });
                let index = array.indexOf("checkedAll");
                array.splice(index, 1);
                this.setState({
                    checked: array
                })
            }
        } else {
            if (this.state.checked.includes(element.target.value)) {
                const array = [...this.state.checked];
                const index = array.indexOf(element.target.value)
                if (index !== -1) {
                    array.splice(index, 1);
                    this.setState({ checked: array });
                }
            } else {
                this.setState({
                    checked: this.state.checked.concat(element.target.value)
                })
            }
        }
    }

    handleCloseModal = () => {
        document.querySelector('.modal-body').style.opacity = '0';
        document.querySelector('.modal-body').style.transform = 'translate(-50%, 100%)';
    }

    handleDelete = () => {
        this.state.checked.forEach(value => {
            document.getElementById(value).style.display = "none"
        });
        this.setState({ checked: [] });
    }

    render() {
        return (
            <React.Fragment>
                <div className="table table-header">
                    <span>
                        <input type="checkbox" id="checkall" value="checkedAll" onClick={this.handleOpenModal} />
                        <label htmlFor="checkall"></label>
                    </span>
                    <span>Name</span>
                    <span>Category</span>
                    <span>Availability</span>
                    <span>Arrival</span>
                </div>
                <form>
                    <div className="table table-body" id="1">
                        <span>
                            <input type="checkbox" id="check1" value="1" onClick={this.handleOpenModal} />
                            <label htmlFor="check1"></label>
                        </span>
                        <span>Table 01</span>
                        <span>Category 01</span>
                        <span>Available</span>
                        <span>Arrived</span>
                    </div>
                    <div className="table table-body" id="2">
                        <span>
                            <input type="checkbox" id="check2" value="2" onClick={this.handleOpenModal} />
                            <label htmlFor="check2"></label>
                        </span>
                        <span>Table 02</span>
                        <span>Category 01</span>
                        <span>Full</span>
                        <span>Hasn't arrived</span>
                    </div>
                    <div className="table table-body" id="3">
                        <span>
                            <input type="checkbox" id="check3" value="3" onClick={this.handleOpenModal} />
                            <label htmlFor="check3"></label>
                        </span>
                        <span>Table 03</span>
                        <span>Category 01</span>
                        <span>Available</span>
                        <span>Arrived</span>
                    </div>
                    <div className="table table-body" id="4">
                        <span>
                            <input type="checkbox" id="check4" value="4" onClick={this.handleOpenModal} />
                            <label htmlFor="check4"></label>
                        </span>
                        <span>Table 04</span>
                        <span>Category 01</span>
                        <span>Full</span>
                        <span>Arrived</span>
                    </div>
                </form>
                <Modal className="modal" onClose={this.handleCloseModal} onDelete={this.handleDelete}>
                    {this.state.checked.length} Table Selected
            </Modal>
            </React.Fragment >
        )
    }
}

export default Table;