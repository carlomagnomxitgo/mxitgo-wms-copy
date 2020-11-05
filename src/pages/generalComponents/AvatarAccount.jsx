import React, { PureComponent } from 'react';
import { _ } from 'lodash';
import { Avatar } from 'antd';

export default class AvatarAccount extends PureComponent {
    render() {
        console.log("AvatarAccount")
        console.log(this.props)
        return (
            <div>
                {/* <Avatar size={200} src={this.props.dataImagen}>
                    {"user"}
                </Avatar> */}
                {/* {this.props.nameUser ? */}
                <Avatar
                    size={200}
                    style={{
                        backgroundColor: '#7ec07b',
                    }}
                    src={this.props.sourceAvatar}
                >
                    {"U"}
                </Avatar>
                {/* :

                    <Avatar
                        size={200}
                        src={<Image src={this.props.dataImagen} />}
                    >
                    </Avatar>

                } */}

            </div>
        );
    }
}