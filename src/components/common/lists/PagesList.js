import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, ScrollView, Platform, Dimensions} from 'react-native';

import PageCard from '../../common/PageCard';

class PagesList extends Component{

	renderList(){
		console.log(this.props.pages);
		return this.props.pages.map(page => {
			return(
				<View key={page._id}>
					<PageCard fromBook={this.props.fromBook} page={page}/>
				</View>
			);
		});
	}

	render() {

		return(
			<View>
				{this.renderList()}
			</View>
		);
	}
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
	card: {
		marginVertical: 5, 
		width,
		shadowOffset: {width: 2, height: 3},
		shadowOpacity: 0.2,
		elevation: (Platform.OS == 'android') ? 3 : 0,
	}
});

export default PagesList;



