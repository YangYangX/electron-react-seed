import React from 'react';

const menuBarHeight = 50;
const containerBoxHeight = (window.innerHeight - 50) * 0.8;
const containerFotterHeight = (window.innerHeight - 50) * 0.2;

export default {
    screen: {},
    container: {
        height: containerBoxHeight,
    },
    logoNavbar: {
        height: '45px',
    },
    AboutDialog: {
        fontFamily: 'PingFang-SC-Regular',
        width: '600px',
    },
    version: {
        fontSize: 12,
        marginLeft: '10px',
    },
    quit: {
        width: '250px',
    },
    titleLine: {
        marginTop: '0px',
        marginRight: '0px',
        marginLeft: '0px',
        marginBottom: '0px',
        borderBottom: '5px solid #01579B',
    },
    editorTitle: {
        fontFamily: 'PingFang-SC-Regular',
        fontSize: 28,
        margin: '20px',
        textAlign: 'center',
    },
    editorSectionIconContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    editorSectionIcon: {
        width: '128px',
        height: '128px',
    },
    editorSectionTitle: {
        fontSize: 24,
        fontFamily: 'PingFang-SC-Regular',
    },
    editorSectionBtn: {
        height: '45px',
        width: '120px',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Regular',
    },
    editorSectionDesc: {
        fontFamily: 'PingFang-SC-Light',
        fontSize: 14,
        fontWeight: 'Regular',
        height: '120px',
    },
    editorSection: {
        padding: '65px',
        paddingBottom: '30px',
    },
    aboutLogoContainer: {
        textAlign: 'center',
    },
    aboutLogo: {
        width: '300px',
    },
    aboutVersionInfo: {
        marginTop: '45px',
        fontFamily: 'PingFang-SC-Bold',
        fontSize: 12,
    },
    footer: {
        width: '100%',
        height: containerFotterHeight - 90,
    },
};
