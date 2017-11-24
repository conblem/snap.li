import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import ListTile from "../components/ListTile";

const Send = ({ navigation }) => {
    return (
        <Screen title="Send" subTitle="Choose a friend">
            <FlatList data={[]} renderItem={ListTile} />
        </Screen>
    );
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Send);
