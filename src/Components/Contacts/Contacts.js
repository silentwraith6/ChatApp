import React, { Component } from 'react';
import { MenuList, MenuItem, ListItemAvatar, Avatar, ListItemText, Box } from '@material-ui/core';
import { Person as PersonIcon, GroupAdd as GroupAddIcon, PersonAdd as PersonAddIcon } from '@material-ui/icons';
import contacts from '../../Data/Contacts';
import { withStyles } from '@material-ui/core/styles';
import ContactHeader from '../Header/ContactHeader';

const styles = (theme) => ({
	overflowText: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	addAvatar: {
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText
	}
});

class Contacts extends Component {
	constructor(props) {
		super(props);
	}
	handleSelectContact = (contact) => {
		this.props.history.push(`/chat/${contact.name}`);
	};
	handleAddContact = () => {
		this.props.history.push('/addContact');
	}
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<ContactHeader headerText={{primary: 'Select Contact', secondary: `${contacts.length} Contacts`}} />
				<MenuList>
					<MenuItem onClick={this.handleAddGroup}>
						<ListItemAvatar>
							<Avatar className={classes.addAvatar}>
								<GroupAddIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="New Group" />
					</MenuItem>
					<MenuItem onClick={this.handleAddContact}>
						<ListItemAvatar>
							<Avatar className={classes.addAvatar}>
								<PersonAddIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="New Contact" />
					</MenuItem>
					{contacts.map((contact, index) => {
						if(contact.type === "group")
							return;
						return (<Box key={index}>
							<MenuItem onClick={() => this.handleSelectContact(contact)}>
								<ListItemAvatar>
									<Avatar className={classes.avatar}>
										<PersonIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									classes={{ primary: classes.overflowText, secondary: classes.overflowText }}
									primary={contact.name}
									secondary={contact.about}
								/>
							</MenuItem>
						</Box>
					)})}
				</MenuList>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Contacts);