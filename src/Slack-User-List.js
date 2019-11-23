import React, { Component } from "react";
import axios from "axios";
import { Card,header} from "semantic-ui-react";

let endpoint = "https://slackuserlist-server.herokuapp.com";

class SlackUserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            items: []
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get(endpoint+ "/api/userlist").then(res => {
            console.log(res);
            if (res.data) {
                this.setState({
                    items: res.data.map(item => {
                        let color = "yellow";

                        if (item.status) {
                            color = "green";
                        }
                        return (
                            <Card key={item._id} color={color} fluid>
                                <Card.Content>
                                    <Card.Header textAlign="center">
                                        <div style={{ wordWrap: "break-word"}}>{item.name}</div>
                                        <div style={{wordWrap:"break-word"}}>{item.email}</div>
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                        );
                    })
                });
            } else {
                this.setState({
                    items: []
                })
            }
        });
    };
    render() {
        return (
            <div>
                <div className="row">
                    <header className="header" as="h1">
                        SLACK USER LIST
                    </header>
                </div>
                <div className="row">
                    <Card.Group>{this.state.items}</Card.Group>
                </div>
            </div>
        );
    }
}

export default SlackUserList;