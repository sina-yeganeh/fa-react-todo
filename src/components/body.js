import React from 'react';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            cash: [

            ],

            toDos: [
                /* 
                    Test todo for developer
                */
                {
                    name: 1,
                    value: "یادگیری ری اکت با مقاله"
                },

                {
                    name: 2,
                    value: "عمیق شدن در اکسپرس و نود جی اس"
                },
            ]
        }

        // this.getToDoFromInput = this.getToDoFromInput.bind(this);
        this.setToDo = this.setToDo.bind(this);
    }

    // getToDoFromInput(e) {
    //     this.setState({
    //         toDo: {
    //             name: this.state.toDos.length + 1,
    //             value: e.target.value,
    //         }
    //     });
    // }

    // componentDidMount() {
    //     this.timerID = setInterval(() => {
    //         this.getToDoFromInput();
    //     }, 3000)
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    setToDo() {
        // ...
    }

    render() {
        return (
            <div className="to-do">
                <input 
                    type="text"
                    name="to-do"
                    placeholder="هدف"
                    className="to-do-inputs"
                    ref={(a) => this.cash = a}
                    // onChange={(e) => this.getToDoFromInput(e)}
                />
                <button className="add-to-do" onClick={this.setToDo()}>اضافه کردن</button>
                <div className="to-dos">
                    {this.state.toDos.map((toDo) => (
                        <div className="to-do-task">
                            {/* <input checked={this.state.toDo.checked} type="checkbox" value="todo1" name="checkbox1"  className="checkbox-parts" id="checkbox-inputs" style={`display: ${this.state.toDo.status}`} />
                            <label for="checkbox1" className="checkbox-parts">{}</label> */}
                        
                            <input type="checkbox"  name={toDo.name} className="checkbox-parts" />
                            <label for={toDo.name}>{toDo.value}</label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Body;